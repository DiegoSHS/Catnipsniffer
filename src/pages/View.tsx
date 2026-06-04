import { SectionTitle } from "../components/SectionTitle";
import { SocialCard } from "../features/social/components/SocialCard";
import { CreationsShowcase } from "../features/creation/components/CreationShowcase";
import { SectionCards } from "../features/section/components/SectionCard";
import { creationsTest, profileTest, sectionsTest, socialsTest } from "./Data";

interface ViewPageProps {
    onNavigateToEdit: () => void;
}

export function ViewPage({ onNavigateToEdit }: ViewPageProps) {
    return (
        <main className="flex flex-col items-center justify-center pt-16 pb-4">
            <div className="flex items-center gap-4 mb-4">
                <SectionTitle title={`${profileTest.name} socials`} />
                <button
                    onClick={onNavigateToEdit}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Edit
                </button>
            </div>
            <section className="flex gradient-background-alt w-full  items-center justify-center p-10">
                <SocialCard profile={profileTest} socials={socialsTest} />
            </section>
            <section className="flex flex-col gradient-background w-full items-center justify-center p-10">
                <SectionTitle title="Some of My Work" />
                <CreationsShowcase images={creationsTest} />
            </section>
            <SectionTitle title="What I do" />
            <section className="max-w-5xl flex flex-col gap-4">
                <SectionCards sections={sectionsTest} />
            </section>
        </main>
    );
}
