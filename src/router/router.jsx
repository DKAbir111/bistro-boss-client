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

import Reservation from "../pages/Dashboard/User/Reservation";
import Payment from "../pages/Dashboard/User/Payment";
import MyCart from "../pages/Dashboard/User/MyCart";
import AddReview from "../pages/Dashboard/User/AddReview";
import MyBooking from "../pages/Dashboard/User/MyBooking";
import Home from "../pages/Dashboard/User/Home";
import AllUser from "../pages/Dashboard/Admin/AllUser";

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

            // user route
            {
                path: "/dashboard",
                element: <Home />
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
            },

            // admin route
            {
                path: "admin",
                element: <MyBooking />,
            },
            {
                path: "manage-booking",
                element: <MyBooking />,
            },
            {
                path: "add-item",
                element: <MyBooking />,
            },
            {
                path: "all-user",
                element: <AllUser />,
            },
            {
                path: "manage-item",
                element: <MyBooking />,
            },

        ],
    },
]);

export default router;
