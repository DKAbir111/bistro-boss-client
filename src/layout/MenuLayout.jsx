import Cover from "../components/shared/Cover";
import banner from '../assets/menu/banner3.jpg'
import DynamicTitle from "../components/shared/DynamicTitle";
import SectionTitle from "../components/shared/SectionTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import MenuCard from "../components/shared/MenuCard";
export default function MenuLayout() {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('menu.json')
            .then(res => setItems(res.data))
    }, [])

    const todaysOffers = items.filter(item => item.category === "offered")
    return (
        <>
            <DynamicTitle title={"Menu | BistroBoss"} />
            <Cover image={banner} title={'OUR MENU'} subTitle={'Would you like to try a dish?'} />
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't Miss"} />
            <div className="grid md:grid-cols-2 gap-10 p-5 max-w-screen-xl mx-auto">
                {todaysOffers.map(item => <MenuCard key={item._id} item={item} />)}
                <button className="mx-auto col-span-2 mt-5 btn btn-outline border-0 border-b-4 bg-base-200 px-10">ORDER YOUR FAVOURITE FOOD</button>
            </div>

        </>
    )
}
