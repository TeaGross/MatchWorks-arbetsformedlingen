import { useContext, useEffect, useState } from "react";
import { getJobs } from "../services/JobService";
import {
    DigiLayoutBlock,
    DigiLayoutContainer,
    DigiTypography,
} from "@digi/arbetsformedlingen-react";
import {
    LayoutBlockVariation,
    TypographyVariation,
} from "@digi/arbetsformedlingen";
import { SearchForm } from "./SearchForm";
import { JobContext } from "../context/Jobcontext";
import { Link } from "react-router";
import { DigiPagination } from "./Pagination";

export const JobList = () => {
    const { jobs, setJobs } = useContext(JobContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            setError(null);
            try {
                const jobs = await getJobs();
                setJobs(jobs.hits ?? []);
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
                {loading
                    ? "Laddar..."
                    : error
                    ? error
                    : jobs.length === 0
                    ? "Inga jobb hittades."
                    : null}
            </div>

            <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
                <DigiLayoutContainer af-vertical-padding={15}>
                    <DigiTypography afVariation={TypographyVariation.SMALL}>
                        {jobs?.map((job) => (
                            <div key={job.id} className="ad-container">
                                <Link to={`/job/${job.id}`}>
                                    <h3 className="ad-header">
                                        {job.headline}
                                    </h3>
                                </Link>
                                <p>{job.employer?.name}</p>
                                <p>{job.workplace_address?.municipality}</p>
                            </div>
                        ))}
                    </DigiTypography>
                </DigiLayoutContainer>
            </DigiLayoutBlock>
            <DigiPagination />
        </div>
    );
};
