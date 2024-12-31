import SectionTitle from "../../components/shared/SectionTitle";
import image from '../../assets/home/featured.jpg';

export default function Featured() {
    return (
        <section className="relative bg-fixed bg-cover bg-center py-20 my-20" style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative max-w-screen-xl mx-auto">
                <SectionTitle heading={"Featured Menu"} subHeading={"Check it Out"} white={true} />
                <div className="md:flex gap-20 justify-center items-center">
                    <div className="md:w-1/2">
                        <img src={image} alt="Featured Item" />
                    </div>
                    <div className="text-white font-inter md:w-2/5 p-3 space-y-2">
                        <p>January 20, 2025</p>
                        <p className="uppercase text-lg">Where can I get Some</p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, repellendus? Non veritatis vitae exercitationem repellendus officiis,
                            consequatur dicta in facere explicabo eius natus dignissimos minima necessitatibus deleniti laborum eos autem.
                        </p>
                        <button className="btn btn-outline border-0 border-b-4 text-white px-9">READ MORE</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
