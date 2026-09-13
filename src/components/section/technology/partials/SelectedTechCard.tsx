import { FaXmark } from "react-icons/fa6";

const SelectedTechCard = () => {
    return (
        <div className="p-4 border border-slate-100 rounded-2xl flex gap-3 justify-between items-center">
            <div>
            <img src="https://icon.icepanel.io/Technology/svg/React.svg" alt="" className="w-8" />
            </div>
            <div className="flex-1">
                <h4 className="text-dark font-bold leading-2">React</h4>
                <span className="text-sm">Frontend</span>
            </div>
            <div>
                <FaXmark className="text-3xl"/>
            </div>
        </div>
    );
};

export default SelectedTechCard;