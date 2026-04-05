import { Menu, XIcon } from "lucide-react";
import { useState } from "react";

const links = [
    {
        id: 1,
        text: "Home",
        link: "#home"
    },
    {
        id: 2,
        text: "Home",
        link: "#home"
    },
    {
        id: 3,
        text: "Home",
        link: "#home"
    },
    {
        id: 4,
        text: "Home",
        link: "#home"
    },
]


export default function Navbar() {

    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <nav className="shadow-2xl z-10 fixed px-4 sm:px-12 md:px-20 lg:px-32 w-full backdrop-blur-2xl bg-gray-900/20 border-b border-purple-300/20">
            <div className="flex justify-between items-center py-8">
                <div>
                    <span className="bg-linear-to-br from-purple-400 via-purple-600 to-purple-400 bg-clip-text text-transparent font-black">
                        FinanceApp
                    </span>
                </div>

                <div>
                    <div 
                        className="lg:hidden"
                        onClick={() => setIsMobileOpen(prev => !prev)}
                    >
                        {isMobileOpen
                            ? <XIcon />
                            : <Menu />
                        }
                    </div> 

                    <div className="hidden lg:block space-x-4">
                        {links.map(link => (
                            <a key={link.id} className="hover:text-gray-300 transition-all" href={link.link}>{link.text}</a>
                        ))}
                    </div>
                </div>
            </div>

            <div className={
                `flex flex-col pb-8  space-y-2 text-center lg:hidden animate-in slide-in-from-top duration-300 ${
                    isMobileOpen 
                    ? "block" 
                    : "hidden"
                }`}>
                {links.map((link, index) => (
                    <a 
                        key={link.id} 
                        className={`hover:text-gray-300 transition-all animate-in fade-in duration-300 delay-${index}00 font-bold`}
                        href={link.link}
                    >
                        {link.text}
                    </a>
                ))}
            </div>
        </nav>
    )
}
