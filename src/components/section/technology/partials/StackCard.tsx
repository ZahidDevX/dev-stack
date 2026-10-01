import type { ITechnology } from "@/types/technology";
import type { Dispatch, SetStateAction } from "react";
import { FaXmark } from "react-icons/fa6";

interface SelectedTechCardProps {
    selectedTechnology: ITechnology;
    stack: ITechnology[];
    setStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const StackCard = ({ selectedTechnology, stack, setStack }: SelectedTechCardProps) => {
    const handleRemoveTech = () => {
        const newStack = stack.filter((tech) => {
            return tech.id !== selectedTechnology.id;
        });
        setStack(newStack);
    };
    return (
        <div className="p-4 border border-slate-100 rounded-2xl flex gap-3 justify-between items-center">
            <div>
                <img src={selectedTechnology.icon} alt="" className="w-8" />
            </div>
            <div className="flex-1">
                <h4 className="text-dark font-bold leading-2">{selectedTechnology.name}</h4>
                <span className="text-sm">{selectedTechnology.category}</span>
            </div>
            <div>
                <button className="cursor-pointer" onClick={handleRemoveTech}><FaXmark className="text-3xl" /></button>
            </div>
        </div>
    );
};

export default StackCard;