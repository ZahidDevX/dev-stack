import { FaStar } from "react-icons/fa6";

const TechCard = () => {
    return (
        <div className="p-5 space-y-4 border border-slate-100 rounded-2xl shadow-sm">
            <div className="flex justify-between items-start">
                <img src="https://icon.icepanel.io/Technology/svg/React.svg" alt="" className="w-10" />
                <span className="bg-blue-50 text-blue-400 font-semibold px-3 py-1 rounded-full  text-xs md:text-base">Popular</span>
            </div>
            <div className="space-y-2">
                <h3 className="text-dark font-bold text-xl">React</h3>
                <p className="text-justify">A declarative, component-based JavaScript library for building modern user interfaces.</p>
            </div>
            <div className="py-2 border-t border-slate-100 flex gap-3 justify-between items-center text-xs md:text-base">
                <span className="bg-slate-100 px-2 py-0.5 rounded text-dark">Frontend</span>
                <span className="px-2 py-0.5">Beginner-Friendly</span>
                <span className="text-dark flex items-center"><FaStar className="text-amber-400" /> 4.9</span>
            </div>
            <div>
                <button className="btn-primary w-full">Add To Stack</button>
            </div>
        </div>
    );
};

export default TechCard;