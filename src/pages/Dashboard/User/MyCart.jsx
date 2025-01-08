import { RiDeleteBin6Line } from "react-icons/ri";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import SectionTitle from "../../../components/shared/SectionTitle";

export default function MyCart() {
    const [cart, refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    const subTotal = cart.reduce((total, sum) => total + sum.price, 0)
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#D1A054",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/cart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
                    .catch(err => toast.error(err.message))

            }
        });
    }
    console.log(cart)
    return (
        <section>
            <SectionTitle heading={'WANNA ADD MORE?'} subHeading={'My Cart'} />
            <div className="max-w-screen-lg bg-white p-10 mx-auto">
                <header className="font-cinzel flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">Total Orders: {cart.length} </h3>
                    <h3 className="text-2xl font-semibold"> Total Price: ${subTotal.toFixed(2)}</h3>
                    <button className="btn text-lg bg-[#D1A054] text-white">Pay</button>
                </header>

                {/* table */}

                <div className="overflow-x-auto mt-7 rounded-t-lg">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th>
                                </th>
                                <th className="uppercase">Item Image</th>
                                <th className="uppercase">Item name</th>
                                <th className="uppercase">Price</th>
                                <th className="uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item.cartId}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{item.category}</span>
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item.cartId)} className="btn btn-error  text-white bg-red-600 text-xl rounded-md"><RiDeleteBin6Line /> </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th>
                                </th>
                                <th className="uppercase">Item Image</th>
                                <th className="uppercase">Item name</th>
                                <th className="uppercase">Price</th>
                                <th className="uppercase">Action</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    )
}
