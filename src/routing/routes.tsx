import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GameDetailPage from "../components/GameDetailPage";
import Layout from "./Layout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: 'games/1',
                element: <GameDetailPage />
            },
        ]
    },
]);

export default router;