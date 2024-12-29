export default function MenuCard({ item }) {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex gap-7">
            <img src={image} alt={name} className="w-28 h-20" style={{ borderRadius: "0px 200px 200px 200px" }} />
            <div className="text-[#737373] space-y-2">
                <h4 className="font-cinzel uppercase">{name} ------------------</h4>
                <p className=" font-inter">{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    )
}

