import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function DashBoard() {
    return (
        <main className="flex">
            <section className="h-screen" >
                <SideBar />
            </section>
            <section className="bg-base-200 flex-1">
                <Outlet />
            </section>
        </main>
    )
}
