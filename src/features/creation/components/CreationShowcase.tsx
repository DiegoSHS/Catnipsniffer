import { ImageCard } from "../../../components/ImageCard"
import type { CreationInput } from "../types"

interface CreationShowcaseProps {
    images?: CreationInput[]
}

export const CreationsShowcase = ({ images = [] }: CreationShowcaseProps) => {
    if (images.length === 0) return (
        <p className="text-sm text-gray-400 italic">No creations added yet. Edit your profile to add them!</p>
    )
    return (
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map(({ image, link }) => {
                return (
                    <ImageCard key={image} src={image} url={link} />
                )
            })}
        </div>
    )
}