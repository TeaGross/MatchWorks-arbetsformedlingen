import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { JobContext } from "../context/Jobcontext";
import { useState } from "react";
import type { Job } from "../models/Jobs";

export const Layout = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [totalResult, setTotalResult] = useState(0);

    return (
        <>
            <JobContext.Provider
                value={{
                    jobs,
                    setJobs,
                    query,
                    setQuery,
                    page,
                    setPage,
                    totalResult,
                    setTotalResult,
                }}
            >
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </JobContext.Provider>
        </>
    );
};
