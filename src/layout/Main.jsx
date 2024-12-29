import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";

export default function Main() {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <NavBar />
            <Outlet />
        </div>
    )
}
