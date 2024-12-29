import ChefRecomCard from "../../components/shared/ChefRecomCard";
import SectionTitle from "../../components/shared/SectionTitle";
import img1 from '../../assets/home/slide1.jpg'
import img2 from '../../assets/home/slide2.jpg'
import img3 from '../../assets/home/slide3.jpg'

export default function ChefRecom() {
    return (
        <section className="max-w-screen-xl mx-auto p-2">
            <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <ChefRecomCard title={'Caeser Salad'} image={img1} descrip={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'} />
                <ChefRecomCard title={'Italian Pizza'} image={img2} descrip={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'} />
                <ChefRecomCard title={'Thai Soup'} image={img3} descrip={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'} />
            </div>
        </section>
    )
}
