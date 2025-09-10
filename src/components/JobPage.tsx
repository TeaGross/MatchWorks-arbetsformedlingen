import { useEffect, useState } from 'react';
import { getJobs } from '../services/JobService';
import type { Job, JobResult } from '../models/Jobs';
import { Link } from 'react-router-dom';
import {
  FormInputSearchVariation,
  FormInputType,
} from '@digi/arbetsformedlingen';
import { DigiFormInputSearch } from '@digi/arbetsformedlingen-react';

export const JobPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initial load
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result: JobResult = await getJobs();
        setJobs(result.hits);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Kunde inte ladda jobb');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handleSearch = async (value?: string) => {
    const searchTerm = value ?? query; // if there is no value return query value
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        q: searchTerm,
        offset: '0',
        limit: '10',
      });

      const response = await fetch(
        `https://jobsearch.api.jobtechdev.se/search?${params.toString()}`
      );

      if (!response.ok) throw new Error(`HTTP-fel ${response.status}`);

      const data: JobResult = await response.json();
      setJobs(data.hits); // Update Job list
    } catch (err) {
      console.error(err);
      setError('Kunde inte hämta sökresultat');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Search field */}
      <DigiFormInputSearch
        afLabel="Sök efter jobb eller stad"
        afVariation={FormInputSearchVariation.MEDIUM}
        afType={FormInputType.SEARCH}
        afButtonText=""
        value={query}
        onChange={(e: React.FormEvent) => {
          const target = e.target as HTMLInputElement;
          const value = target.value;
          setQuery(value);
          handleSearch(value);
        }}
      />

      {/* Status */}
      {loading && <div>Laddar…</div>}
      {error && <div style={{ color: 'crimson' }}>{error}</div>}
      {!loading && jobs.length === 0 && <div>Inga jobb hittades.</div>}

      {/* Job list */}
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>
            <Link to={`/job/${job.id}`} state={{ job }}>
              {job.headline}
            </Link>
          </h3>
          <p>{job.employer?.name}</p>
          <p>{job.workplace_address?.municipality}</p>
        </div>
      ))}
    </div>
  );
};
