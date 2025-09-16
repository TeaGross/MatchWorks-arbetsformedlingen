import { DigiLinkButton } from '@digi/arbetsformedlingen-react';
import { FunFacts } from '../components/FunFacts';
import { HeroSection } from '../components/HeroSection';
import { LinkButtonSize, LinkButtonVariation } from '@digi/arbetsformedlingen';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <DigiLinkButton
        afHref="/JobPage"
        afSize={LinkButtonSize.MEDIUM}
        afVariation={LinkButtonVariation.PRIMARY}
      >
        Sök Jobb
      </DigiLinkButton>

      <FunFacts />
    </>
  );
};
