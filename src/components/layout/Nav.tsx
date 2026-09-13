import logo from "@assets/images/logo-text.png";
import { Container } from "@components/layout/Container";
import { FaBars } from "react-icons/fa";


const Nav = () => {
    return (
        <nav className="py-5 bg-white border-b border-slate-100 sticky top-0">
            <Container>
                {/* Desktop Navigation */}
                <div className="hidden lg:flex justify-between items-center">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <ul className="flex items-center gap-7 capitalize">
                            <li className="hover:text-accent cursor-pointer transition">Home</li>
                            <li className="hover:text-accent cursor-pointer transition">Technologies</li>
                            <li className="hover:text-accent cursor-pointer transition">Projects</li>
                            <li className="hover:text-accent cursor-pointer transition">About</li>
                            <li className="hover:text-accent cursor-pointer transition">Contact</li>
                        </ul>
                    </div>
                    <div className="flex items-center gap">
                        <button className="px-5 py-2.5 bg-white text-dark rounded-full cursor-pointer">Sign In</button>
                        <button className="px-5 py-2.5 bg-accent text-white rounded-full cursor-pointer">Sign Up</button>
                    </div>
                </div>

                {/* Mobile & Tab Navigation */}
                <div className="flex lg:hidden justify-between items-center">
                    <div>
                        <FaBars />
                    </div>
                    <div className="flex-1">
                        <img src={logo} alt="" className="max-w-25 block mx-auto" />
                    </div>
                    <div className="flex items-center gap">
                        <button className="text-sm font-bold px-3 py-1.5 bg-white text-dark rounded-full cursor-pointer">Sign In</button>
                        <button className="text-sm px-3 py-1.5 bg-accent text-white rounded-full cursor-pointer">Sign Up</button>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Nav;