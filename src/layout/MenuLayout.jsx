import Cover from "../components/shared/Cover";
import banner from '../assets/menu/banner3.jpg'
import desserts from '../assets/menu/dessert-bg.jpeg'
import saladImg from '../assets/menu/salad-bg.jpg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import soupImg from '../assets/menu/soup-bg.jpg'
import DynamicTitle from "../components/shared/DynamicTitle";
import SectionTitle from "../components/shared/SectionTitle";
import OurMenu from "../pages/OurMenu/OurMenu";
import useMenu from "../hooks/useMenu";
export default function MenuLayout() {
    // loading data uisng custom hooks
    const [items] = useMenu()

    const todaysOffers = items.filter(item => item.category === "offered")
    const dessertsMenu = items.filter(item => item.category === "dessert")
    const pizzaMenu = items.filter(item => item.category === "pizza")
    const saladMenu = items.filter(item => item.category === "salad")
    const soupdMenu = items.filter(item => item.category === "soup")

    return (
        <>
            <DynamicTitle title={"Menu | BistroBoss"} />
            <Cover image={banner} title={'OUR MENU'} subTitle={'Would you like to try a dish?'} />
            {/* Todays offer */}
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't Miss"} />
            <OurMenu items={todaysOffers} category={'offered'} />

            {/* Desserts */}
            <Cover image={desserts} title={'DESSERTS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <OurMenu items={dessertsMenu} category={'dessert'} />

            {/* PIZZA */}
            <Cover image={pizzaImg} title={'PIZZA'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <OurMenu items={pizzaMenu} category={'pizza'} />

            {/* Salads */}
            <Cover image={saladImg} title={'SALADS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <OurMenu items={saladMenu} category={'salad'} />

            {/* SOUPS */}
            <Cover image={soupImg} title={'SOUPS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <OurMenu items={soupdMenu} category={'soup'} />

        </>
    )
}
