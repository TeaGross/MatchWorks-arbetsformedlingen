import { FunFacts } from '../components/FunFacts';
import { HeroSection } from '../components/HeroSection';
import { JobList } from '../components/JobList';

export const HomePage = () => {
  return (
    <>
    <HeroSection />
      <JobList />
      <FunFacts/>

    </>
  );
};
