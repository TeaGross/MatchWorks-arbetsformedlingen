import { useContext, useEffect, useState } from "react";
import { getJobs } from "../services/JobService";
import {
    DigiLayoutBlock,
    DigiLayoutContainer,
    DigiLoaderSpinner,
    DigiTypography,
} from "@digi/arbetsformedlingen-react";
import {
    LayoutBlockVariation,
    LoaderSpinnerSize,
    TypographyVariation,
} from "@digi/arbetsformedlingen";
import { SearchForm } from "./SearchForm";
import { JobContext } from "../context/Jobcontext";
import { Link } from "react-router";
import { DigiPagination } from "./Pagination";

export const JobList = () => {
    const { jobs, setJobs, setPage, setTotalResult, query } =
        useContext(JobContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            setError(null);
            try {
                const jobs = await getJobs(1, query || null);
                setJobs(jobs.hits ?? []);
                setTotalResult(
                    Math.min(jobs.total.value || jobs.hits.length || 0, 2000)
                );
                setPage(1);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [setJobs, setTotalResult, setPage, query]);

    return (
        <div>

            <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
                <SearchForm onSearchResult={setJobs} />
                <div>
                {loading ? (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <DigiLoaderSpinner
                            afSize={LoaderSpinnerSize.MEDIUM}
                            afText="Laddar"
                        />
                    </div>
                ) : error ? (
                    error
                ) : jobs.length === 0 ? (
                    "Inga jobb hittades."
                ) : null}
            </div>
                <DigiTypography afVariation={TypographyVariation.SMALL}>
                    {jobs?.map((job) => (
                        <DigiLayoutContainer
                            key={job.id}
                            af-vertical-padding={15}
                        >
                            <div className="ad-container">
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
            <DigiPagination />
        </div>
    );
};
