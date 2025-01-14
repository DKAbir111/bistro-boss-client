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
import MyCart from "../pages/Dashboard/User/MyCart";
import AddReview from "../pages/Dashboard/User/AddReview";
import MyBooking from "../pages/Dashboard/User/MyBooking";
import Home from "../pages/Dashboard/User/Home";
import AllUser from "../pages/Dashboard/Admin/AllUser";
import AdminRoute from "./AdminRoute";
import AddItem from "../pages/Dashboard/Admin/AddItem";
import ManageItem from "../pages/Dashboard/Admin/ManageItem";
import UpdateItem from "../pages/Dashboard/Admin/UpdateItem";
import Payment from "../pages/Dashboard/User/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/User/PaymentHistory";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import ManageBooking from "../pages/Dashboard/Admin/ManageBooking";



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
                path: "user",
                element: <PrivateRoute> <Home /></PrivateRoute>
            },
            {
                path: "reservation",
                element: <PrivateRoute><Reservation /></PrivateRoute>,
            },

            {
                path: "my-cart",
                element: <PrivateRoute> <MyCart /></PrivateRoute>
            },

            {
                path: "add-review",
                element: <PrivateRoute> <AddReview /></PrivateRoute>,
            },
            {
                path: "booking",
                element: <PrivateRoute><MyBooking /></PrivateRoute>,
            },
            {
                path: "payment",
                element: <PrivateRoute><Payment /></PrivateRoute>,
            },
            {
                path: "history",
                element: <PrivateRoute><PaymentHistory /></PrivateRoute>,
            },

            // admin route
            {
                path: "admin",
                element: <AdminHome />
            },
            {
                path: "manage-booking",
                element: <ManageBooking />
            },
            {
                path: "add-item",
                element: <AdminRoute><AddItem /></AdminRoute>
            },
            {
                path: "all-user",
                element: <AdminRoute><AllUser /></AdminRoute>,
            },
            {
                path: "manage-item",
                element: <AdminRoute><ManageItem /></AdminRoute>,
            },
            {
                path: "update-item/:id",
                element: <AdminRoute><UpdateItem /> </AdminRoute>,
                loader: ({ params }) => fetch(`https://bistro-boss-server-phi-two.vercel.app/api/menu/${params.id}`)
            },

        ],
    },
]);

export default router;
