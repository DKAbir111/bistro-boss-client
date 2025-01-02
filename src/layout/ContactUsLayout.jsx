import Cover from "../components/shared/Cover";
import bannerImg from '../assets/contact/banner.jpg'
export default function ContactUsLayout() {
    return (
        <section>
            <Cover image={bannerImg} title={'CONTACT US'} subTitle={'Would you like to try a dish?'} />
        </section>
    )
}
