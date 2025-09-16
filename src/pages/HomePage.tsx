import { FunFacts } from '../components/FunFacts';
import { HeroSection } from '../components/HeroSection';
import { HomeJobSearch } from '../components/HomeJobSearch';
import { WhyMatchWork } from '../components/WhyMatchWork';

export const HomePage = () => {
  return (
    <>
      <HomeJobSearch/>
      <WhyMatchWork/>
      <HeroSection/>
      <FunFacts/>

    </>
  );
};
