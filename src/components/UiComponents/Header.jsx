import Image from "next/image";
import Logo from '../../../public/images/logo.svg';
import { useState } from "react";
import Hamburger from '../../../public/images/icons/hamburger.svg';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <main className="fixed top-0 left-0 w-full z-50">
            <div className="absolute -z-10 inset-0 bg-transparent backdrop-blur-md "></div>
            {/* Main Header */}
            <div className="container py-[10px] flex items-center justify-between max-lg:p-4 max-sm:p-3">
                <Image src={Logo} alt={'Image'} className="w-auto max-md:h-10" />

                {/* Desktop Menu */}
                <ul className={`flex items-center gap-14 ${menuOpen ? 'block' : 'hidden'} md:flex lg:items-center`}>
                    <li><a className="text-[16px] font-semibold" href="#">Home</a></li>
                    <li><a className="text-[16px] font-semibold" href="#">Features</a></li>
                    <li><a className="text-[16px] font-semibold" href="#">Testimonials</a></li>
                    <li><a className="text-[16px] font-semibold" href="#">Download</a></li>
                </ul>

                {/* Hamburger Menu for mobile */}
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <Image src={Hamburger} alt="Hamburger Menu" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="lg:hidden bg-[#111230] w-full h-full z-50 fixed left-0 top-0 p-6">
                    {/* Close Button */}
                    <button onClick={toggleMenu} className="absolute text-white font-bold right-6 top-6 focus:outline-none">
                        X
                    </button>
                    <ul className='flex flex-col items-center gap-6 mt-12'>
                        <li><a className="text-[16px]" href="#">Home</a></li>
                        <li><a className="text-[16px]" href="#">Features</a></li>
                        <li><a className="text-[16px]" href="#">Testimonials</a></li>
                        <li><a className="text-[16px]" href="#">Download</a></li>
                    </ul>
                </div>
            )}
        </main>
    );
}
