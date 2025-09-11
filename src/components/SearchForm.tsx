import { useState } from "react";
import type { Job } from "../models/Jobs";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";
import { searchJobs } from "../services/JobService";


interface SearchFormProps {
  onSearchResult: (jobs: Job[]) => void; // callback to parent JobList
}

export const SearchForm = ({ onSearchResult }: SearchFormProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (value: string) => {
    setQuery(value);
    if (!value.trim()) return;

     try {
      const data = await searchJobs(value);
      onSearchResult(data.hits); // send result back to JobList
    } catch (err) {
      console.error(err);
    }
  };

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