import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../components/shared/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserCheck } from "react-icons/fa";
import Swal from "sweetalert2";


export default function AllUser() {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/user')
            return res.data
        }
    })


    const handleDelete = (id, name) => {
        Swal.fire({
            title: `Are you sure you want to delete ${name}`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/user/admin/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Delete!",
                                text: "User deleted successfully",
                                icon: "success"
                            });

                            refetch()
                        }
                    })
            }
        });
    }

    const handleAddAdmin = (id, role) => {

        Swal.fire({
            title: `Are you sure to make ${role ? "User" : "admin"}?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, make ${role ? "User" : "Admin"}!`
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/api/user/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount === 1) {
                            Swal.fire({
                                title: "Make Admin!",
                                text: "Successfully promoted to admin.",
                                icon: "success"
                            });

                            refetch()
                        }
                    })
            }
        });

    }
    return (
        <section className="bg-base-200 min-h-screen">
            <SectionTitle heading={'MANAGE ALL USERS'} subHeading={'How Many?'} />
            <div className="max-w-screen-lg bg-white p-10 mx-auto">
                <header className="font-cinzel flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">Total Users: {users.length} </h3>

                </header>

                {/* table */}

                <div className="overflow-x-auto mt-7 rounded-t-lg">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th>
                                </th>
                                <th className="uppercase">Name</th>
                                <th className="uppercase">Email</th>
                                <th className="uppercase">Role</th>
                                <th className="uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>{user.role === 'admin' ? <span onClick={() => handleAddAdmin(user._id, "user")} title="Make User" className="cursor-pointer">Admin</span> : <span className="btn text-xl text-white bg-[#D1A054]" onClick={() => handleAddAdmin(user._id)}><FaUserCheck /></span>}</td>
                                    <th>
                                        <button onClick={() => handleDelete(user._id, user.name)} className="btn btn-error  text-white bg-red-600 text-xl rounded-md"><RiDeleteBin6Line /> </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th>
                                </th>
                                <th className="uppercase">Name</th>
                                <th className="uppercase">Email</th>
                                <th className="uppercase">Role</th>
                                <th className="uppercase">Action</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    )
}
