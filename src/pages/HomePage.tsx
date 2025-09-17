import { DigiLinkButton } from '@digi/arbetsformedlingen-react';
import { FunFacts } from '../components/FunFacts';
import { HeroSection } from '../components/HeroSection';
import { HomeJobSearch } from '../components/HomeJobSearch';
import { WhyMatchWork } from '../components/WhyMatchWork';
import { LinkButtonSize, LinkButtonVariation } from '@digi/arbetsformedlingen';

export const HomePage = () => {
  return (
    <>

      <HomeJobSearch/>
      <WhyMatchWork/>
      <HeroSection/>
      <FunFacts/>
      <DigiLinkButton
        afHref="/JobPage"
        afSize={LinkButtonSize.MEDIUM}
        afVariation={LinkButtonVariation.PRIMARY}
      >
        Sök Jobb
      </DigiLinkButton>
    </>
  );
};
