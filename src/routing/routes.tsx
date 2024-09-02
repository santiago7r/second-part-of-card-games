import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GameDetailPage from "../components/GameDetailPage";
import ErrorPage from "./ErrorPage";
import Layout from "./Layout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/games/:slug',
                element: <GameDetailPage />
            },
        ]
    },
]);

export default router;