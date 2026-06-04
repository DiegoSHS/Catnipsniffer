import { ApiClient } from "../../ApiClient";

export const getProfiles = <T = unknown>() =>
    ApiClient.get<T[]>({ path: "/profile" });

export const createProfile = <T = unknown>(body: unknown) =>
    ApiClient.post<T>({ path: "/profile", body });

export const getProfileById = <T = unknown>(id: string) =>
    ApiClient.get<T>({ path: `/profile/${encodeURIComponent(id)}` });

export const updateProfile = <T = unknown>(id: string, body: unknown) =>
    ApiClient.put<T>({ path: `/profile/${encodeURIComponent(id)}`, body });

export const deleteProfile = (id: string) =>
    ApiClient.delete<null>({ path: `/profile/${encodeURIComponent(id)}` });

export const getProfileImage = (id: string) =>
    ApiClient.get<Blob>({
        path: `/profile/${encodeURIComponent(id)}/image`,
        responseType: "blob",
    });
