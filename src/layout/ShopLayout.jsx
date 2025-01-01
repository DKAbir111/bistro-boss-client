import Cover from "../components/shared/Cover";
import banner from '../assets/shop/banner2.jpg'

export default function ShopLayout() {
    return (
        <>
            <Cover image={banner} title={'OUR SHOP'} subTitle={'Would you like to try a dish?'} />
        </>
    )
}
