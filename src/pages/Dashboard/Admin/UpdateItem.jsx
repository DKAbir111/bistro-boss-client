import { ImSpoonKnife } from "react-icons/im";
import SectionTitle from "../../../components/shared/SectionTitle";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";


export default function UpdateItem() {
    const navigate = useNavigate()
    const item = useLoaderData()
    const {
        register,
        handleSubmit,
        // reset,
        // watch,
        formState: { errors },
    } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    // submit function
    const key = import.meta.env.VITE_IMAGE_UPLOAD_API_KEY
    const imageApi = `https://api.imgbb.com/1/upload?key=${key}`
    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(imageApi, imageFile, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });


        if (res.data.success) {
            const newItem = {
                ...data,
                image: res.data.data.display_url,
                price: parseFloat(data.price)
            }
            axiosSecure.patch(`/api/menu/${item._id}`, newItem)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            position: "top-end",
                            color: "#D1A054",
                            icon: "success",
                            title: "Item updated successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(-1)
                    }
                    else {
                        toast.error('Failed to update item')
                        console.log(res.data)
                    }

                })
        }
    }


    return (
        <section className="font-inter pb-10">
            <SectionTitle heading={'Update Item'} subHeading={'Updated Content'} />
            <div className="max-w-screen-lg  mx-auto bg-base-200">
                <form className="card-body md:grid grid-cols-2 gap-x-10" onSubmit={handleSubmit(onSubmit)}>
                    {/* name*/}
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input defaultValue={item.name} type="text" {...register("name", { required: true })} placeholder="Recipe name" className="input input-bordered" required />
                        {errors.name && <span className="text-sm text-red-500 mt-1">This field is required</span>}
                    </div>

                    {/* category */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>
                        <select defaultValue={item.category} className="select select-bordered" {...register("category", { required: true })}>
                            <option disabled value={'category'}>Category</option>
                            <option value={'pizza'}>Pizza</option>
                            <option value={'salad'}>Salad</option>
                            <option value={'soup'}>Soups</option>
                            <option value={'drinks'}>Drinks</option>
                            <option value={'dessert'}>Desserts</option>
                        </select>
                        {errors.category && <span className="text-sm text-red-500 mt-1">This field is required</span>}
                    </label>

                    {/* price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input defaultValue={item.price} type="text" {...register("price", { required: true })} placeholder="Price" className="input input-bordered" required />
                        {errors.price && <span className="text-sm text-red-500 mt-1">This field is required</span>}
                    </div>


                    {/* recipe details */}
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea
                            defaultValue={item.recipe}
                            {...register("recipe", { required: true })}
                            placeholder="Recipe Details"
                            className="textarea textarea-bordered columns-4"
                            rows="6"
                            required
                        ></textarea>
                        {errors.details && <span className="text-sm text-red-500 mt-1">This field is required</span>}
                    </div>

                    {/* image */}
                    <div className="form-control col-span-2 mt-4">
                        <input type="file" {...register("image", { required: true })} />
                        {errors.image && <span className="text-sm text-red-500 mt-1">This field is required</span>}
                    </div>

                    {/* submit button */}
                    <div className="mt-4">
                        <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white rounded-sm px-7">Update Item<ImSpoonKnife /> </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
