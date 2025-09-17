import { DigiLinkButton } from '@digi/arbetsformedlingen-react';
import { FunFacts } from '../components/FunFacts';
import { HeroSection } from '../components/HeroSection';
import { WhyMatchWork } from '../components/WhyMatchWork';
import { LinkButtonSize, LinkButtonVariation } from '@digi/arbetsformedlingen';

export const HomePage = () => {
  return (
    <>

      
      <HeroSection/>
         <DigiLinkButton
        afHref="/JobPage"
        afSize={LinkButtonSize.MEDIUM}
        afVariation={LinkButtonVariation.PRIMARY}
      >
        Sök Jobb
      </DigiLinkButton>
      <WhyMatchWork/>
      
      <FunFacts/>
   
    </>
  );
};
