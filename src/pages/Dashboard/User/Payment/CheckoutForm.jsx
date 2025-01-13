import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 font-inter">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg"
            >
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6 font-cinzel">
                    Payment Checkout
                </h2>
                <div className="mb-6">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    color: "#424770",
                                    fontFamily: "'Roboto', sans-serif",
                                    "::placeholder": {
                                        color: "#aab7c4",
                                    },
                                },
                                invalid: {
                                    color: "#9e2146",
                                },
                            },
                        }}
                        className="p-4 border rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#d0a054]"
                    />
                </div>
                <button
                    type="submit"
                    disabled={!stripe}
                    className="w-full py-2 bg-[#d0a054] text-white font-semibold rounded-md hover:bg-[#c69e5e] disabled:opacity-50"
                >
                    Pay Now
                </button>
            </form>
        </div>
    );
}
