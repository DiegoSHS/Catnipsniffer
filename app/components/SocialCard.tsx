import { Avatar, Card, Link } from "@heroui/react";
import { FaInstagram, FaTiktok, FaXTwitter, FaDownload } from "react-icons/fa6";
import { GiSwordClash } from "react-icons/gi";
import { SiKofi } from "react-icons/si";

const socialLinks = [
    { name: "Instagram", Icon: FaInstagram, href: "#", color: "from-pink-600 to-rose-600" },
    { name: "TikTok", Icon: FaTiktok, href: "#", color: "from-black to-gray-100" },
    { name: "Twitter", Icon: FaXTwitter, href: "#", color: "from-blue-400 to-blue-600" },
    { name: "Art Fight", Icon: GiSwordClash, href: "#", color: "from-orange-500 to-red-600" },
    { name: "Ko-fi", Icon: SiKofi, href: "#", color: "from-amber-500 to-yellow-600" },
    { name: "Free to use pony icons ✨", Icon: FaDownload, href: "#", color: "from-amber-500 to-yellow-600" },
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
            className="w-full group no-underline"
        >
            <div className={`w-full flex items-center justify-center gap-2 p-4 bg-foreground/5 hover:bg-gradient-to-r ${color} rounded-lg font-semibold text-sm md:text-base hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer
                            `}>
                <Icon className="text-lg md:text-2xl" />
                <span className="">{name}</span>
            </div>
        </Link>
    )
}

export function SocialCard() {
    return (
        <Card className="w-full max-w-3xl text-center">
            <Card.Header className="flex flex-col md:flex-row items-center gap-3">
                <Avatar className="w-20 h-20 md:w-24 md:h-24 rounded-full flex-shrink-0" aria-hidden>
                    <Avatar.Image src="profile.jpg" />
                    CS
                </Avatar>
                <div className="space-y-1">
                    <Card.Title className="text-xl md:text-2xl font-bold">CatnipSniffer</Card.Title>
                    <Card.Description className="text-xs md:text-sm">
                        digital artist, open for commissions and collabs.
                    </Card.Description>
                </div>
            </Card.Header>

            <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-4">
                    {socialLinks.map((social) => (
                        <SocialLink
                            key={social.name}
                            name={social.name}
                            Icon={social.Icon}
                            href={social.href}
                            color={social.color}
                        />
                    ))}
                </div>
            </div>

            <Card.Footer className="flex flex-col items-center gap-2 pt-2 pb-4">
                <p className="text-xs md:text-sm text-gray-300 text-center px-2">
                    dm me to get my free pony animated icons or more infos about my commissions
                </p>
            </Card.Footer>
        </Card>
    );
}