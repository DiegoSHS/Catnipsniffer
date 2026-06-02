import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "CatnipSniffer" },
    { name: "description", content: "Welcome to CatnipSniffer page!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
