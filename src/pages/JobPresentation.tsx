import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Job, JobDetail } from '../models/Jobs';
import { getJobById } from '../services/JobService';
import {
  DigiLayoutBlock,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { LayoutBlockVariation } from '@digi/arbetsformedlingen';

export const JobPresentation = () => {
  const { state } = useLocation() as { state?: { job?: Job } };
  const { id } = useParams();
  const [job, setJob] = useState<JobDetail | null>(
    (state?.job as JobDetail) ?? null
  );
  const [loading, setLoading] = useState(!state?.job);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!job && id) {
      (async () => {
        try {
          setLoading(true);
          const data = await getJobById(id);
          setJob(data);
        } catch {
          setError('Kunde inte hämta jobbet.');
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [id, job]);

  if (loading) return <div>Laddar…</div>;
  if (error) return <div style={{ color: 'crimson' }}>{error}</div>;
  if (!job) return <div>Jobb hittades inte.</div>;

  return (
    <>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
        <DigiTypography>
          <h2 style={{ color: '#dd387f' }}>{job.headline}</h2>
          <p>
            <strong>Arbetsgivare:</strong> {job.employer?.name}
          </p>
          <p>
            <strong>Ort:</strong> {job.workplace_address?.municipality}
          </p>
          <p>
            <strong>Region:</strong> {job.workplace_address?.region}
          </p>
          <p>
            <strong>Publicerad:</strong> {job.publication_date}
          </p>
          <p>
            <strong>Sista ansökningsdag:</strong> {job.application_deadline}
          </p>
          <p>
            <strong>Beskrivning:</strong>
          </p>
          <div
            style={{
              lineHeight: '1.5', 
              maxWidth: '70ch', 
              whiteSpace: 'pre-line', // preserves line breaks from the API
            }}
          >
            {job.description?.text ?? '—'}
          </div>
          {job.webpage_url && (
            <p style={{ marginBottom: '2rem' }}>
              <a
                href={job.webpage_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#dd387f',
                  fontWeight: 'bold',
                  marginTop: '1rem',
                  display: 'inline-block',
                }}
              >
                Läs mer / Ansök här
              </a>
            </p>
          )}
        </DigiTypography>
      </DigiLayoutBlock>
    </>
  );
};
