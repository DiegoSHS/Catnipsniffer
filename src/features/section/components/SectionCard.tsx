import { Card } from "@heroui/react"
import type { SectionColor, SectionInput, SectionType } from "../types"

export const cardStyles: Record<SectionColor, string> = {
    red: "bg-red-500/10 border-red-500/50",
    green: "bg-green-500/10 border-green-500/50",
    blue: "bg-blue-500/10 border-blue-500/50",
    yellow: "bg-yellow-500/10 border-yellow-500/50",
    default: "",
}


interface SectionDescriptionProps {
    type: SectionType,
    description: string
}

const SectionDescription = ({ type, description }: SectionDescriptionProps) => {
    if (!description) return null;
    return (
        type === "LIST" ? (
            <ul className="list-disc list-inside mt-4">
                {description.split("\n").map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        ) : (<p className="text-lg">{description}</p>)
    )
}

export interface SectionCardProps {
    section: SectionInput
}

export const SectionCard = ({ section }: SectionCardProps) => {
    return (
        <Card className={`${section.size === "full" ? "md:col-span-2" : ""} ${cardStyles[section.color]}`}>
            <Card.Header>
                <Card.Title className={`${section.color === "red" ? "text-red-500" : ""} text-xl md:text-2xl font-bold`}>{section.title}</Card.Title>
            </Card.Header>
            <Card.Content>
                <SectionDescription type={section.type} description={section.description} />
                {
                    section.image && (
                        <img src={section.image} className="rounded-xl mt-4" alt={section.title} />
                    )
                }
            </Card.Content>
        </Card>
    )
}

export const SectionCards = ({ sections }: { sections: SectionInput[] }) => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
            {sections.map((section, index) => (
                <SectionCard key={index} section={section} />
            ))}
        </div>
    )
}