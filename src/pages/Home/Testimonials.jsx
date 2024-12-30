import { useEffect, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ReactStars from "react-rating-stars-component";
import { FaQuoteLeft } from "react-icons/fa";
export default function Testimonials() {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get('reviews.json')
            .then(res => setReviews(res.data))
    }, [])


    return (
        <section className="max-w-screen-xl mx-auto">
            <SectionTitle heading={'TESTIMONIALS'} subHeading={'What Our Clients Say'} />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>

                        <div className="flex flex-col justify-center items-center px-24 gap-7">
                            <ReactStars value={review.rating} size={30} edit={false} />
                            <FaQuoteLeft className="text-6xl" />
                            <p className="text-center text-[#444444]">{review.details}</p>
                            <h2 className="text-2xl text-[#CD9003]">{review.name}</h2>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    )
}
