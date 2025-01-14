
import { FaWallet, FaStore, FaPhone, FaShoppingCart, FaStar, FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const Home = () => {
    const { user } = useAuth()
    console.log(user)
    return (
        <div className="p-6 bg-gray-50 min-h-screen flex flex-col  justify-center">
            <h2 className="text-4xl font-bold mb-8 font-cinzel">Hi, Welcome Back!</h2>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-lg p-4 flex flex-col items-center shadow-md">
                    <FaWallet className="text-3xl mb-2" />
                    <p className="text-2xl font-bold">205</p>
                    <p className="text-sm">Menu</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg p-4 flex flex-col items-center shadow-md">
                    <FaStore className="text-3xl mb-2" />
                    <p className="text-2xl font-bold">103</p>
                    <p className="text-sm">Shop</p>
                </div>
                <div className="bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-lg p-4 flex flex-col items-center shadow-md">
                    <FaPhone className="text-3xl mb-2" />
                    <p className="text-2xl font-bold">03</p>
                    <p className="text-sm">Contact</p>
                </div>
            </div>

            {/* Profile and Activities */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Profile Section */}
                <div className="bg-yellow-100 rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full border-2 border-yellow-500 mb-4 overflow-hidden">
                        <img src={user.photoURL} alt="" className="object-cover" />
                    </div>
                    <p className="text-2xl font-cinzel font-semibold">{user.displayName}</p>
                </div>

                {/* Activities Section */}
                <div className="bg-yellow-50 rounded-lg px-10 py-20 font-cinzel">
                    <h3 className="text-2xl font-cinzel font-bold mb-4">Your Activities</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center text-blue-600 text-xl">
                            <FaShoppingCart className="mr-2" /> Orders: <span className="ml-1 text-black">6</span>
                        </li>
                        <li className="flex items-center text-teal-500 text-xl">
                            <FaStar className="mr-2" /> Reviews: <span className="ml-1 text-black">2</span>
                        </li>
                        <li className="flex items-center text-orange-600 text-xl">
                            <FaCalendarAlt className="mr-2" /> Bookings: <span className="ml-1 text-black">1</span>
                        </li>
                        <li className="flex items-center text-red-600 text-xl">
                            <FaCreditCard className="mr-2" /> Payment: <span className="ml-1 text-black">3</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Home;
