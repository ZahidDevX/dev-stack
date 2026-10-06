import logo from "@assets/images/logo-text.png";
import { Container } from "@components/layout/Container";
import FooterNavGroup from "@components/layout/footer/partials/FooterNavGroup";
import type { INavGroup } from "@/types/footer";

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const navGroups = [
        {
            title: "Product",
            items: [
                { url: "#", label: "Home" },
                { url: "#", label: "Technologies" },
                { url: "#", label: "Project" },
            ]
        },
        {
            title: "Company",
            items: [
                { url: "#", label: "About" },
                { url: "#", label: "Contact" },
                { url: "#", label: "Careers" },
            ]
        },
        {
            title: "Legal",
            items: [
                { url: "#", label: "Privacy Policy" },
                { url: "#", label: "Terms Of Service" },
            ]
        },
    ];
    return (
        <footer className="bg-white text-center lg:text-left">
            <Container>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div className="md:col-span-3 lg:col-span-2 md:mb-4">
                        <img src={ logo } alt="" className="block mx-auto lg:mx-0"/>
                        <p className="text-muted text-sm mt-3 mb-6">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>
                        <ul className="flex items-center justify-center lg:justify-start gap-4">
                            <li>
                                <a href="#" className="font-semibold block">GitHub</a>
                            </li>
                            <li>
                                <a href="#" className="font-semibold block">Twitter</a>
                            </li>
                            <li>
                                <a href="#" className="font-semibold block">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    { navGroups.map((navGroup: INavGroup) => <FooterNavGroup navGroup={ navGroup } key={ navGroup.title } />) }
                </div>
                <div className="flex justify-between items-center py-12 border-t-2 border-slate-100 mt-14 text-xs md:text-base">
                    <p className="text-muted">&copy; { currentYear } Dev Stack. All rights reserved.</p>
                    <ul className="flex items-center gap-2 md:gap-4">
                        <li><a href="#" className="text-muted">Privacy</a></li>
                        <li><a href="#" className="text-muted">Terms</a></li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;