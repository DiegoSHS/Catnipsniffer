import { ApiClient } from "../../ApiClient";

export const getCreationsForProfile = <T = unknown>(profileId: string) =>
    ApiClient.get<T[]>({ path: `/profile/${encodeURIComponent(profileId)}/creation` });

export const createCreation = <T = unknown>(profileId: string, body: unknown) =>
    ApiClient.post<T>({
        path: `/profile/${encodeURIComponent(profileId)}/creation`,
        body,
    });

export const getCreationById = <T = unknown>(profileId: string, creationId: string) =>
    ApiClient.get<T>({
        path: `/profile/${encodeURIComponent(profileId)}/creation/${encodeURIComponent(creationId)}`,
    });

export const updateCreation = <T = unknown>(profileId: string, creationId: string, body: unknown) =>
    ApiClient.put<T>({
        path: `/profile/${encodeURIComponent(profileId)}/creation/${encodeURIComponent(creationId)}`,
        body,
    });

export const deleteCreation = (profileId: string, creationId: string) =>
    ApiClient.delete<null>({
        path: `/profile/${encodeURIComponent(profileId)}/creation/${encodeURIComponent(creationId)}`,
    });

export const getCreationImage = (profileId: string, creationId: string) =>
    ApiClient.get<Blob>({
        path: `/profile/${encodeURIComponent(profileId)}/creation/${encodeURIComponent(creationId)}/image`,
        responseType: "blob",
    });
