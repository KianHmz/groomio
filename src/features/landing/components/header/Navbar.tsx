import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import NavItems from './NavItems';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/50 backdrop-blur-md border-b border-slate-200/50">
            <div className="flex justify-around items-center mx-auto h-16 max-w-8xl px-4 sm:px-8 relative">
                {/* Logo */}
                <div className="flex items-center shrink-0">
                    <span className="font-extrabold text-3xl text-transparent bg-clip-text bg-linear-to-r from-dark-brown via-cream to-dark-brown bg-size-[200%_auto] transition-color duration-700 ease-in-out bg-position-[-20%_center] hover:bg-position-[100%_center] cursor-pointer">
                        <a href="">Groomio</a>
                    </span>
                </div>

                {/* Menu Button (Mobile) */}
                <button
                    className="md:hidden p-2 rounded-lg transition-all shrink-0 relative w-9 h-9 flex items-center justify-center"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <Menu
                        size={24}
                        className={`absolute transition-all duration-300 ease-in-out ${isMenuOpen
                                ? 'opacity-0 rotate-90 scale-75'
                                : 'opacity-100 rotate-0 scale-100'
                            }`}
                    />
                    <X
                        size={24}
                        className={`absolute transition-all duration-300 ease-in-out ${isMenuOpen
                                ? 'opacity-100 rotate-0 scale-100'
                                : 'opacity-0 -rotate-90 scale-75'
                            }`}
                    />
                </button>

                {/* Nav Links (Desktop) */}
                <div className="hidden md:flex gap-8 items-center">
                    <NavItems />
                </div>

                {/* Nav Links (Mobile) */}
                <div
                    className={`grid md:hidden absolute top-full left-0 right-0 bg-cream/95 backdrop-blur-md border-b border-slate-200/50 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }`}
                >
                    <div className="min-h-0">
                        <div className="flex flex-col gap-2 items-center py-4">
                            <NavItems />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;