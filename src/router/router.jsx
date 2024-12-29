import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [{
            path: "/",
            element: <HomeLayout />
        }]
    },
]);

export default router;