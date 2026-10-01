import type { ITechnology } from "@/types/technology";
import { Container } from "@components/layout/Container";
import SectionHeader from "@components/layout/SectionHeader";
import { Suspense, useState } from "react";
import Stack from "./partials/Stack";
import TechList from "./partials/TechList";
const Technology = () => {

    const technologyPromise = async (): Promise<ITechnology[]> => {
        const res = await fetch("/data/technologies.json");
        const data = await res.json();
        return data;
    };

    const [technologies] = useState(() => technologyPromise());

    const [stack, setStack] = useState<ITechnology[]>([]);

    return (
        <section className="pb-28">
            <Container>
                <SectionHeader title="Explore the" titleHeighlight="Technologies" description="Pick one technology per category to build your ideal stack." />
                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-full xl:col-span-3">
                        <Suspense fallback={<p>Loading....</p>}>
                            <TechList technologyPromise={technologies} stack={stack} setStack={setStack} />
                        </Suspense>
                    </div>
                    <div className="lg:col-span-full xl:col-span-1">
                        <Stack stack={stack} setStack={setStack} />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Technology;