import { useContext, useEffect, useState } from 'react';
import bgImage from '../../assets/others/authentication.png'
import authImage from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import DynamicTitle from '../../components/shared/DynamicTitle';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../Provider/AuthContext';
import { toast } from 'react-toastify';
export default function Login() {
    const { loginUser } = useContext(AuthContext)
    const [relode, setRelode] = useState(true)
    const [valid, setValid] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [relode])

    const vadidateCaptcha = (e) => {
        e.preventDefault()
        const givenInput = e.target.value;
        if (givenInput.length === 6 && validateCaptcha(givenInput)) {
            setValid(true)
        }
        else {
            setValid(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(res => {
                if (res?.user?.email) {
                    navigate('/')
                    toast.success("Logged in successfully")
                    form.reset()
                }
            }).catch(err => toast.error(err.message))
    }
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}>
            <DynamicTitle title={'BistroBoss | Login'} />
            <div className="hero-content mt-20 text-center flex flex-col lg:flex-row max-w-screen-xl mx-auto border py-20 shadow-lg lg:gap-10 font-inter text-black">

                <img src={authImage} alt="" className='md:w-1/2' />
                <div className="card-body w-full">
                    <form onSubmit={handleSubmit}>
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

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
                            <span className="text-[#D1A054] text-sm ">New here? <Link to={'/signup'} className='font-bold hover:underline'>Create a New Account</Link></span>
                        </label>
                    </form>
                    <div>
                        <label className="label flex justify-center flex-col items-center">
                            <span className="label-text text-[#444444] font-semibold">Or sign in with</span>
                            <div className='flex gap-5 mt-2'>
                                <span className='btn btn-circle text-lg  btn-outline border-[#444444] hover:bg-[#444444]'> <FaGoogle /> </span>
                                <span className='btn btn-circle text-lg btn-outline border-[#444444] hover:bg-[#444444]'> <FaGithub /></span>
                                <span className='btn btn-circle text-lg btn-outline border-[#444444] hover:bg-[#444444]'> <FaFacebook /></span>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>

    )
}
