import type { JobResult } from "../models/Jobs";
 
export const getJobs = async () => {
    const response = await fetch(
        "https://jobsearch.api.jobtechdev.se/search?offset=0&limit=10"
    );
    const jobs: JobResult = await response.json();
 
    return jobs;
};