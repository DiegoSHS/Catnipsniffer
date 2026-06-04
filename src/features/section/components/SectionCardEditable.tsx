import { Button, Card, Label, Surface, Switch, TextArea } from "@heroui/react"
import { useState } from "react"
import { BsUpload } from "react-icons/bs"
import { FaSave } from "react-icons/fa"
import { FaTrash } from "react-icons/fa6"
import { cardStyles, type SectionCardProps } from "./SectionCard"
import type { SectionInput } from "../types"

interface SectionImageEditableProps {
    hasImage: boolean
    image: string
    title: string
}

const SectionImageEditable = ({ hasImage, image, title }: SectionImageEditableProps) => {
    if (!hasImage) return null
    if (image) return (
        <div className="block relative">
            <Button variant="primary" size="sm" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1">
                Change image
            </Button>
            <img src={image} className="rounded-xl mt-4 opacity-50" alt={title} />
        </div>
    )
    return (
        <Surface variant="secondary" className="w-full aspect-square rounded-xl grid place-items-center">
            <div className="">
                <Button variant="primary" size="sm" className="">
                    <BsUpload />
                    Upload image
                </Button>
            </div>
        </Surface>
    )
}

export const SectionCardEditable = ({ section }: SectionCardProps) => {
    const [hasImage, setHasImage] = useState(!!section.image || false);
    return (
        <Card className={`${section.size === "full" ? "md:col-span-2" : ""} ${cardStyles[section.color]}`}>
            <Card.Header>
                <TextArea placeholder="Section title" className={`${section.color === "red" ? "text-red-500" : ""} text-xl md:text-2xl font-bold`}>
                    {section.title}
                </TextArea>
            </Card.Header>
            <Card.Content>
                <TextArea rows={section.description.split("\n").length} placeholder="Content">
                    {section.description}
                </TextArea>
                <SectionImageEditable
                    hasImage={hasImage}
                    image={section.image}
                    title={section.title}
                />
            </Card.Content>
            <Card.Footer className="flex justify-between gap-2">
                <Switch isSelected={hasImage} onChange={setHasImage}>
                    <Switch.Control>
                        <Switch.Thumb />
                    </Switch.Control>
                    <Switch.Content>
                        <Label className="text-sm">Image</Label>
                    </Switch.Content>
                </Switch>
                <div className="flex gap-2">
                    <Button>
                        <FaSave />
                        Save
                    </Button>
                    <Button variant="danger">
                        <FaTrash />
                        Delete
                    </Button>
                </div>
            </Card.Footer>
        </Card>
    )
}

export const SectionCardsEditable = ({ sections }: { sections: SectionInput[] }) => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
            {sections.map((section, index) => (
                <SectionCardEditable key={index} section={section} />
            ))}
        </div>
    )
}