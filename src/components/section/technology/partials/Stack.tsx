import type { ITechnology } from "@/types/technology";
import type { Dispatch, SetStateAction } from "react";
import StackCard from "./StackCard";
import { toast } from "react-toastify";

interface SelectedTechListProps {
    stack: ITechnology[],
    setStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const Stack = ({ stack, setStack }: SelectedTechListProps) => {

    const handleRemoveAll = () => {
        setStack([]);
        toast.success("Removed all technologies from your stack.")
    };

    const stackLength = stack.length;

    return (
        <div className="p-5 rounded-2xl border border-slate-100 shadow-sm space-y-8">
            <div>
                <h3 className="text-dark font-bold text-xl">Your Stack</h3>
                <p>{stackLength > 0 ? `${stack.length} Technology Selected` : "No technologies selected yet."}</p>
            </div>
            {stackLength > 0 ?
                <div className="space-y-4">
                    <div className="space-y-4">
                        {stack.map((item: ITechnology) => <StackCard selectedTechnology={item} stack={stack} setStack={setStack} key={item.id} />)}
                    </div>
                    <div>
                        <button className="w-full px-5 py-3 border border-red-800 text-red-700 rounded-xl font-bold cursor-pointer" onClick={handleRemoveAll}>Remove All</button>
                    </div>
                </div>
                :
                < div className="p-4 border-2 border-dashed border-slate-200 rounded-lg text-slate-400 flex items-center justify-center">
                    Your stack is empty.
                </div>}
        </div >
    );
};

export default Stack;