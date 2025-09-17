import { useContext } from "react";
import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import { getJobs } from "../services/JobService";
import { JobContext } from "../context/Jobcontext";

export const DigiPagination = () => {
    const { setJobs, query, page, setPage } = useContext(JobContext);
    // const navigate = useNavigate();
    const handlePageChange = (event: CustomEvent<number>) => {
        const getData = async () => {
            // const setPage = event.detail;
            setPage(event.detail);
            const jobs = await getJobs(page, query);
            setJobs(jobs.hits ?? []);
        };
        getData();
    };

    return (
        <DigiNavigationPagination
            afTotalPages={133}
            afInitActive-page={1}
            afCurrentResultStart={1}
            afCurrentResultEnd={15}
            afTotalResults={2000}
            afResultName="annonser"
            onAfOnPageChange={handlePageChange}
        />
    );
};
