import Banner from "../pages/Home/Banner";
import Chef from "../pages/Home/Chef";
import Menu from "../pages/Home/Menu";
import Order from "../pages/Home/Order";

export default function HomeLayout() {
    return (
        <div>
            <Banner />
            <Order />
            <Chef />
            <Menu />
        </div>
    )
}
