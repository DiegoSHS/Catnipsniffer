export type SectionType = "DEFAULT" | "LIST"
export type SectionSize = "full" | "half"
export type SectionColor = "red" | "green" | "blue" | "yellow" | "default"

export type SectionInput = {
    type: SectionType
    color: SectionColor
    size: SectionSize
    title: string
    description: string
    image: string
    imageMimeType?: string
}