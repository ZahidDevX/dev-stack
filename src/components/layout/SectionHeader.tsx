import type { ISectionHeader } from "@/types/sectionHeader";

const SectionHeader = ({ title, titleHeighlight, description }: ISectionHeader) => {
    return (
        <div className="space-y-2 mb-10 text-center md:text-left">
            <h2 className="font-secondary font-bold text-2xl md:text-4xl flex justify-center md:justify-start gap-1">
                <span className="text-dark">{title}</span>
                <span className="text-gradient-secondary">{titleHeighlight}</span>
            </h2>
            {description && <p>{description}</p>}
        </div>
    );
};

export default SectionHeader;