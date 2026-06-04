import { Link } from "@heroui/react"
import { FaInstagram, FaLink, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { GiSwordClash } from "react-icons/gi";
import { SiKofi } from "react-icons/si";
import type { SocialInput } from "../types";

const socialMapper = [
    { name: "instagram", Icon: FaInstagram },
    { name: "tiktok", Icon: FaTiktok },
    { name: "twitter", Icon: FaXTwitter },
    { name: "art fight", Icon: GiSwordClash },
    { name: "ko-fi", Icon: SiKofi },
    { name: "pony icons ✨", Icon: FaLink },
];


const SocialLink = ({ name, Icon, href, color }: {
    name: string,
    Icon: React.ElementType,
    href: string,
    color: string
}) => {
    return (
        <Link
            key={name}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            className="w-full group no-underline"
        >
            <div className={`w-full flex items-center justify-center gap-2 p-4 bg-foreground/5 hover:bg-gradient-to-r ${color} rounded-lg font-semibold text-sm md:text-base hover:shadow-lg hover:scale-102 transition-all duration-200 cursor-pointer
                            `}>
                <Icon className="text-lg md:text-2xl" />
                <span className="">{name}</span>
            </div>
        </Link>
    )
}

interface SocialLinksProps {
    socials?: SocialInput[]
}

export const SocialLinks = ({ socials = [] }: SocialLinksProps) => {
    if (socials.length === 0) return (
        <p className="text-sm text-gray-400 italic">No socials added yet. Edit your profile to add them!</p>
    )
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-4">
            {socials.map((social) => (
                <SocialLink
                    key={social.name}
                    name={social.name}
                    Icon={socialMapper.find((s) => s.name === social.name)?.Icon || FaLink}
                    href={social.link}
                    color={social.color}
                />
            ))}
        </div>
    )
}