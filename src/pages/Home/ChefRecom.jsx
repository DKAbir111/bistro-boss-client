import ChefRecomCard from "../../components/shared/ChefRecomCard";
import SectionTitle from "../../components/shared/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

export default function ChefRecom() {
    const axiosSecure = useAxiosSecure();
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        axiosSecure.get('/api/menu/chef')
            .then(res => setChefs(res.data))
            .catch(err => console.error(err));
    }, []);


    return (
        <section className="max-w-screen-xl mx-auto p-2">
            <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                {chefs.length > 0 ? (
                    chefs.map((chef, index) => (
                        <ChefRecomCard
                            key={index}
                            title={chef.title}
                            image={chef.image}
                            descrip={chef.
                                recipe}
                        />
                    ))
                ) : (
                    <p>No recommendations available</p>
                )}
            </div>
        </section>
    );
}
