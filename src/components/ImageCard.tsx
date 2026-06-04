import { Card, Link } from "@heroui/react"

export const ImageCard = ({ src = "image.png", url }: { src: string, url?: string }) => {
    return (
        <Card
            className="p-0 m-0 hover:shadow-xl hover:shadow-pink-300/50 hover:scale-105 overflow-hidden rounded-lg aspect-square relative border-none"
        >
            <Link className="w-full h-full p-0 m-0 no-underline" href={url || "#"} target="_blank" rel="noopener noreferrer">
                <img
                    alt="Image card"
                    aria-hidden="true"
                    className="brightness-75 hover:brightness-100 absolute inset-0 h-full w-full object-cover aspect-square"
                    src={src}
                />
            </Link>
        </Card>
    )
}