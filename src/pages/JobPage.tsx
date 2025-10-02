import { JobList } from '../components/JobList';
import { Link } from 'react-router';

export const JobPage = () => {
  return (
    <>
      <Link to="/">
      ← Tillbaka till Startsidan
      </Link>
      <JobList />
    </>
  );
};
