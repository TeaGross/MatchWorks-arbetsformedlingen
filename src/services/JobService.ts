import type { JobResult, JobDetail } from "../models/Jobs";


// initial load
export const getJobs = async (
  query: string = "*",
  offset = 0,
  limit = 10
): Promise<JobResult> => {
  const params = new URLSearchParams({
    q: query,
    offset: offset.toString(),
    limit: limit.toString(),
  });

  const response = await fetch(`https://jobsearch.api.jobtechdev.se/search?${params}`);
  if (!response.ok) throw new Error(`HTTP-fel ${response.status}`);

  return response.json();
};

//job by id
export const getJobById = async (id: string): Promise<JobDetail> => {
    const res = await fetch(`https://jobsearch.api.jobtechdev.se/ad/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: JobDetail = await res.json();
    return data;
};


