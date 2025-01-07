import { Link, NavLink } from "react-router-dom";
import { FaBook, FaHome, FaList, FaUsers } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
export default function SideBar() {
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-[#D1A054] text-base-content w-72  min-h-full  p-4 gap-3 font-cinzel">
                    <Link to={'/dashboard'} className="font-cinzel">
                        <h3 className="text-2xl font-bold">BISTRO BOSS</h3>
                        <p className="tracking-[.5rem] font-semibold">Restaurant</p>
                    </Link>
                    <li><NavLink to={'/dashboard'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaHome /> Admin Home</NavLink></li>

                    <li><NavLink to={'/dashboard/add-item'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><ImSpoonKnife /> Add Items</NavLink></li>

                    <li><NavLink to={'/dashboard/manage-item'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaList /> Manage Items</NavLink></li>

                    <li><NavLink to={'/dashboard/manage-bookings'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaBook /> Manage Bookings</NavLink></li>

                    <li><NavLink to={'/dashboard/users'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaUsers /> All Users</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
