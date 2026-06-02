import { Avatar, Card, Link } from "@heroui/react";
import { FaInstagram, FaTiktok, FaXTwitter, FaDownload } from "react-icons/fa6";
import { GiSwordClash } from "react-icons/gi";
import { SiKofi } from "react-icons/si";

const socialLinks = [
    { name: "Instagram", Icon: FaInstagram, href: "https://www.instagram.com/catnipsnifferr?igsh=MTd4YmNramU4N2g1Zw%3D%3D&utm_source=qr", color: "from-pink-600 to-rose-600" },
    { name: "TikTok", Icon: FaTiktok, href: "https://www.tiktok.com/@catnipsnifferz?_r=1&_t=ZN-96ZQ3yIrwEI", color: "from-black to-gray-100" },
    { name: "Twitter", Icon: FaXTwitter, href: "https://x.com/catnipsniffy?s=21", color: "from-blue-400 to-blue-600" },
    { name: "Art Fight", Icon: GiSwordClash, href: "https://artfight.net/~catnipsniffer", color: "from-orange-500 to-red-600" },
    { name: "Ko-fi", Icon: SiKofi, href: "https://ko-fi.com/catnipsnifferr?ref=onboarding_email_founderwelcome", color: "from-amber-500 to-yellow-600" },
    { name: "Pony icons ✨", Icon: FaDownload, href: "https://drive.google.com/drive/folders/1zYHLifMXk7xeEl8FDkLcvdsIqvv1azYa", color: "from-amber-500 to-yellow-600" },
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

export function SocialCard() {
    return (
        <Card className="w-full max-w-5xl text-center bg-default/50 border-default/50">
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