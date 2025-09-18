import { useContext, useEffect, useRef } from "react";
import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import { getJobs } from "../services/JobService";
import { JobContext } from "../context/Jobcontext";

type DigiNavEl = Element & { afMSetCurrentPage: (n: number) => Promise<void> };

type Detail = number | { activePage?: number; page?: number };
type ChangeEventLike = { detail?: Detail };

export const DigiPagination = () => {
    const { setJobs, query, page, setPage, totalResult, setTotalResult } =
        useContext(JobContext);
    const limit = 15;
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = wrapperRef.current?.querySelector(
            "digi-navigation-pagination"
        ) as DigiNavEl | null;
        if (el) void el.afMSetCurrentPage(page);
    }, [page]);

    const handleChange = (evt: unknown) => {
        const d = (evt as ChangeEventLike)?.detail;
        const next =
            typeof d === "number"
                ? d
                : d && typeof d === "object"
                ? typeof d.activePage === "number"
                    ? d.activePage
                    : d.page
                : undefined;
        if (typeof next !== "number") return;

        setPage(next);
        (async () => {
            const data = await getJobs(next, query);
            setJobs(data.hits ?? []);
            setTotalResult(
                Math.min(data.total.value || data.hits.length || 0, 2000)
            );
        })();
    };

    const totalPages = Math.max(1, Math.ceil(totalResult / limit));
    const start = totalResult === 0 ? 0 : (page - 1) * limit + 1;
    const end = Math.min(page * limit, totalResult);

    return (
        <div ref={wrapperRef}>
            <DigiNavigationPagination
                afTotalPages={totalPages}
                afInitActivePage={page}
                afCurrentResultStart={start}
                afCurrentResultEnd={end}
                afTotalResults={totalResult}
                afResultName="annonser"
                onChange={handleChange}
                onAfOnPageChange={handleChange}
            />
        </div>
    );
};
