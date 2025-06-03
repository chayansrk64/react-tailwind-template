import { createBrowserRouter } from "react-router";
import Layout from "../layouts/Layout";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])