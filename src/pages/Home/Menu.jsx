import SectionTitle from "../../components/shared/SectionTitle";
import MenuCard from "../../components/shared/MenuCard";
import useMenu from "../../hooks/useMenu";
import { Link } from "react-router-dom";

export default function Menu() {
    const [items] = useMenu()
    const popular = items.filter(item => item.category === "popular")
    return (
        <section className="max-w-screen-xl mx-auto flex justify-center items-center flex-col my-10">
            <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
            <div className="grid lg:grid-cols-2 gap-10 p-5">
                {popular.map(item => <MenuCard key={item._id} item={item} />)}
            </div>
            <Link to={'/menu'}> <button className="mx-auto mt-10 btn btn-outline border-0 border-b-4 bg-base-200 px-10">View Full Menu</button></Link>
        </section>
    )
}

