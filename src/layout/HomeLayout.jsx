import Banner from "../pages/Home/Banner";
import CallUs from "../pages/Home/CallUs";
import Chef from "../pages/Home/Chef";
import ChefRecom from "../pages/Home/ChefRecom";
import Featured from "../pages/Home/Featured";
import Menu from "../pages/Home/Menu";
import Order from "../pages/Home/Order";
import Testimonials from "../pages/Home/Testimonials";

export default function HomeLayout() {
    return (
        <div>
            <Banner />
            <Order />
            <Chef />
            <Menu />
            <CallUs />
            <ChefRecom />
            <Featured />
            <Testimonials />
        </div>
    )
}
