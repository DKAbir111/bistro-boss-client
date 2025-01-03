import DynamicTitle from "../../components/shared/DynamicTitle";
import bgImage from "../../assets/others/authentication.png"
import authImage from "../../assets/others/authentication2.png"
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import AuthContext from "../../Provider/AuthContext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.init";

export default function SignUp() {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // const newUser = { name, email, photo, password }
        createUser(email, password)
            .then(res => {
                if (res?.user?.email) {
                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: photo
                    })
                    toast.success("User created successfully")
                    navigate('/')
                    form.reset()
                }

            })
            .catch(err => toast.error(err.message))
    }
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}>
            <DynamicTitle title={'BistroBoss | Login'} />
            <div className="hero-content mt-20 text-center flex flex-col lg:flex-row max-w-screen-xl mx-auto border py-20 shadow-lg lg:gap-10 font-inter text-black">
                <div className="card-body w-full">
                    <form onSubmit={handleSubmit}>
                        <h2 className='text-2xl font-bold'>Sign Up</h2>
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>

                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        {/* photo */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
                        </div>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        {/* submit button */}
                        <div className="form-control mt-6">
                            <button className={`btn bg-[#D1A054B3] hover:bg-[#D1A054] text-white`}>Sign Up</button>
                        </div>
                        <label className="flex justify-center mt-3">
                            <span className="text-[#D1A054] text-sm ">Already registered? <Link to={'/login'} className='font-bold hover:underline'>Go to log in</Link></span>
                        </label>
                    </form>
                    <div>
                        <label className="label flex justify-center flex-col items-center">
                            <span className="label-text text-[#444444] font-semibold">Or sign up with</span>
                            <div className='flex gap-5 mt-2'>
                                <span className='btn btn-circle text-lg  btn-outline border-[#444444] hover:bg-[#444444]'> <FaGoogle /> </span>
                                <span className='btn btn-circle text-lg btn-outline border-[#444444] hover:bg-[#444444]'> <FaGithub /></span>
                                <span className='btn btn-circle text-lg btn-outline border-[#444444] hover:bg-[#444444]'> <FaFacebook /></span>
                            </div>
                        </label>
                    </div>
                </div>

                <img src={authImage} alt="" className='md:w-1/2 order-first lg:order-last' />
            </div>
        </div>
    )
}
