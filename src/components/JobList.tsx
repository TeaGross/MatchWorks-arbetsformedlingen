
import { useEffect, useState } from "react";
import { getJobs } from "../services/JobService";
import type { Job } from "../models/Jobs";
import { Link } from "react-router-dom";
import { DigiLayoutBlock, DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";
import { LayoutBlockVariation, TypographyVariation } from "@digi/arbetsformedlingen";
import { SearchForm } from './SearchForm'; 


export const JobList = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
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

    if (loading) {
        return <div>Laddar…</div>;
    }

    if (error) {
        return <div style={{ color: "crimson" }}>{error}</div>;
    }

    if (jobs.length === 0) {
        return <div>Inga jobb hittades.</div>;
    }

    return (
    <>
    {/* moved out searchform from designsystem */}
    <SearchForm onSearchResult={setJobs} /> 
        <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
            <DigiTypography afVariation={TypographyVariation.SMALL}>
              
                {jobs?.map((job) => (
                    <DigiLayoutContainer 
                    af-vertical-padding={15}
                    >  
                    <div key={job.id} className="ad-container">
                        <h3 className="ad-header">
                            <Link to={`/job/${job.id}`} state={{ job }}>
                                {job.headline}
                            </Link>
                        </h3>
                        <p>{job.employer?.name}</p>
                        <p>{job.workplace_address?.municipality}</p>
                    </div>
                    </DigiLayoutContainer>
                ))}
            </DigiTypography>
        </DigiLayoutBlock>
    </>
    )
}
