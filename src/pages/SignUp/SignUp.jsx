import DynamicTitle from "../../components/shared/DynamicTitle";
import bgImage from "../../assets/others/authentication.png";
import authImage from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import AuthContext from "../../Provider/AuthContext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useForm } from "react-hook-form";

export default function SignUp() {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    // React Hook Form setup
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        const { name, email, photo, password } = data;
        try {
            const res = await createUser(email, password);
            if (res?.user?.email) {
                await updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo,
                });
                toast.success("User created successfully");
                reset(); // Reset form after successful submission
                navigate("/");
            }
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <DynamicTitle title={"BistroBoss | Sign Up"} />
            <div className="hero-content mt-20 text-center flex flex-col lg:flex-row max-w-screen-lg mx-auto border py-20 shadow-lg lg:gap-10 font-inter text-black">
                <div className="card-body w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-2xl font-bold">Sign Up</h2>

                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        {/* Photo */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="url"
                                placeholder="Photo URL"
                                className="input input-bordered"
                                {...register("photo", {
                                    required: "Photo URL is required",
                                    pattern: {
                                        value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/,
                                        message: "Enter a valid image URL",
                                    },
                                })}
                            />
                            {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}
                        </div>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered"
                                {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                        message: "Password must be at least 6 characters and include uppercase, lowercase, a number, and a special character.",
                                    },
                                })}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button className="btn bg-[#D1A054B3] hover:bg-[#D1A054] text-white">
                                Sign Up
                            </button>
                        </div>
                        <label className="flex justify-center mt-3">
                            <span className="text-[#D1A054] text-sm">
                                Already registered?{" "}
                                <Link to={"/login"} className="font-bold hover:underline">
                                    Go to log in
                                </Link>
                            </span>
                        </label>
                    </form>
                    <div>
                        <label className="label flex justify-center flex-col items-center">
                            <span className="label-text text-[#444444] font-semibold">Or sign up with</span>
                            <div className="flex gap-5 mt-2">
                                <span className="btn btn-circle text-lg btn-outline border-[#444444] hover:bg-[#444444]">
                                    <FaGoogle />
                                </span>
                                <span className="btn btn-circle text-lg btn-outline border-[#444444] hover:bg-[#444444]">
                                    <FaGithub />
                                </span>
                                <span className="btn btn-circle text-lg btn-outline border-[#444444] hover:bg-[#444444]">
                                    <FaFacebook />
                                </span>
                            </div>
                        </label>
                    </div>
                </div>

                <img src={authImage} alt="Sign Up Illustration" className="md:w-1/2 order-first lg:order-last" />
            </div>
        </div>
    );
}
