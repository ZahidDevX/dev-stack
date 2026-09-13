import SelectedTechCard from "./SelectedTechCard";

const SelectedTech = () => {
    return (
        <div className="p-5 rounded-2xl border border-slate-100 shadow-sm space-y-8">
            <div>
                <h3 className="text-dark font-bold text-xl">Your Stack</h3>
                <p>2 Technology Selected</p>
            </div>
            <div className="space-y-4">
                <SelectedTechCard/>
                <SelectedTechCard/>
                <SelectedTechCard/>
            </div>
            <div>
                <button className="w-full px-5 py-3 border border-red-800 text-red-700 rounded-xl font-bold cursor-pointer">Remove All</button>
            </div>
        </div>
    );
};

export default SelectedTech;