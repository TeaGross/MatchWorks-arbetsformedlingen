import type { JobResult, JobDetail } from "../models/Jobs";


// initial load
export const getJobs = async () => {
    const response = await fetch(
        "https://jobsearch.api.jobtechdev.se/search?offset=0&limit=10"
    );
    const jobs: JobResult = await response.json();

    return jobs;
};

//job by id
export const getJobById = async (id: string): Promise<JobDetail> => {
    const res = await fetch(`https://jobsearch.api.jobtechdev.se/ad/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: JobDetail = await res.json();
    return data;
};

// search by query
export const searchJobs = async (query: string): Promise<JobResult> => {
  const params = new URLSearchParams({ q: query, offset: "0", limit: "10" });
  const res = await fetch(
    `https://jobsearch.api.jobtechdev.se/search?${params}`
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
};
