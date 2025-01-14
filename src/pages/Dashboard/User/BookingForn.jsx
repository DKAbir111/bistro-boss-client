import { ImSpoonKnife } from "react-icons/im";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const BookingForm = () => {
    // Handle form submission
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form reload
        const newBooking = {
            date: e.target.date.value,
            time: e.target.time.value,
            guest: e.target.guest.value,
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            status: 'Pending',
        };
        axiosSecure.post('/api/booking', newBooking)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Booking saved successfully');
                    // console.log(res.data)
                    e.target.resut()
                }
            })

    };

    return (
        <div className="max-w-4xl mx-auto p-6 rounded-lg">
            <form
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                onSubmit={handleSubmit}
            >
                {/* Date Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Date*</span>
                    </label>
                    <input
                        type="date"
                        name="date"
                        className="input input-bordered w-full"
                        placeholder="mm/dd/yyyy"
                    />
                </div>

                {/* Time Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Time*</span>
                    </label>
                    <input
                        type="time"
                        name="time"
                        className="input input-bordered w-full"
                        placeholder="--:--"
                    />
                </div>

                {/* Guest Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Guest*</span>
                    </label>
                    <select
                        name="guest"
                        className="select select-bordered w-full"
                    >
                        <option value="" disabled>Select Guests</option>
                        <option value="1 Person">1 Person</option>
                        <option value="2 People">2 People</option>
                        <option value="3 People">3 People</option>
                        <option value="4 People">4 People</option>
                    </select>
                </div>

                {/* Name Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Name*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="input input-bordered w-full"
                        placeholder="Your Name"
                    />
                </div>

                {/* Phone Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Phone*</span>
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        className="input input-bordered w-full"
                        placeholder="Phone Number"
                    />
                </div>

                {/* Email Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Email*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        readOnly
                        className="input input-bordered w-full"
                        placeholder="Email"
                    />
                </div>
                {/* Button */}
                <div className="mt-6 text-center md:col-span-2 lg:col-span-3">
                    <button
                        type="submit"
                        className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white rounded-sm px-7"
                    >
                        Book A Table <ImSpoonKnife />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
