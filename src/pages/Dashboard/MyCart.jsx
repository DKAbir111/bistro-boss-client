import SectionTitle from "../../components/shared/SectionTitle";
import useCart from "../../hooks/useCart";

export default function MyCart() {
    const [cart] = useCart()
    console.log(cart)
    return (
        <section>
            <SectionTitle heading={'WANNA ADD MORE?'} subHeading={'My Cart'} />
            <div className="max-w-screen-lg bg-white p-10 mx-auto">
                <header className="font-cinzel flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">Total Orders: {cart.length} </h3>
                    <h3 className="text-2xl font-semibold"> Total Price: ${0}</h3>
                    <button className="btn text-lg bg-[#D1A054] text-white">Pay</button>
                </header>
            </div>
        </section>
    )
}
