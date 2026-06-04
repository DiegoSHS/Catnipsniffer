import { Avatar, Card } from "@heroui/react";
import type { ProfileInput } from "../../profile/types";
import type { SocialInput } from "../types";
import { SocialLinks } from "./SocialLink";

interface SocialCardProps {
    profile: ProfileInput,
    socials: SocialInput[]
}

export function SocialCard({ profile, socials }: SocialCardProps) {
    return (
        <Card className="w-full max-w-5xl text-center bg-default/50 border-default/50">
            <Card.Header className="flex flex-col md:flex-row items-center gap-3">
                <Avatar className="w-20 h-20 md:w-24 md:h-24 rounded-full flex-shrink-0" aria-hidden>
                    <Avatar.Image src={profile.image} />
                    {profile.name[0].toUpperCase()} {/* Fallback to first letter of name */}
                </Avatar>
                <div className="space-y-1">
                    <Card.Title className="md:flex self-start text-xl md:text-2xl font-bold">{profile.name}</Card.Title>
                    <Card.Description className="md:flex self-start text-xs md:text-sm">
                        {profile.description}
                    </Card.Description>
                </div>
            </Card.Header>

            <div className="">
                <SocialLinks socials={socials} />
            </div>

            <Card.Footer className="flex flex-col items-center gap-2 pt-2 pb-4">
                <p className="text-xs md:text-sm text-gray-300 text-center px-2">
                    {profile.footer}
                </p>
            </Card.Footer>
        </Card>
    );
}