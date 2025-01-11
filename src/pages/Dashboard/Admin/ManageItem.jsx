import { FaRegEdit } from "react-icons/fa";
import SectionTitle from "../../../components/shared/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { RiDeleteBin6Line } from "react-icons/ri";



export default function ManageItem() {
    const [items] = useMenu()
    const handleAddAdmin = () => {

    }
    const handleDelete = () => {

    }
    return (
        <section className="bg-base-200 min-h-screen">
            <SectionTitle heading={'MANAGE ALL ITEMS'} subHeading={'Hurry Up!'} />
            <div className="max-w-screen-lg bg-white p-10 mx-auto">
                <header className="font-cinzel flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">Total Items: {items.length} </h3>

                    {/* Todo filter by category */}

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
                                <th className="uppercase">Update</th>
                                <th className="uppercase">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item, index) => <tr key={item.cartId}>
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
                                        <button onClick={() => handleDelete(item.cartId)} className="btn   text-white border-none hover:bg-[#c9a56b] bg-[#D0A054] text-xl rounded-md"><FaRegEdit /> </button>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(item.cartId)} className="btn btn-error border-none  text-white bg-red-600 text-xl rounded-md"><RiDeleteBin6Line /> </button>
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
                                <th className="uppercase">Update</th>
                                <th className="uppercase">Delete</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    )
}
