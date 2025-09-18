import { DigiLinkInternal } from '@digi/arbetsformedlingen-react';
import { JobList } from '../components/JobList';

export const JobPage = () => {
  return (
    <>
      <DigiLinkInternal afHref="/">
      ← Tillbaka till Startsidan
      </DigiLinkInternal>
      <JobList />
    </>
  );
};
