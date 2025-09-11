
import { useContext, useEffect, useState } from "react";
import { getJobs } from "../services/JobService";
import { Link } from "react-router-dom";
import { DigiLayoutBlock, DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";
import { LayoutBlockVariation, TypographyVariation } from "@digi/arbetsformedlingen";
import { SearchForm } from './SearchForm'; 
import { JobContext } from "../context/Jobcontext";


export const JobList = () => {
    const {jobs, setJobs} = useContext(JobContext);
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
    }, [setJobs]);

    return (
    <div>
    <SearchForm onSearchResult={setJobs} /> 
        <div>
                    {loading ? "Laddar..." : error ? error : jobs.length === 0 ? "Inga jobb hittades." : null}
              </div>
        
        <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
            <DigiTypography afVariation={TypographyVariation.SMALL}>
              
                {jobs?.map((job) => (
                    <DigiLayoutContainer key={job.id}
                    af-vertical-padding={15}
                    >  
                    <div  className="ad-container">
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
    </div>
  );
};


