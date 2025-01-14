import { useEffect, useState } from "react";
import SectionTitle from "../../../components/shared/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


export default function PaymentHistory() {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [paymentHistory, setPaymentHistory] = useState([])

    useEffect(() => {
        axiosSecure(`/api/payment/${user?.email}`)
            .then(res => setPaymentHistory(res.data))
    }, [])
    console.log(paymentHistory)
    return (
        <section className="bg-base-200 min-h-screen">
            <SectionTitle heading={'PAYMENT HISTORY'} subHeading={'At a Glance!'} />
            <div className="max-w-screen-lg bg-white p-10 mx-auto">
                <header className="font-cinzel flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">Total Payments: {paymentHistory.length} </h3>
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
                                <th className="uppercase">Transaction ID</th>
                                <th className="uppercase">Total Price</th>
                                <th className="uppercase">Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentHistory.map((payment, index) => <tr key={payment._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        {payment.email}
                                    </td>
                                    <td>
                                        {payment.transactionId}
                                    </td>
                                    <td>

                                        {payment.total}
                                    </td>
                                    <th>
                                        {payment.time.split('T')[0]}
                                    </th>
                                </tr>)
                            }
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th>
                                </th>
                                <th className="uppercase">Email</th>
                                <th className="uppercase">Transaction ID</th>
                                <th className="uppercase">Total Price</th>
                                <th className="uppercase">Payment Date</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    )
}
