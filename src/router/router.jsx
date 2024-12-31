import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import HomeLayout from "../layout/HomeLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import MenuLayout from "../layout/MenuLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomeLayout />
            },
            {
                path: "/menu",
                element: <MenuLayout />
            }
        ]
    },
]);

export default router;