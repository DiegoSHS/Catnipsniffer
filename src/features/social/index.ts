import { ApiClient } from "../../ApiClient";

export const getSocialsForProfile = <T = unknown>(profileId: string) =>
    ApiClient.get<T[]>({ path: `/profile/${encodeURIComponent(profileId)}/social` });

export const createSocial = <T = unknown>(profileId: string, body: unknown) =>
    ApiClient.post<T>({
        path: `/profile/${encodeURIComponent(profileId)}/social`,
        body,
    });

export const getSocialById = <T = unknown>(profileId: string, socialId: string) =>
    ApiClient.get<T>({
        path: `/profile/${encodeURIComponent(profileId)}/social/${encodeURIComponent(socialId)}`,
    });

export const updateSocial = <T = unknown>(profileId: string, socialId: string, body: unknown) =>
    ApiClient.put<T>({
        path: `/profile/${encodeURIComponent(profileId)}/social/${encodeURIComponent(socialId)}`,
        body,
    });

export const deleteSocial = (profileId: string, socialId: string) =>
    ApiClient.delete<null>({
        path: `/profile/${encodeURIComponent(profileId)}/social/${encodeURIComponent(socialId)}`,
    });
