import {Link} from "react-router";
import {usePuterStore} from "~/lib/puter";
import { useState } from "react";

const Navbar = () => {
    const { auth } = usePuterStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = async () => {
        await auth.signOut();
    };

    return (
        <nav className="navbar relative">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    className="w-6 h-6"
                >
                    {isMenuOpen ? (
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-4">
                <Link to="/upload" className="primary-button w-fit">
                    Upload Resume
                </Link>
                <button onClick={handleLogout} className="primary-button w-fit">
                    Logout
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48 md:hidden">
                    <Link 
                        to="/upload" 
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Upload Resume
                    </Link>
                    <button 
                        onClick={() => {
                            handleLogout();
                            setIsMenuOpen(false);
                        }} 
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                        Logout
                    </button>
                </div>
            )}
        </nav>
    )
}

export default Navbar
