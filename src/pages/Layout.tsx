import { Outlet } from "react-router"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { JobContext } from "../context/Jobcontext"
import { useState } from "react"
import type { Job } from "../models/Jobs"

export const Layout = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [query, setQuery] = useState("");


    return <>
    <JobContext.Provider value={{jobs, setJobs, query, setQuery}}>
        <Header/>
        <main><Outlet/></main>
        <Footer/>
    </JobContext.Provider>
    </>
}