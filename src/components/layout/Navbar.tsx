import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

import Logo from "../../../public/images/logo_nav_1.png";
const servicePages = [
    { name: "Services", href: "/services" },
    { name: "Residential Services", href: "/residential-services" },
    { name: "Commercial Services", href: "/commercial-services" },
    { name: "Association Management", href: "/association-management" },
    { name: "Financial Recovery", href: "/financial-recovery-services" },
    { name: "Real Estate Brokerage", href: "/real-estate-brokerage" },
    { name: "Asset Management", href: "/asset-management" },
];
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const currentService = servicePages.find((item) => item.href === location.pathname);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const currentPage = currentService?.name || navLinks.find(page => page.href === location.pathname)?.name || "Request Proposal";

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
                        {navLinks.map((link) => {
                            // SERVICES DROPDOWN
                            if (link.name === "Services") {
                                return (
                                    <div
                                        key={link.name}
                                        className="relative"
                                        onMouseEnter={() => setOpen(true)}
                                        onMouseLeave={() => setOpen(false)}
                                    >
                                        {/* Main Nav */}
                                        <Link
                                            to="/services"
                                            className={`flex items-center gap-1 text-sm transition-colors duration-200 ${currentService
                                                ? "text-teal-400 font-semibold"
                                                : "hover:text-teal-400 text-[#ffffffba]"
                                                }`}
                                        >
                                            {currentService?.name || "Services"}

                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform duration-200 ${open ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </Link>

                                        {/* Dropdown */}
                                        {open && (
                                            <div className="absolute top-full left-0  w-72 rounded-2xl bg-white shadow-2xl border border-gray-100 py-2 z-50">
                                                {servicePages.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        to={item.href}
                                                        className={`block px-5 py-3 text-sm transition-colors ${location.pathname === item.href
                                                            ? "bg-teal-50 text-teal-600 font-semibold"
                                                            : "text-gray-700 hover:bg-gray-50"
                                                            }`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            // NORMAL MENUS
                            return (
                                <NavLink
                                    key={link.name}
                                    to={link.href}
                                    className={({ isActive }) =>
                                        `text-sm transition-colors duration-200 ${isActive
                                            ? "text-teal-400 font-semibold"
                                            : "hover:text-teal-400 text-[#ffffffba]"
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            );
                        })}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => navigate('request-proposal')}
                            className="w-full text-sm px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-teal-600 transition font-medium whitespace-nowrap">
                            Request Proposal
                        </button>

                        <button className="w-full text-sm px-4 py-2 bg-white text-teal-600 rounded-md hover:bg-teal-50 transition font-medium whitespace-nowrap"
                            onClick={() => window.open("https://prosol.cincwebaxis.com/", "_blank")}
                        >
                            Homeowner Login
                        </button>
                    </div>
                    <div className='flex md:hidden flex-row items-center justify-end gap-2'>
                        <div
                            className=" 
                                            flex items-center gap-2
                                            px-2.5 py-1.5
                                            rounded-full
                                            border border-teal-400/40
                                            bg-white/5
                                            backdrop-blur-md
                                            shadow-[0_0_20px_rgba(45,212,191,0.08)]
                                            transition-all duration-300
                                            max-w-[120px] sm:max-w-[150px] shrink
                                        "
                        >
                            {/* Active Dot */}
                            <span className="relative flex h-2 w-2 shrink-0">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75 animate-ping"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-300"></span>
                            </span>

                            {/* Page Name */}
                            <span
                                className="
                text-white text-xs font-medium
                truncate whitespace-nowrap
            "
                            >
                                {currentPage}
                            </span>
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-white p-2 "
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-md">
                    <div className="px-4 pt-2 pb-6 space-y-2">

                        {/* HOME */}
                        <Link
                            to="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-3 text-sm transition-colors ${location.pathname === "/"
                                ? "text-teal-400 font-semibold"
                                : "text-white hover:text-teal-400"
                                }`}
                        >
                            Home
                        </Link>

                        {/* SERVICES */}
                        <div>
                            <button
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                className={`w-full flex items-center justify-between py-3 text-sm transition-colors ${currentService
                                    ? "text-teal-400 font-semibold"
                                    : "text-white hover:text-teal-400"
                                    }`}
                            >
                                <span>
                                    {isServicesOpen ? "Services" : currentService?.name || "Services"}
                                </span>

                                {isServicesOpen ? (
                                    <ChevronUp size={18} />
                                ) : (
                                    <ChevronDown size={18} />
                                )}
                            </button>

                            {/* SUB MENU */}
                            {isServicesOpen && (
                                <div className="ml-4 mt-2 space-y-1 border-l border-white/10 pl-4">
                                    {servicePages.map((service) => (
                                        <Link
                                            key={service.href}
                                            to={service.href}
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsServicesOpen(true);
                                            }}
                                            className={`block py-2 text-sm transition-colors ${location.pathname === service.href
                                                ? "text-teal-400 font-semibold"
                                                : "text-[#ffffffba] hover:text-teal-400"
                                                }`}
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* ABOUT */}
                        <Link
                            to="/about"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-3 text-sm transition-colors ${location.pathname === "/about"
                                ? "text-teal-400 font-semibold"
                                : "text-white hover:text-teal-400"
                                }`}
                        >
                            About
                        </Link>

                        {/* CONTACT */}
                        <Link
                            to="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-3 text-sm transition-colors ${location.pathname === "/contact"
                                ? "text-teal-400 font-semibold"
                                : "text-white hover:text-teal-400"
                                }`}
                        >
                            Contact
                        </Link>

                        {/* BUTTONS */}
                        <div className="space-y-3 pt-4">
                            <button
                                onClick={() => {
                                    navigate("request-proposal");
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full text-sm px-6 py-3 border-2 border-white text-white rounded hover:bg-white hover:text-teal-600 transition-all duration-200 font-medium"
                            >
                                Request Proposal
                            </button>

                            <button
                                onClick={() =>
                                    window.open(
                                        "https://prosol.cincwebaxis.com/",
                                        "_blank"
                                    )
                                }
                                className="w-full text-sm px-6 py-3 bg-white text-teal-600 rounded hover:bg-teal-50 transition-all duration-200 font-medium"
                            >
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
