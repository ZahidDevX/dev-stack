export interface INavItem {
    url: string;
    label: string;
}

export interface INavGroup {
    title: string;
    items: INavItem[];
}