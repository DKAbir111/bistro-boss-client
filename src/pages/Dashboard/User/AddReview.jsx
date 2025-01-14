import { FaStar } from "react-icons/fa";
import { useState } from "react";
import SectionTitle from "../../../components/shared/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AddReview = () => {
    const [rating, setRating] = useState(5);
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            rating,
            recipe: e.target.recipe.value,
            suggestion: e.target.suggestion.value,
            details: e.target.review.value,
            email: user?.email,
            name: user?.displayName
        };

        axiosSecure.post('/api/add-review', formData)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Review added successfully')
                    e.target.reset()
                }
            })


    };

    return (
        <section>
            <SectionTitle heading={'Give a Review'} subHeading={'Sharing is Caring'} />
            <div className="max-w-screen-lg mx-auto p-6  rounded-lg  font-lato bg-base-200 mb-10">
                <h2 className="text-center text-3xl font-semibold mb-6 font-cinzel">Rate Us!</h2>

                {/* Star Rating */}
                <div className="flex justify-center space-x-2 pb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                        >
                            <FaStar
                                className={`text-4xl cursor-pointer ${rating >= star ? "text-yellow-500" : "text-gray-400"
                                    }`}
                            />
                        </button>
                    ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Recipe Input */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Which recipe you liked most?
                        </label>
                        <input
                            type="text"
                            name="recipe"
                            placeholder="Recipe you liked most"
                            className="w-full input input-bordered rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    {/* Suggestion Input */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Do you have any suggestion for us?
                        </label>
                        <input
                            type="text"
                            name="suggestion"
                            placeholder="Suggestion"
                            className="w-full input input-bordered rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    {/* Review Input */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Kindly express your care in a short way.
                        </label>
                        <textarea
                            name="review"
                            placeholder="Review in detail"
                            rows="4"
                            className="w-full textarea textarea-bordered rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn rounded-sm bg-gradient-to-r from-[#835D23] to-[#B58130] text-white px-6 py-2 hover:shadow-md flex items-center justify-center space-x-2"
                        >
                            <span>Send Review</span>
                            <span className="text-lg">🚀</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>

    );
};

export default AddReview;
