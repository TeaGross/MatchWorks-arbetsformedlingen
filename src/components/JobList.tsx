import { useEffect, useState } from "react"
import { getJobs } from "../services/JobService";
import type { Job } from "../models/Jobs";

export const JobList = () => {
    const [jobs, setJobs] = useState<Job[]>();


    useEffect(() => {
        const getData = async () => {
            
            try {
                const jobs = await getJobs();
                setJobs(jobs.hits);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };
        
        getData();
    }, []);
    
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
}