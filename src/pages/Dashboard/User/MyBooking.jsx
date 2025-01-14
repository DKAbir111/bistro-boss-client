import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/shared/SectionTitle";

export default function MyBooking() {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (user?.email) {
            axiosSecure(`/api/booking?email=${user?.email}`)
                .then(res => setBookings(res.data))
                .catch(err => console.error("Error fetching bookings:", err));
        }
    }, [axiosSecure, user?.email]);

    if (!user?.email) {
        return <p className="text-center text-gray-500">Please log in to view your bookings.</p>;
    }

    return (
        <section>
            <SectionTitle heading={"My Bookings"} subHeading={"Excellent Ambience"} />
            <div className="max-w-screen-lg bg-white p-10 mx-auto">
                <header className="font-cinzel flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">Total Bookings: {bookings.length}</h3>
                </header>

                {bookings.length === 0 ? (
                    <p className="text-center text-gray-500 mt-5">No bookings found.</p>
                ) : (
                    <div className="overflow-x-auto mt-7 rounded-t-lg">
                        <table className="table">
                            <thead className="bg-[#D1A054] text-white">
                                <tr>
                                    <th></th>
                                    <th className="uppercase">Email</th>
                                    <th className="uppercase">Phone</th>
                                    <th className="uppercase">Guest</th>
                                    <th className="uppercase">Time</th>
                                    <th className="uppercase">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking, index) => (
                                    <tr key={booking._id}>
                                        <th>{index + 1}</th>
                                        <td>{booking.email}</td>
                                        <td>{booking.phone}</td>
                                        <td>{booking.guest}</td>
                                        <td>{booking.time}</td>
                                        <td>{booking.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th className="uppercase">Email</th>
                                    <th className="uppercase">Phone</th>
                                    <th className="uppercase">Guest</th>
                                    <th className="uppercase">Time</th>
                                    <th className="uppercase">Date</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
}
