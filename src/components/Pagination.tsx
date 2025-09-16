import { useContext } from "react";
import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import { getJobs } from "../services/JobService";
import { JobContext } from "../context/Jobcontext";

export const DigiPagination = () => {
    const { setJobs, query } = useContext(JobContext);
    // const navigate = useNavigate();
    const handlePageChange = (event: CustomEvent<number>) => {
        const getData = async () => {
            const newPage = event.detail;
            const jobs = await getJobs(newPage, query);
            setJobs(jobs.hits ?? []);
        };
        getData();
    };

    return (
        <DigiNavigationPagination
            afTotalPages={6}
            afInitActive-page={1}
            afCurrentResultStart={1}
            afCurrentResultEnd={15}
            afTotalResults={1000}
            afResultName="annonser"
            onAfOnPageChange={handlePageChange}
        />
    );
};
