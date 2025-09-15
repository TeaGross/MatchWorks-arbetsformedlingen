import type { JobResult, JobDetail } from "../models/Jobs";

const BASE = "https://jobsearch.api.jobtechdev.se";

// 1-baserad page in, 0-baserad offset till API
export const getJobs = async (
    page: number = 0,
    limit = 15
): Promise<JobResult> => {
    const offset = page * limit + 1;
    const res = await fetch(`${BASE}/search?offset=${offset}&limit=${limit}`);
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    return res.json();
};

export const searchJobs = async (
    query: string,
    limit = 15
): Promise<JobResult> => {
    const offset = 0;
    const params = new URLSearchParams({
        q: query,
        offset: String(offset),
        limit: String(limit),
    });
    const res = await fetch(`${BASE}/search?${params.toString()}`);
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    return res.json();
};

export const getJobById = async (id: string): Promise<JobDetail> => {
    const res = await fetch(`${BASE}/ad/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    return res.json();
};
