import { Container } from "@components/layout/Container";
import SectionHeader from "@components/layout/SectionHeader";
import SelectedTech from "./partials/SelectedTech";
import TechList from "./partials/TechList";
const Technology = () => {
    return (
        <section className="pb-28">
            <Container>
                <SectionHeader title="Explore the" titleHeighlight="Technologies" description="Pick one technology per category to build your ideal stack." />
                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-full xl:col-span-3">
                        <TechList />
                    </div>
                    <div className="lg:col-span-full xl:col-span-1">
                        <SelectedTech />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Technology;