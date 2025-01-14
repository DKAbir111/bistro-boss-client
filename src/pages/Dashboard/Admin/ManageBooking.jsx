import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/shared/SectionTitle";
import { GiCheckMark } from "react-icons/gi";
import Swal from "sweetalert2";

export default function ManageBooking() {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // Fetch bookings using useQuery
    const { data: bookings = [], refetch, isLoading } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/api/bookings`);
            return res.data;
        },
        enabled: !!user?.email // Ensure query runs only when email exists
    });

    const handleUpdate = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make it Done!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .patch(`/api/booking/${id}`)
                    .then((res) => {
                        if (res.data.modifiedCount === 1) {
                            Swal.fire({
                                title: "Done!",
                                text: "This booking is Closed.",
                                icon: "success"
                            });
                            refetch(); // Refetch bookings after update
                        }
                    })
                    .catch((err) => {
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to update booking.",
                            icon: "error"
                        });
                        console.error("Error updating booking:", err);
                    });
            }
        });
    };

    if (!user?.email) {
        return <p className="text-center text-gray-500">Please log in to view your bookings.</p>;
    }

    if (isLoading) {
        return <p className="text-center text-gray-500">Loading bookings...</p>;
    }

    return (
        <section>
            <SectionTitle heading={"Manage Al Bookings"} subHeading={"Excellent Ambience"} />
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
                                    <th className="uppercase">Status</th>
                                    <th className="uppercase">Action</th>
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
                                        <td
                                            className={`font-bold ${booking.status === "Done"
                                                ? "text-green-500"
                                                : "text-yellow-600"
                                                }`}
                                        >
                                            {booking.status ? booking.status : "Pending"}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleUpdate(booking._id)}
                                                className={`btn btn-circle text-xl text-white ${booking.status === "Done"
                                                    ? "btn-success"
                                                    : "bg-green-300 hover:bg-green-200 border-none"
                                                    }`}
                                            >
                                                <GiCheckMark />
                                            </button>
                                        </td>
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
                                    <th className="uppercase">Status</th>
                                    <th className="uppercase">Action</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
}
