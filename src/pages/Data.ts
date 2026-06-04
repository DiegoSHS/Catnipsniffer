import type { CreationInput } from "../features/creation/types"
import type { ProfileInput } from "../features/profile/types"
import type { SectionInput } from "../features/section/types"
import type { SocialInput } from "../features/social/types"

export const creationsTest: CreationInput[] = [
    {
        image: "applejack.jpg",
        link: "https://www.instagram.com/p/DZAgJbTMRat/"
    },
    {
        image: "fluttershy.jpg",
        link: "https://www.instagram.com/p/DYue95sM1Vm/"
    },
    {
        image: "pinkiepie.jpg",
        link: "https://www.instagram.com/p/DY7V5EosXQj/"
    },
    {
        image: "rainbowdash.jpg",
        link: "https://www.instagram.com/p/DYoovOMsIyY/"
    },
    {
        image: "luna.jpg",
        link: "https://www.instagram.com/p/DY2M8liMxFy/"
    },
    {
        image: "celestia.jpg",
        link: "https://www.instagram.com/p/DYjvXNRsy2z/"
    }
]

export const profileTest: ProfileInput = {
    name: "CatnipSniffer",
    description: "digital artist, open for commissions and collabs.",
    image: "profile.jpg",
    footer: "dm me to get my free pony animated icons or more infos about my commissions",
    imageMimeType: "image/jpeg"
}

export const socialsTest: SocialInput[] = [
    { name: "instagram", link: "https://www.instagram.com/catnipsnifferr?igsh=MTd4YmNramU4N2g1Zw%3D%3D&utm_source=qr", color: "from-pink-600 to-rose-600" },
    { name: "tiktok", link: "https://www.tiktok.com/@catnipsnifferz?_r=1&_t=ZN-96ZQ3yIrwEI", color: "from-black to-gray-100" },
    { name: "twitter", link: "https://x.com/catnipsniffy?s=21", color: "from-blue-400 to-blue-600" },
    { name: "art fight", link: "https://artfight.net/~catnipsniffer", color: "from-orange-500 to-red-600" },
    { name: "ko-fi", link: "https://ko-fi.com/catnipsnifferr?ref=onboarding_email_founderwelcome", color: "from-amber-500 to-yellow-600" },
    { name: "pony icons ✨", link: "https://drive.google.com/drive/folders/1zYHLifMXk7xeEl8FDkLcvdsIqvv1azYa", color: "from-amber-500 to-yellow-600" },
]

export const sectionsTest: SectionInput[] = [
    {
        title: "Animated icons: 30€ - Custom pony: 35€ (no ref sheet) · 55€ (with ref sheet)",
        description: "",
        image: "",
        size: "full",
        type: "DEFAULT",
        color: "default"
    },
    {
        title: "Fullbody",
        description: "Shaded pony: 30€\nShaded human/furry: 40€\nSketch furry/anthro/human (with colors): 25€\nSketch pony/feral/furry (with colors): 20€",
        image: "human.jpg",
        size: "half",
        type: "LIST",
        color: "default"
    },
    {
        title: "Headshot",
        description: "Sketch (pony/human/furry) with simple colors: 10€\nShaded pony: 15€\nShaded furry: 20€\nShaded human: 20€",
        image: "derpy.jpg",
        size: "half",
        type: "LIST",
        color: "default"
    },
    {
        title: "I don't do",
        description: "Complex landscapes\nExtreme gore\nExtremely muscular characters",
        image: "",
        size: "half",
        type: "LIST",
        color: "red"
    },
    {
        title: "Payment",
        description: "PayPal only",
        image: "",
        size: "half",
        type: "DEFAULT",
        color: "green"
    }
]