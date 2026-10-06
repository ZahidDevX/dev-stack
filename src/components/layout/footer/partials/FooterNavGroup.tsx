import type { INavGroup, INavItem } from "@/types/footer";

interface FooterNavGroupProps {
    navGroup: INavGroup;
  }

const FooterNavGroup = ({ navGroup }: FooterNavGroupProps) => {
    return (
        <div className="hidden md:block">
            <h2 className="text-dark font-semibold mb-3">{navGroup.title}</h2>
            <ul className="flex flex-col gap-2">
                {navGroup.items.map((navItem: INavItem) => <li key={navItem.label}><a href={navItem.url} className="text-muted">{navItem.label}</a></li>)}
            </ul>
        </div>
    );
};

export default FooterNavGroup;