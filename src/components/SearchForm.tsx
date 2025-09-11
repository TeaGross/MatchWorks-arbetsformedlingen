import { useState } from "react";
import type { Job, JobResult } from "../models/Jobs";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";


interface SearchFormProps {
  onSearchResult: (jobs: Job[]) => void; // callback to parent JobList
}

export const SearchForm = ({ onSearchResult }: SearchFormProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (value: string) => {
    setQuery(value);
    if (!value.trim()) return;

    try {
      const params = new URLSearchParams({ q: value, offset: "0", limit: "10" });
      const response = await fetch(`https://jobsearch.api.jobtechdev.se/search?${params}`);
      if (!response.ok) throw new Error(`HTTP-fel ${response.status}`);
      const data: JobResult = await response.json();
      onSearchResult(data.hits); // send data hit back to parent
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