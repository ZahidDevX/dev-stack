import type { ITechnology } from "@/types/technology";
import { type Dispatch, type SetStateAction } from "react";
import { FaStar } from "react-icons/fa6";
import { toast } from "react-toastify";

interface TechCardProps {
    technology: ITechnology;
    stack: ITechnology[],
    setStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechCard = ({ technology, stack, setStack }: TechCardProps) => {

    const regularCardStyle = "border-slate-100";

    const handleAddStack = () => {
        const techIsExist = stack.find((tech) => {
            return technology.id === tech.id;
        });
        if (techIsExist) {
            toast.error(`Technology ${technology.name} already exist in your stack.`);
        } else {
            setStack([...stack, technology]);
            toast.success(`Technology ${technology.name} added to your stack.`);
        }
    };

    const isSelected = stack.find((item) => technology.id === item.id);

    return (
        <div className={`p-5 space-y-4 border ${regularCardStyle} rounded-2xl shadow-sm`}>
            <div className="flex justify-between items-start">
                <img src={technology.icon} alt="" className="w-10" />
                <span className="bg-blue-50 text-blue-400 font-semibold px-3 py-1 rounded-full  text-xs md:text-base">{technology.badge}</span>
            </div>
            <div className="space-y-2">
                <h3 className="text-dark font-bold text-xl">{technology.name}</h3>
                <p className="text-justify">{technology.description}</p>
            </div>
            <div className="py-2 border-t border-slate-100 flex gap-3 justify-between items-center text-xs md:text-base">
                <span className="bg-slate-100 px-2 py-0.5 rounded text-dark">{technology.category}</span>
                <span className="px-2 py-0.5">{technology.difficulty}</span>
                <span className="text-dark flex items-center"><FaStar className="text-amber-400" /> {technology.rating}</span>
            </div>
            <div>
                <button className="btn-primary w-full disabled:bg-slate-200! disabled:cursor-not-allowed!" onClick={handleAddStack} disabled={isSelected ? true : false}>
                    {isSelected ? "✓ Added to Stack" : "Add To Stack"}
                </button>
            </div>
        </div>
    );
};

export default TechCard;