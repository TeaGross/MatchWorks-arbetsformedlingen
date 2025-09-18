import type { JobResult, JobDetail } from "../models/Jobs";
const BASE = "https://jobsearch.api.jobtechdev.se";

export const getJobs = async (
    page: number = 1,
    query: string | null = null
): Promise<JobResult> => {
    const limit = 15;
    const offset = (page - 1) * limit;

    const params = new URLSearchParams({
        offset: String(offset),
        limit: String(limit),
    });
    if (query && query.trim()) params.set("q", query.trim());

    const res = await fetch(`${BASE}/search?${params.toString()}`);
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    return res.json();
};

export const getJobById = async (id: string): Promise<JobDetail> => {
    const res = await fetch(`${BASE}/ad/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    return res.json();
};
