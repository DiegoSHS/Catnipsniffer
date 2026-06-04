type ClientResult<T> =
    | {
        error: null;
        data: T;
        code: number;
    }
    | {
        error: string;
        code: number;
        data: null;
    };

type ResponseType = "json" | "text" | "blob" | "arrayBuffer";

interface FetchHttpClientOptions {
    baseURL?: string;
    timeout?: number;
    defaultHeaders?: Record<string, string>;
}

interface RequestOptions extends Omit<RequestInit, "body" | "headers"> {
    headers?: Record<string, string>;
}

interface RequestParams {
    path: string;
    options?: RequestOptions;
    overrideBaseURL?: boolean;
    responseType?: ResponseType;
}

interface RequestWithBodyParams extends RequestParams {
    body?: unknown;
}

interface GetRequestParams extends RequestParams { }

interface PostRequestParams extends RequestWithBodyParams { }

interface PutRequestParams extends RequestWithBodyParams { }

interface DeleteRequestParams extends RequestParams { }

interface InternalRequestParams extends RequestWithBodyParams {
    method: string;
}

interface IHttpClient {
    get<T>(params: GetRequestParams): Promise<ClientResult<T>>;
    post<T>(params: PostRequestParams): Promise<ClientResult<T>>;
    put<T>(params: PutRequestParams): Promise<ClientResult<T>>;
    delete<T>(params: DeleteRequestParams): Promise<ClientResult<T>>;
}

class FetchHttpClient implements IHttpClient {
    private options: FetchHttpClientOptions;

    constructor(
        options: FetchHttpClientOptions = {
            timeout: 10000,
            baseURL: "https://yts.mx/api/v2",
        },
    ) {
        this.options = options;
    }

    private resolveUrl(path: string, overrideBaseURL: boolean): string {
        if (overrideBaseURL) return path;

        return `${this.options.baseURL}${path}`;
    }

    private async request<T>(
        params: InternalRequestParams,
    ): Promise<ClientResult<T>> {
        const controller = new AbortController();
        const timeoutId = window.setTimeout(
            () => controller.abort(),
            this.options.timeout,
        );

        try {
            const headers: Record<string, string> = {
                ...this.options.defaultHeaders,
                ...(params.body != null ? { "Content-Type": "application/json" } : {}),
                ...(params.options?.headers || {}),
            };

            const response = await fetch(
                this.resolveUrl(params.path, params.overrideBaseURL ?? false),
                {
                    method: params.method,
                    headers,
                    signal: controller.signal,
                    body: params.body != null ? JSON.stringify(params.body) : undefined,
                    ...params.options,
                },
            );

            clearTimeout(timeoutId);

            if (!response.ok) {
                const rawText = await response.text().catch(() => "");
                const errorPayload = rawText ? rawText : null;

                return {
                    data: null,
                    code: response.status,
                    error: `HTTP error ${response.status}: ${errorPayload || response.statusText}`,
                };
            }

            if (params.responseType === "blob") {
                return {
                    code: response.status,
                    error: null,
                    data: (await response.blob()) as unknown as T,
                };
            }

            if (params.responseType === "arrayBuffer") {
                return {
                    code: response.status,
                    error: null,
                    data: (await response.arrayBuffer()) as unknown as T,
                };
            }

            if (params.responseType === "text") {
                return {
                    code: response.status,
                    error: null,
                    data: (await response.text()) as unknown as T,
                };
            }

            const contentType = response.headers.get("content-type") || "";

            if (contentType.includes("application/json")) {
                return {
                    code: response.status,
                    error: null,
                    data: (await response.json()) as T,
                };
            }

            if (contentType.startsWith("text/")) {
                return {
                    code: response.status,
                    error: null,
                    data: (await response.text()) as unknown as T,
                };
            }

            return {
                code: response.status,
                error: null,
                data: (await response.text()) as unknown as T,
            };
        } catch (error) {
            clearTimeout(timeoutId);

            return {
                code: 500,
                data: null,
                error:
                    error instanceof Error ? error.message : "Unknown error occurred",
            };
        }
    }

    get<T>(params: GetRequestParams): Promise<ClientResult<T>> {
        return this.request<T>({
            ...params,
            method: "GET",
        });
    }

    post<T>(params: PostRequestParams): Promise<ClientResult<T>> {
        return this.request<T>({
            ...params,
            method: "POST",
        });
    }

    put<T>(params: PutRequestParams): Promise<ClientResult<T>> {
        return this.request<T>({
            ...params,
            method: "PUT",
        });
    }

    delete<T>(params: DeleteRequestParams): Promise<ClientResult<T>> {
        return this.request<T>({
            ...params,
            method: "DELETE",
        });
    }
}

export const ApiClient: IHttpClient = new FetchHttpClient({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
});
