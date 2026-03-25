import { createBrowserRouter } from "react-router-dom";
import Finish from "./pages/Finish";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Address from "./pages/Address";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/personal',
        element: <Personal />
    },
    {
        path: '/address',
        element: <Address />
    },
    {
        path: '/finish',
        element: <Finish />
    }
]);

export default router