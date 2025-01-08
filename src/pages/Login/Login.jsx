import { useContext, useEffect, useState } from 'react';
import bgImage from '../../assets/others/authentication.png';
import authImage from '../../assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import DynamicTitle from '../../components/shared/DynamicTitle';
import { FaFacebook, FaGithub, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../Provider/AuthContext';
import { toast } from 'react-toastify';
import useAxiosPublic from '../../hooks/useAxiosPublic';

export default function Login() {
    const axiosPublic = useAxiosPublic()
    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    const [relode, setRelode] = useState(true);
    const [valid, setValid] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    //redirect to desired location
    const location = useLocation()
    // console.log(location)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [relode]);

    const vadidateCaptcha = (e) => {
        e.preventDefault();
        const givenInput = e.target.value;
        if (givenInput.length === 6 && validateCaptcha(givenInput)) {
            setValid(true);
        } else {
            setValid(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(res => {
                if (res?.user?.email) {
                    navigate(location.state ? location.state : '/');
                    toast.success("Logged in successfully");
                    form.reset();
                }
            }).catch(err => toast.error(err.message));
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(res => {
                if (res?.user?.email) {
                    const newUser = { email: res.user?.email, name: res.user?.displayName }
                    axiosPublic.post('/api/user', newUser)
                    navigate(location.state ? location.state : '/');
                    toast.success("Logged in successfully");
                }
            }).catch(err => toast.error(err.message));
    }
    return (
        <div
            className="hero min-h-screen py-20"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}>
            <DynamicTitle title={'BistroBoss | Login'} />
            <div className="hero-content text-center flex flex-col lg:flex-row w-screen-xl mx-auto border shadow-lg lg:gap-10 font-inter text-black">
                <img src={authImage} alt="" className='md:w-1/2' />
                <div className="card-body w-full lg:w-1/2">
                    <form onSubmit={handleSubmit} className='w-full'>
                        <h2 className='text-2xl font-bold'>Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    name='password'
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required
                                />
                                <span
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                >
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        {/* captcha */}
                        <div className='mt-6 input input-bordered flex items-center'>
                            <LoadCanvasTemplateNoReload />
                        </div>
                        <div className='my-2'>
                            <span onClick={() => setRelode(!relode)} className='text-blue-600 text-sm cursor-pointer'>Reload Captcha</span>
                        </div>
                        <div className="form-control">
                            <input type="text" onChange={vadidateCaptcha} placeholder="Type here" className="input input-bordered" required />
                        </div>

                        {/* submit button */}
                        <div className="form-control mt-6">
                            <button className={`btn bg-[#D1A054B3] hover:bg-[#D1A054] text-white ${valid ? '' : 'btn-disabled'}`}>Sign in</button>
                        </div>
                        <label className="flex justify-center mt-3">
                            <span className=" text-sm ">New here? <Link to={'/signup'} className='font-bold hover:underline text-[#D1A054]'>Create a New Account</Link></span>
                        </label>
                    </form>
                    <div>
                        <label className="label flex justify-center flex-col items-center">
                            <span className="label-text text-[#444444] font-semibold">Or sign in with</span>
                            <div className='flex gap-5 mt-2'>
                                <span onClick={handleGoogleLogin} className='btn btn-circle text-lg  btn-outline border-[#444444] hover:bg-[#444444]'> <FaGoogle /> </span>
                                <span className='btn btn-circle text-lg btn-outline border-[#444444] hover:bg-[#444444]'> <FaGithub /></span>
                                <span className='btn btn-circle text-lg btn-outline border-[#444444] hover:bg-[#444444]'> <FaFacebook /></span>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
