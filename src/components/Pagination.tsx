import { useContext } from "react";
import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import { getJobs } from "../services/JobService";
import { JobContext } from "../context/Jobcontext";

export const DigiPagination = () => {
    const {setJobs, query, page, setPage, totalResult, setTotalResult } = useContext(JobContext);
    const limit = 15;

    // const navigate = useNavigate();
    const handlePageChange = (event: CustomEvent<number>) => {
        const newPage = event.detail;
        setPage(newPage);
        const getData = async () => {
            const data = await getJobs(newPage, query);
            setJobs(data.hits ?? []);
            const number = Number(data.total.value);
            setTotalResult(number);
        };
        getData();
    };

    // console.log(totalResult);
    // console.log(page);

    const totalPages = Math.ceil(totalResult / limit);

    return (
        <DigiNavigationPagination
            afTotalPages={totalPages}
            afInitActivePage={page}
            afCurrentResultStart={(page - 1) * limit + 1}
            afCurrentResultEnd={Math.min(page * limit, totalResult)}
            afTotalResults={totalResult}
            afResultName="annonser"
            onAfOnPageChange={handlePageChange}
        />
    );
};
