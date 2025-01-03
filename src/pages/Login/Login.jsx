import { useEffect, useState } from 'react';
import bgImage from '../../assets/others/authentication.png'
import authImage from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
export default function Login() {

    const [relode, setRelode] = useState(true)
    const [valid, setValid] = useState(false)

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
            e.target.reset()
        }
    }
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}>
            <div className="hero-content text-center flex flex-col md:flex-row max-w-screen-lg mx-auto border py-20 shadow-lg gap-10 font-inter text-black">

                <img src={authImage} alt="" className='md:w-1/2' />

                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />

                    </div>

                    {/* captcha */}
                    <div className='mt-3 input input-bordered flex items-center'>
                        <LoadCanvasTemplateNoReload />
                    </div>
                    <div>
                        <span onClick={() => setRelode(!relode)} className='text-blue-600 text-sm cursor-pointer'>Reload Captcha</span>
                    </div>
                    <div className="form-control">
                        <input type="text" onChange={vadidateCaptcha} placeholder="Type here" className="input input-bordered" required />
                    </div>

                    {/* submit button */}
                    <div className="form-control mt-6">
                        <button className={`btn bg-[#D1A054B3] hover:bg-[#D1A054] text-white ${valid ? '' : 'btn-disabled'}`}>Sign in</button>
                    </div>
                    <label className="flex justify-center">
                        <a href="#" className="text-[#D1A054] text-sm ">New here? <span className='font-bold hover:underline'>Create a New Account</span></a>
                    </label>
                </form>
            </div>
        </div >
    )
}
