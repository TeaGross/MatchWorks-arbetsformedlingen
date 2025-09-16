import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Error } from "./pages/Error";
import { HomePage } from "./pages/HomePage";
import { JobPresentation } from "./pages/JobPresentation";
import { JobList } from "./pages/JobList";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
             {
                path: "/jobs",
                element: <JobList />
            },
            {
                path: "/job/:id",
                element: <JobPresentation />
            }
        ]

    }
])