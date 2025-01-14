import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useCart from "../../../../hooks/useCart";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

export default function CheckoutForm() {
    const axiosSecure = useAxiosSecure();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [cart, refetch] = useCart();
    const { user } = useAuth()
    console.log(cart)
    // Calculate the total price from the cart
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        // Define a function to handle the API request
        const fetchClientSecret = async () => {
            try {
                const res = await axiosSecure.post('/api/create-payment-intent', { price: totalPrice });
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            } catch (error) {
                console.error("Error fetching client secret:", error);
                toast.error("Failed to initiate payment. Please try again.");
            }
        };

        // Call the function
        if (totalPrice > 0) fetchClientSecret();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalPrice]); // Exclude axiosSecure from the dependency array

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
            toast.error(error.message);
            setError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        if (paymentIntent) {
            // console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                // console.log('Transaction id:', paymentIntent.id);
                Swal.fire({
                    title: "Payment Successful!",
                    icon: "success",
                    confirmButtonColor: "d0a054",
                    html: `
                        <p>Your payment has been processed successfully.</p>
                        <p style="color:red;text-align:center; padding:5px"><b>Transaction ID:</b> ${paymentIntent.id}</p>
                        <p>Thank you for your purchase!</p>
                    `,
                    confirmButtonText: "OK",
                    draggable: true
                });
                const paymentInfo = {
                    email: user?.email,
                    total: totalPrice,
                    transactionId: paymentIntent.id,
                    menuIds: cart.map(item => item.menuId),
                    cartIds: cart.map(item => item.cartId),
                    time: new Date(),
                    status: "pending"
                }
                axiosSecure.post('/api/payment', paymentInfo)
                    .then(res => {
                        console.log(res.data)
                        refetch()
                    })

            }
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
                <small className="text-center text-red-500 font-inter mb-4">{error}</small>
                <button
                    type="submit"
                    disabled={!stripe || !clientSecret || !totalPrice}
                    className="w-full py-2 bg-[#d0a054] text-white font-semibold rounded-md hover:bg-[#c69e5e] disabled:opacity-50"
                >
                    {`Pay Now ${totalPrice}$`}
                </button>
            </form>
        </div>
    );
}
