import { createContext } from "react";
import type { Job } from "../models/Jobs"

type JobContext = {
    jobs: Job[];
    setJobs: React.Dispatch<React.SetStateAction<Job[]>>
}

export const JobContext = createContext<JobContext>({
    jobs: [],
    setJobs: () => {}
})