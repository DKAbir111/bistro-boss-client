export default function NavBar() {

    const link = <>
        <li><a className="uppercase">Home</a></li>
        <li><a className="uppercase">Contact us</a></li>
        <li><a className="uppercase">Dashboard</a></li>
        <li><a className="uppercase">Our Menu</a></li>
        <li><a className="uppercase">Our shop</a></li>
        <li><a className="uppercase">Sign Out</a></li>

    </>
    return (
        <div className="navbar bg-slate-900 text-white bg-opacity-50 px-5 fixed z-10">
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
                <div className="font-cinzel">
                    <h3 className="text-xl font-bold">BISTRO BOSS</h3>
                    <p className="tracking-[.25rem]">Restaurant</p>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex-nowrap">
                    {link}
                </ul>
            </div>
        </div>
    )
}
