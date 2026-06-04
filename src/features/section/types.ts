type SectionType = "WARNING" | "NOTE" | "DEFAULT"

export type SectionInput = {
    type: SectionType
    size: string
    title: string
    description: string
    image: string
    imageMimeType?: string
}