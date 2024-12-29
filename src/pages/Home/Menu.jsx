import { useEffect, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import axios from "axios";
import MenuCard from "../../components/shared/MenuCard";

export default function Menu() {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('menu.json')
            .then(res => {
                setItems(res.data.filter(item => item.category === "popular"))
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])
    return (
        <section className="max-w-screen-xl mx-auto flex justify-center items-center flex-col my-10">
            <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
            <div className="grid md:grid-cols-2 gap-10 p-5">
                {items.map(item => <MenuCard key={item._id} item={item} />)}
            </div>
            <button className="mx-auto mt-10 btn btn-outline border-0 border-b-4 bg-base-200 px-10">View Full Menu</button>
        </section>
    )
}

