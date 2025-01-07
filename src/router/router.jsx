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
import AddItem from "../pages/Dashboard/AddItem";
import ManageItem from "../pages/Dashboard/ManageItem";
import AllUser from "../pages/Dashboard/AllUser";
import ManageBookings from "../pages/Dashboard/ManageBookings";

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
                path: "add-item",
                element: <AddItem />,
            },
            {
                path: "manage-item",
                element: <ManageItem />,
            },
            {
                path: "users",
                element: <AllUser />,
            },
            {
                path: "manage-bookings",
                element: <ManageBookings />,
            },
        ],
    },
]);

export default router;
