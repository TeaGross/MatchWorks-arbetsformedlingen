import { createContext } from "react";
import type { Job } from "../models/Jobs";

type JobContext = {
    jobs: Job[];
    setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
    query: string;
    setQuery: (q: string) => void;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    totalResult: number;
    setTotalResult: React.Dispatch<React.SetStateAction<number>>;
};

export const JobContext = createContext<JobContext>({
    jobs: [],
    setJobs: () => {},
    query: "",
    setQuery: () => {},
    page: 1,
    setPage: () => {},
    totalResult: 0,
    setTotalResult: () => {}
});
