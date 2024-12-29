import SectionTitle from "../../components/shared/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import img1 from '../../assets/home/slide1.jpg'
import img2 from '../../assets/home/slide2.jpg'
import img3 from '../../assets/home/slide3.jpg'
import img4 from '../../assets/home/slide3.jpg'
import img5 from '../../assets/home/slide5.jpg'

export default function Order() {
    return (
        <section className="max-w-screen-xl mx-auto">
            <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"} />
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="slide1" />
                    <h3 className="md:text-3xl font-cinzel relative bottom-7 md:bottom-12 text-shadow-lg text-white px-5">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="slide2" />
                    <h3 className="md:text-3xl font-cinzel relative bottom-7 md:bottom-12 text-shadow-lg text-white px-5">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="slide3" />
                    <h3 className="md:text-3xl font-cinzel relative bottom-7 md:bottom-12 text-shadow-lg text-white px-5">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="slide5" />
                    <h3 className="md:text-3xl font-cinzel relative bottom-7 md:bottom-12 text-shadow-lg text-white px-5">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="slide4" />
                    <h3 className="md:text-3xl font-cinzel relative bottom-7 md:bottom-12 text-shadow-lg text-white px-5">Soups</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}
