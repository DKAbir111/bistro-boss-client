import { Link, NavLink } from "react-router-dom";
import { FaBook, FaEnvelope, FaHome, FaList, FaOpencart, FaStar } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { FaShop } from "react-icons/fa6";
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
                    <Link to={'/dashboard'} className="font-cinzel mb-10">
                        <h3 className="text-2xl font-bold">BISTRO BOSS</h3>
                        <p className="tracking-[.5rem] font-semibold">Restaurant</p>
                    </Link>
                    <li><NavLink to={'/dashboard'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaHome /> User Home</NavLink></li>

                    <li><NavLink to={'/dashboard/reservation'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><ImSpoonKnife /> Reservation</NavLink></li>

                    <li><NavLink to={'/dashboard/payment'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaList /> Payment History</NavLink></li>

                    <li><NavLink to={'/dashboard/my-cart'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaOpencart /> My Cart</NavLink></li>

                    <li><NavLink to={'/dashboard/add-review'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaStar /> Add Review</NavLink></li>
                    <li><NavLink to={'/dashboard/booking'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaBook /> My Booking</NavLink></li>

                    <div className="divider"></div>

                    {/* Main UI */}
                    <li><NavLink to={'/'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaHome /> Home</NavLink></li>
                    <li><NavLink to={'/menu'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaList /> Menu</NavLink></li>
                    <li><NavLink to={'/shop'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaShop />Shop</NavLink></li>

                    <li><NavLink to={'/contact'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaEnvelope /> Contact</NavLink></li>
                </ul>

            </div>
        </div>
    )
}
