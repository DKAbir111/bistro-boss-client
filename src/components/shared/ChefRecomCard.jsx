import Swal from "sweetalert2"
import useAuth from "../../hooks/useAuth"
import { useLocation, useNavigate } from "react-router-dom"
import useAxiosSecure from "../../hooks/useAxiosSecure"
import { toast } from "react-toastify"
import useCart from "../../hooks/useCart"

export default function ChefRecomCard({ title, descrip, image, _id }) {
    const navigate = useNavigate()
    const user = useAuth()
    const [, fetch] = useCart()
    const axiosSecure = useAxiosSecure()
    // console.log(user?.email)
    const location = useLocation()
    const handleAddtoCart = (id) => {
        const newItem = {
            menuId: id,
            email: user?.email
        }
        // console.log(newItem)
        if (user && user?.email) {
            axiosSecure.post('/api/add-cart', newItem)
                .then(res => {
                    if (res.data.insertedId) {
                        fetch()  // refresh the cart after adding an item
                        toast.success('Item  successfully added to cart')
                    }

                })
                .catch(err => {
                    toast.error('Failed to add item to cart')
                    console.error(err)
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please log in to add the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#D99904",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: location.pathname })
                }
            });
        }
    }
    return (
        <div className="card bg-base-200 shadow-sm rounded-sm">
            <figure>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-64 object-cover"
                />
            </figure>
            <div className="card-body items-center space-y-4">
                <h2 className="card-title">{title}</h2>
                <p className="text-center">{descrip}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddtoCart(_id)} className="btn btn-outline border-[#BB8506] hover:text-[#BB8506] text-[#BB8506] px-9 border-0 border-b-4 uppercase bg-base-300">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
