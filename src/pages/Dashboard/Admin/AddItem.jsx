import { ImSpoonKnife } from "react-icons/im";
import SectionTitle from "../../../components/shared/SectionTitle";
import { useForm } from "react-hook-form"

export default function AddItem() {
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm()

    // submit function

    const onSubmit = (data) => console.log(data)
    // console.log(watch("name"))

    return (
        <section className="font-inter pb-10">
            <SectionTitle heading={'CONTACT FORM'} subHeading={'Send Us a Message'} />
            <div className="max-w-screen-lg  mx-auto bg-base-200">
                <form className="card-body md:grid grid-cols-2 gap-x-10" onSubmit={handleSubmit(onSubmit)}>
                    {/* price */}
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Recipe name" className="input input-bordered" required />
                        {errors.name && <span className="text-sm text-red-500 mt-1">This field is required</span>}
                    </div>

                    {/* category */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>
                        <select className="select select-bordered" {...register("category", { required: true })}>
                            <option disabled selected>Category</option>
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
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered" required />
                        {errors.price && <span className="text-sm text-red-500 mt-1">This field is required</span>}
                    </div>


                    {/* recipe details */}
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea
                            {...register("details", { required: true })}
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
                        <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white rounded-sm px-7">Add Item<ImSpoonKnife /> </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
