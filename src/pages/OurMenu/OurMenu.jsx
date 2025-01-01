import MenuCard from "../../components/shared/MenuCard";

export default function OurMenu({ items }) {
    return (
        <div className="grid lg:grid-cols-2 gap-10 p-5 max-w-screen-xl mx-auto my-10">
            {items.map(item => <MenuCard key={item._id} item={item} />)}
            <button className="mx-auto lg:col-span-2 mt-5 btn btn-outline border-0 border-b-4 bg-base-200 px-10">ORDER YOUR FAVOURITE FOOD</button>
        </div>
    )
}
