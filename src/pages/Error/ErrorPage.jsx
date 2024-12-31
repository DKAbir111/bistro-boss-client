import { Link } from 'react-router-dom'
import errorPage from '/404.gif'
import { FaArrowLeft } from "react-icons/fa";
export default function ErrorPage() {
    return (
        <>
            <div className='flex justify-center items-center h-screen flex-col'>
                <img src={errorPage} alt="" />
                <Link to={'/'}> <button className='btn btn-outline border-0 border-b-4 text-[#BB8506] hover:bg-[#BB8506]'><FaArrowLeft />Back to Home</button></Link>
            </div>
        </>
    )
}
