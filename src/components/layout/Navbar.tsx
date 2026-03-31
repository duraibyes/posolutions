import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from "../../../public/images/poslogo.png";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-sm' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-4 xl:px-2">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-2">
                        <div className='w-40 flex items-center'>
                            <img src={Logo} alt="Pos Solutions" className='w-full' />
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white text-sm hover:text-teal-400 transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="w-full text-sm px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-teal-600 transition font-medium whitespace-nowrap">
                            Request Proposal
                        </button>

                        <button className="w-full text-sm px-4 py-2 bg-white text-teal-600 rounded-md hover:bg-teal-50 transition font-medium whitespace-nowrap">
                            Homeowner Login
                        </button>
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-md">
                    <div className="px-4 pt-2 pb-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-white hover:text-teal-400 transition-colors duration-200 py-2 text-sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="space-y-3 pt-4">
                            <button className="w-full text-sm px-6 py-3 border-2 border-white text-white rounded hover:bg-white hover:text-teal-600 transition-all duration-200 font-medium">
                                Request Proposal
                            </button>
                            <button className="w-full text-sm px-6 py-3 bg-white text-teal-600 rounded hover:bg-teal-50 transition-all duration-200 font-medium">
                                Homeowner Login
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
