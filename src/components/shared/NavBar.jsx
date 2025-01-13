import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import AuthContext from "../../Provider/AuthContext"
import { IoCartSharp } from "react-icons/io5";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
export default function NavBar() {
    const { user, logoutUser } = useContext(AuthContext)
    const [cart] = useCart()
    const [isAdmin] = useAdmin()
    const link = <>
        <li><NavLink to={'/'} className="uppercase" >Home</NavLink></li>
        {user?.email && <li><NavLink to={`${isAdmin ? '/dashboard/admin' : '/dashboard'}`} className="uppercase">Dashboard</NavLink></li>}
        <li><NavLink to={'/menu'} className="uppercase">Our Menu</NavLink></li>
        <li><NavLink to={'/contact-us'} className="uppercase">Contact us</NavLink></li>
        <li><NavLink to={'/shop/salad'} className="uppercase">Our shop</NavLink></li>
        {
            user?.email ? <>
                <li><span className=" btn btn-sm btn-circle mr-4 text-lg bg-green-700 border-none text-white hover:bg-green-700 relative"><IoCartSharp /> <span className="absolute bg-red-600 rounded-full text-sm h-5 w-5 -top-2 -right-2">{cart.length}</span> </span></li>
                <li> <button className="btn btn-sm uppercase" onClick={logoutUser}>Sign Out</button></li>
            </> :
                <>
                    <li><Link to={'/login'} className="uppercase">Login</Link></li>
                    <li><Link to={'/signup'} className="uppercase">Register</Link></li>
                </>
        }
    </>
    return (
        <div className="navbar bg-black text-white bg-opacity-50 px-5 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-slate-900 bg-opacity-50 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <Link to={`${isAdmin ? '/dashboard/admin' : '/dashboard'}`} className="font-cinzel">
                    <h3 className="text-xl font-bold">BISTRO BOSS</h3>
                    <p className="tracking-[.25rem]">Restaurant</p>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex-nowrap">
                    {link}
                </ul>
            </div>
        </div>
    )
}
