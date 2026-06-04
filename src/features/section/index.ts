import { ApiClient } from "../../ApiClient";

export const getSectionsForProfile = <T = unknown>(profileId: string) =>
    ApiClient.get<T[]>({ path: `/profile/${encodeURIComponent(profileId)}/section` });

export const createSection = <T = unknown>(profileId: string, body: unknown) =>
    ApiClient.post<T>({
        path: `/profile/${encodeURIComponent(profileId)}/section`,
        body,
    });

export const getSectionById = <T = unknown>(profileId: string, sectionId: string) =>
    ApiClient.get<T>({
        path: `/profile/${encodeURIComponent(profileId)}/section/${encodeURIComponent(sectionId)}`,
    });

export const updateSection = <T = unknown>(profileId: string, sectionId: string, body: unknown) =>
    ApiClient.put<T>({
        path: `/profile/${encodeURIComponent(profileId)}/section/${encodeURIComponent(sectionId)}`,
        body,
    });

export const deleteSection = (profileId: string, sectionId: string) =>
    ApiClient.delete<null>({
        path: `/profile/${encodeURIComponent(profileId)}/section/${encodeURIComponent(sectionId)}`,
    });

export const getSectionImage = (profileId: string, sectionId: string) =>
    ApiClient.get<Blob>({
        path: `/profile/${encodeURIComponent(profileId)}/section/${encodeURIComponent(sectionId)}/image`,
        responseType: "blob",
    });
