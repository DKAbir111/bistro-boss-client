import { Link } from "react-router-dom";
import MenuCard from "../../components/shared/MenuCard";

export default function OurMenu({ items, category }) {
    return (
        <div className="grid lg:grid-cols-2 gap-10 p-5 max-w-screen-xl mx-auto my-10">
            {items.map(item => <MenuCard key={item._id} item={item} />)}
            <Link to={`/shop/${category}`} className="lg:col-span-2 mx-auto "> <button className=" mt-5 btn btn-outline border-0 border-b-4 bg-base-200 px-10">ORDER YOUR FAVOURITE FOOD</button></Link>
        </div>
    )
}
