import { Link } from "@heroui/react"
import { FaInstagram, FaLink, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { GiSwordClash } from "react-icons/gi";
import { SiKofi } from "react-icons/si";
import type { SocialInput } from "../types";

const socialMapper = [
    { name: "instagram", Icon: FaInstagram, href: "https://www.instagram.com/catnipsnifferr?igsh=MTd4YmNramU4N2g1Zw%3D%3D&utm_source=qr", color: "from-pink-600 to-rose-600" },
    { name: "tiktok", Icon: FaTiktok, href: "https://www.tiktok.com/@catnipsnifferz?_r=1&_t=ZN-96ZQ3yIrwEI", color: "from-black to-gray-100" },
    { name: "twitter", Icon: FaXTwitter, href: "https://x.com/catnipsniffy?s=21", color: "from-blue-400 to-blue-600" },
    { name: "art fight", Icon: GiSwordClash, href: "https://artfight.net/~catnipsniffer", color: "from-orange-500 to-red-600" },
    { name: "ko-fi", Icon: SiKofi, href: "https://ko-fi.com/catnipsnifferr?ref=onboarding_email_founderwelcome", color: "from-amber-500 to-yellow-600" },
    { name: "pony icons ✨", Icon: FaLink, href: "https://drive.google.com/drive/folders/1zYHLifMXk7xeEl8FDkLcvdsIqvv1azYa", color: "from-amber-500 to-yellow-600" },
];

export const SocialLink = ({ name, Icon, href, color }: {
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

export const SocialLinks = ({ socials }: { socials: SocialInput[] }) => {
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