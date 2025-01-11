import { ImSpoonKnife } from "react-icons/im";
import SectionTitle from "../../../components/shared/SectionTitle";


export default function AddItem() {
    return (
        <section className="font-inter pb-10">
            <SectionTitle heading={'CONTACT FORM'} subHeading={'Send Us a Message'} />
            <div className="max-w-screen-lg  mx-auto bg-base-200">
                <form className="card-body md:grid grid-cols-2 gap-x-10">
                    {/* price */}
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input type="text" placeholder="Recipe name" className="input input-bordered" required />
                    </div>

                    {/* category */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>
                        <select className="select select-bordered">
                            <option disabled selected>Category</option>
                            <option value={'pizza'}>Pizza</option>
                            <option value={'salad'}>Salad</option>
                            <option value={'soup'}>Soups</option>
                            <option value={'drinks'}>Drinks</option>
                            <option value={'dessert'}>Desserts</option>
                        </select>
                    </label>

                    {/* price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" placeholder="Price" className="input input-bordered" required />
                    </div>


                    {/* recipe details */}
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea
                            placeholder="Recipe Details"
                            className="textarea textarea-bordered columns-4"
                            rows="6"
                            required
                        ></textarea>
                    </div>

                    {/* image */}
                    <div className="form-control col-span-2 mt-4">
                        <input type="file" />
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
