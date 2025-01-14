import { useEffect, useState } from "react"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import useAuth from "../../../hooks/useAuth"
import SectionTitle from "../../../components/shared/SectionTitle"

export default function MyBooking() {
    const [bookings, setBookings] = useState([])
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure(`/api/booking?email=${user?.email}`)
            .then(res => setBookings(res.data))
    }, [])
    console.log(bookings)
    return (
        <section>
            <SectionTitle heading={'My Bookings'} subHeading={'Excellent Ambience'} />
            <div className="max-w-screen-lg bg-white p-10 mx-auto">
                <header className="font-cinzel flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">Total Bookings: {bookings.length} </h3>
                </header>

                {/* table */}

                <div className="overflow-x-auto mt-7 rounded-t-lg">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th>
                                </th>
                                <th className="uppercase">Email</th>
                                <th className="uppercase">Phone</th>
                                <th className="uppercase">Guest</th>
                                <th className="uppercase">Time</th>
                                <th className="uppercase">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((booking, index) => <tr key={booking._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        {booking.email}
                                    </td>
                                    <td>
                                        {booking.phone}
                                    </td>
                                    <td>

                                        {booking.guest}
                                    </td>
                                    <th>
                                        {booking.time}
                                    </th>
                                    <td>

                                        {booking.date}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th>
                                </th>
                                <th className="uppercase">Email</th>
                                <th className="uppercase">Phone</th>
                                <th className="uppercase">Guest</th>
                                <th className="uppercase">Time</th>
                                <th className="uppercase">Date</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    )
}
