import DynamicTitle from "../../components/shared/DynamicTitle";
import bgImage from "../../assets/others/authentication.png";
import authImage from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
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

    // State to handle password visibility
    const [passwordVisible, setPasswordVisible] = useState(false);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

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
                reset();
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
            <div className="hero-content mt-20 text-center flex flex-col lg:flex-row md:max-w-screen-lg mx-auto border py-20 shadow-lg lg:gap-10 font-inter text-black">
                <div className="card-body w-full lg:w-1/2">
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

                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Password"
                                    className="input input-bordered w-full"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Minimum 6 characters.",
                                        },
                                        pattern: {
                                            value: /[A-Z]/,
                                            message: "At least one uppercase letter.",
                                        },
                                        validate: {
                                            hasNumber: (value) => /\d/.test(value) || "At least one number.",
                                            hasSpecialChar: (value) => /[$@$!%*?&]/.test(value) || "At least one special character.",
                                        },
                                    })}
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                >
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <p className="text-red-500 text-sm min-h-[20px]">
                                {errors.password?.message || ""}
                            </p>
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
