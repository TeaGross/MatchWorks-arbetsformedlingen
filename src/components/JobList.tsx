import { useEffect, useState } from "react";
import { getJobs } from "../services/JobService";
import type { Job } from "../models/Jobs";

export const JobList = () => {
    const [jobs, setJobs] = useState<Job[]>([]); // Jobs måste ha array som startvärde
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            setError(null);
            try {
                const jobs = await getJobs();
                setJobs(jobs.hits);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    // Visar laddningsindikator
    if (loading) {
        return <div>Laddar…</div>; // simple loading text
    }

    // Vid error
    if (error) {
        return <div style={{ color: "crimson" }}>{error}</div>;
    }

    // Ifall inga jobb finns
    if (jobs.length === 0) {
        return <div>Inga jobb hittades.</div>;
    }

    return (
        <div>
            {jobs?.map((job) => (
                <div key={job.id}>
                    <h3>{job.headline}</h3>
                    <p>{job.employer?.name}</p>
                    <p>{job.workplace_address?.municipality}</p>
                </div>
            ))}
        </div>
    );
};
