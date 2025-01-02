import SectionTitle from "../../components/shared/SectionTitle";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
export default function OurLocation() {
    const contactInfo = [
        {
            id: 1,
            title: 'PHONE',
            info: '+1 234 567 8900',
            icon: <FaPhoneVolume />
        },
        {
            id: 2,
            title: 'ADDRESS',
            info: '+1 234 567 8900',
            icon: <FaLocationDot />
        },
        {
            id: 3,
            title: 'WORKING HOURS',
            info: 'Mon - Fri: 08:00 - 22:00 and Sat - Sun: 10:00 - 23:00',
            icon: <MdWatchLater />
        }
    ]
    return (
        <section className="max-w-screen-xl mx-auto">
            <SectionTitle heading={'OUR LOCATION'} subHeading={'Visit Us'} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 px-2">
                {
                    contactInfo.map(contact => <div key={contact.id} className="border flex justify-center items-center flex-col">
                        <span className="text-white bg-[#D1A054] py-6 w-full flex justify-center items-center text-2xl">{contact.icon}</span>
                        <div className="px-5 w-full pb-5">
                            <div className=" bg-[#F3F3F3] w-full py-10 h-[200px] flex flex-col justify-center items-center gap-3">
                                <h3 className="font-bold text-lg">{contact.title}</h3>
                                {contact.info.split(' and ').map((line, index) => (
                                    <span key={index} className="block">
                                        {line}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </section>
    )
}
