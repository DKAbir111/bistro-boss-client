import SectionTitle from "../../components/shared/SectionTitle";
import { FaPaperPlane } from "react-icons/fa";
export default function ContactForm() {
    return (
        <section className="max-w-screen-lg mx-auto my-40 font-inter">
            <SectionTitle heading={'CONTACT FORM'} subHeading={'Send Us a Message'} />
            <div className="bg-[#F3F3F3] md:p-10">
                <form className="card-body md:grid grid-cols-2 gap-x-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email*</span>
                        </label>
                        <input type="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Phone*</span>
                        </label>
                        <input type="number" placeholder="Enter your phone number" className="input input-bordered" required />
                    </div>
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Message*</span>
                        </label>
                        <textarea
                            placeholder="Write your message here"
                            className="textarea textarea-bordered columns-4"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <div className="mt-20 col-span-2 flex justify-center">
                        <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white rounded-sm">Send Message <FaPaperPlane /></button>
                    </div>
                </form>
            </div>
        </section>
    )
}
