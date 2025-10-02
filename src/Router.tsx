import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Error } from "./pages/Error";
import { HomePage } from "./pages/HomePage";
import { JobPresentation } from "./pages/JobPresentation";
import { JobPage } from "./pages/JobPage";

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
                path: "/job/:id",
                element: <JobPresentation />
            },
            {
                path: "/jobPage",
                element: <JobPage />
            }
        ]

    }
], {
basename: import.meta.end.DEV ? "" : "MatchWorks-arbetsformedlingen/",
})
