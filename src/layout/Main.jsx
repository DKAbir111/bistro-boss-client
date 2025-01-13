import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";


export default function Main() {
    const location = useLocation();
    const hideNavAndFooter = location.pathname === '/login' || location.pathname === '/signup';

    return (
        <div className="max-w-screen-2xl mx-auto">
            {!hideNavAndFooter && <NavBar />}
            <Outlet />
            {!hideNavAndFooter && <Footer />}
        </div>
    );
}
