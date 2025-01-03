import bgImage from '../../assets/others/authentication.png'
import authImage from '../../assets/others/authentication2.png'
export default function Login() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}>
            <div className="hero-content text-neutral-content text-center flex flex-col md:flex-row max-w-screen-lg mx-auto border py-20 shadow-lg gap-10">

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
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D1A054B3] hover:bg-[#D1A054] text-white">Sign in</button>
                    </div>
                    <label className="flex justify-center">
                        <a href="#" className="text-[#D1A054] text-sm ">New here? <span className='font-bold hover:underline'>Create a New Account</span></a>
                    </label>
                </form>

            </div>
        </div >
    )
}
