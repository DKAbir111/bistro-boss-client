import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function DashBoard() {
    return (
        <main className="flex">
            <section className="h-screen" >
                <SideBar />
            </section>
            <section className=" flex-1 overflow-y-auto h-screen">
                <Outlet />
            </section>
        </main>
    )
}
