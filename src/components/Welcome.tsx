import { Card } from "@heroui/react";
import { SectionTitle } from "./SectionTitle";
import { SocialCard } from "./SocialCard";
import { ImageCard } from "./ImageCard";

export function Welcome() {
  const images = [
    {
      image: "applejack.jpg",
      url: "https://www.instagram.com/p/DZAgJbTMRat/"
    },
    {
      image: "fluttershy.jpg",
      url: "https://www.instagram.com/p/DYue95sM1Vm/"
    },
    {
      image: "pinkiepie.jpg",
      url: "https://www.instagram.com/p/DY7V5EosXQj/"
    },
    {
      image: "rainbowdash.jpg",
      url: "https://www.instagram.com/p/DYoovOMsIyY/"
    },
    {
      image: "luna.jpg",
      url: "https://www.instagram.com/p/DY2M8liMxFy/"
    },
    {
      image: "celestia.jpg",
      url: "https://www.instagram.com/p/DYjvXNRsy2z/"
    }
  ]
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      <SectionTitle title="Catnipsniffer socials" />
      <section className="flex gradient-background-alt w-full  items-center justify-center p-10">
        <SocialCard />
      </section>
      <section className="flex flex-col gradient-background w-full items-center justify-center p-10">
        <SectionTitle title="Some of My Work" />
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map(({ image, url }) => {
            return (
              <ImageCard key={image} src={image} url={url} />
            )
          })}
        </div>
      </section>
      <SectionTitle title="What I do" />
      <section className="max-w-5xl flex flex-col gap-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <Card className="md:col-span-2">
            <Card.Content>
              <div>
                <p className="text-xl md:text-2xl font-bold">Animated icons: <strong>30€</strong></p>
                <p><strong></strong></p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold">Custom pony: <strong>35€</strong> (no ref sheet) · <strong>55€</strong> (with ref sheet)</p>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title className="text-xl md:text-2xl font-bold">Fullbody</Card.Title>
            </Card.Header>
            <Card.Content>
              <ul className="list-disc list-inside">
                <li>Shaded pony: <strong>30€</strong></li>
                <li>Shaded human/furry: <strong>40€</strong></li>
                <li>Sketch furry/anthro/human (with colors): <strong>25€</strong></li>
                <li>Sketch pony/feral/furry (with colors): <strong>20€</strong></li>
              </ul>
              <img src="human.jpg" className="rounded-xl" alt="Human Character" />
            </Card.Content>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title className="text-xl md:text-2xl font-bold">Headshot</Card.Title>
            </Card.Header>
            <Card.Content>
              <ul className="list-disc list-inside">
                <li>Sketch (pony/human/furry) with simple colors: <strong>10€</strong></li>
                <li>Shaded pony: <strong>15€</strong></li>
                <li>Shaded furry: <strong>20€</strong></li>
                <li>Shaded human: <strong>20€</strong></li>
              </ul>
              <img src="derpy.jpg" className="rounded-xl" alt="Headshot Character" />
            </Card.Content>
          </Card>
          <Card className="bg-red-500/10 border-red-500/50">
            <Card.Header>
              <Card.Title className="text-danger text-xl md:text-2xl font-bold">I don't do</Card.Title>
            </Card.Header>
            <Card.Content>
              <ul className="list-disc list-inside">
                <li>Complex landscapes</li>
                <li>Extreme gore</li>
                <li>Extremely muscular characters</li>
              </ul>
            </Card.Content>
          </Card>
          <Card className="bg-green-500/10 border-green-500/50">
            <Card.Header>
              <Card.Title className="text-xl md:text-2xl font-bold">Payment</Card.Title>
            </Card.Header>
            <Card.Content>
              PayPal only
            </Card.Content>
          </Card>
        </div>
      </section>
    </main>
  );
}
