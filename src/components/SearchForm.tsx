import { useContext } from "react";
import type { Job } from "../models/Jobs";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import {
    FormInputSearchVariation,
    FormInputType,
} from "@digi/arbetsformedlingen";
import { getJobs } from "../services/JobService";
import { JobContext } from "../context/Jobcontext";

interface SearchFormProps {
    onSearchResult: (jobs: Job[]) => void; // callback to parent JobList
}

export const SearchForm = ({ onSearchResult }: SearchFormProps) => {
    const { query, setQuery, page, setPage, setTotalResult } =
        useContext(JobContext);

    const handleSearch = async (value: string) => {
        const q = value.trim();
        setQuery(q);
        setPage(1);
        if (!value.trim()) return;

        try {
            const data = await getJobs(1, q);
            onSearchResult(data.hits);
            setTotalResult(data.total.value); // send result back to JobList
        } catch (err) {
            console.error(err);
        }
    };

    console.log(page);

    return (
        <DigiFormInputSearch
            afLabel="Sök efter jobb eller stad"
            afVariation={FormInputSearchVariation.MEDIUM}
            afType={FormInputType.SEARCH}
            afButtonText=""
            value={query}
            onChange={(e: React.FormEvent) => {
                const target = e.target as HTMLInputElement;
                handleSearch(target.value);
            }}
        />
    );
};
