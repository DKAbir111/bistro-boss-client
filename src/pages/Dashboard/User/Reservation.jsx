import SectionTitle from "../../../components/shared/SectionTitle";
import OurLocation from "../../ContactUs/OurLocation";
import BookingForm from "./BookingForn";

export default function Reservation() {
    return (
        <section className="pb-10">
            <SectionTitle heading={'Book a table'} subHeading={'Reservation'} />
            <BookingForm />
            <OurLocation />
        </section>
    )
}
