import { createContext } from "react";
import type { Job } from "../models/Jobs"

type JobContext = {
    jobs: Job[];
    setJobs: React.Dispatch<React.SetStateAction<Job[]>>
    query: string,
    setQuery: (q: string) => void;
}

export const JobContext = createContext<JobContext>({
    jobs: [],
    setJobs: () => {},
    query: "",
    setQuery: () => {}
})