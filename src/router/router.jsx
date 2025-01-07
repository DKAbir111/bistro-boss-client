import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomeLayout from "../layout/HomeLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import MenuLayout from "../layout/MenuLayout";
import ShopLayout from "../layout/ShopLayout";
import ContactUsLayout from "../layout/ContactUsLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../pages/Dashboard/DashBoard";
import Home from "../pages/Dashboard/Home";
import Reservation from "../pages/Dashboard/Reservation";
import Payment from "../pages/Dashboard/Payment";
import MyCart from "../pages/Dashboard/MyCart";
import AddReview from "../pages/Dashboard/AddReview";
import MyBooking from "../pages/Dashboard/MyBooking";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomeLayout />,
            },
            {
                path: "/menu",
                element: <MenuLayout />,
            },
            {
                path: "/shop/:category",
                element: <ShopLayout />,
            },
            {
                path: "/contact-us",
                element: <ContactUsLayout />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashBoard /></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <Home />,
            },
            {
                path: "reservation",
                element: <Reservation />,
            },
            {
                path: "payment",
                element: <Payment />,
            },
            {
                path: "my-cart",
                element: <MyCart />
            },
            {
                path: "add-review",
                element: <AddReview />,
            },
            {
                path: "booking",
                element: <MyBooking />,
            }
        ],
    },
]);

export default router;
