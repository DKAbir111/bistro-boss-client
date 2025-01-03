import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";

export default function Main() {
    const location = useLocation()
    return (
        <div className="max-w-screen-2xl mx-auto">
            {location.pathname === '/login' || location.pathname === '/signup' || <NavBar />}
            <Outlet />
            {location.pathname === '/login' || location.pathname === '/signup' || <Footer />}

        </div>
    )
}
