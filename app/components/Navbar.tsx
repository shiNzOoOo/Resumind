import {Link} from "react-router";
import {usePuterStore} from "~/lib/puter";

const Navbar = () => {
    const { auth } = usePuterStore();

    const handleLogout = async () => {
        await auth.signOut();
    };

    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            <div className="flex gap-4">
                <Link to="/upload" className="primary-button w-fit">
                    Upload Resume
                </Link>
                <button onClick={handleLogout} className="primary-button w-fit">
                    Logout
                </button>
            </div>
        </nav>
    )
}
export default Navbar
