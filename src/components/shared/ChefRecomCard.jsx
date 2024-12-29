export default function ChefRecomCard({ title, descrip, image }) {
    return (
        <div className="card bg-base-200 shadow-sm rounded-sm">
            <figure>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-64 object-cover"
                />
            </figure>
            <div className="card-body items-center space-y-4">
                <h2 className="card-title">{title}</h2>
                <p className="text-center">{descrip}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-[#BB8506] hover:text-[#BB8506] text-[#BB8506] px-9 border-0 border-b-4 uppercase bg-base-300">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
