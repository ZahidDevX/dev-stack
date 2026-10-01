import type { ITechnology } from "@/types/technology";
import { use, type Dispatch, type SetStateAction } from "react";
import TechCard from "./TechCard";

interface TechListProps {
    technologyPromise: Promise<ITechnology[]>;
    stack: ITechnology[],
    setStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechList = ({ technologyPromise, stack, setStack }: TechListProps) => {

    const technologies = use(technologyPromise);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologies.map((technology) => <TechCard technology={technology} key={technology.id} stack={stack} setStack={setStack} />)}
        </div>
    );
};

export default TechList;