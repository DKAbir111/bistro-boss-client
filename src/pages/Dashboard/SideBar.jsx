import { Link, NavLink } from "react-router-dom";
import { FaBook, FaEnvelope, FaHome, FaList, FaOpencart, FaStar, FaUsers } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { FaShop } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";


export default function SideBar() {
    const [isAdmin] = useAdmin()
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center relative">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn bg-[#D1A054] rounded-sm drawer-button lg:hidden absolute top-3 left-2">
                    <FaBars />
                </label>
            </div>
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-[#D1A054] text-base-content w-72  min-h-full  p-4 gap-3 font-cinzel">


                    {
                        isAdmin ? <>
                            <Link to={'/dashboard/admin'} className="font-cinzel mb-10">
                                <h3 className="text-2xl font-bold">BISTRO BOSS</h3>
                                <p className="tracking-[.5rem] font-semibold">Restaurant</p>
                            </Link>
                            <li><NavLink to={'/dashboard/admin'} className={({ isActive }) =>
                                isActive ? "text-white" : "text-black"
                            }><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to={'/dashboard/add-item'} className={({ isActive }) =>
                                isActive ? "text-white" : "text-black"
                            }><ImSpoonKnife /> Add Items</NavLink></li>
                            <li><NavLink to={'/dashboard/manage-item'} className={({ isActive }) =>
                                isActive ? "text-white" : "text-black"
                            }><FaList />Manage Items</NavLink></li>
                            <li><NavLink to={'/dashboard/manage-booking'} className={({ isActive }) =>
                                isActive ? "text-white" : "text-black"
                            }><FaBook />Manage Bookings</NavLink></li>
                            <li><NavLink to={'/dashboard/all-user'} className={({ isActive }) =>
                                isActive ? "text-white" : "text-black"
                            }><FaUsers />All Users</NavLink></li>

                        </>
                            :
                            <>

                                {/* user routes */}
                                <Link to={'/dashboard/user'} className="font-cinzel mb-10">
                                    <h3 className="text-2xl font-bold">BISTRO BOSS</h3>
                                    <p className="tracking-[.5rem] font-semibold">Restaurant</p>
                                </Link>

                                <li><NavLink to={'/dashboard/user'} className={({ isActive }) =>
                                    isActive ? "text-white" : "text-black"
                                }><FaHome /> User Home</NavLink></li>

                                <li><NavLink to={'/dashboard/reservation'} className={({ isActive }) =>
                                    isActive ? "text-white" : "text-black"
                                }><ImSpoonKnife /> Reservation</NavLink></li>

                                <li><NavLink to={'/dashboard/history'} className={({ isActive }) =>
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

                            </>
                    }

                    <div className="divider"></div>

                    {/* Main UI */}
                    <li><NavLink to={'/'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaHome /> Home</NavLink></li>
                    <li><NavLink to={'/menu'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaList /> Menu</NavLink></li>
                    <li><NavLink to={'/shop/salad'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaShop />Shop</NavLink></li>

                    <li><NavLink to={'/contact-us'} className={({ isActive }) =>
                        isActive ? "text-white" : "text-black"
                    }><FaEnvelope /> Contact</NavLink></li>
                </ul>

            </div>
        </div>
    )
}
