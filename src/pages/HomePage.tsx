import { DigiButton } from '@digi/arbetsformedlingen-react';
import { FunFacts } from '../components/FunFacts';
import { HeroSection } from '../components/HeroSection';
import { WhyMatchWork } from '../components/WhyMatchWork';
import {
  ButtonSize,
  ButtonVariation,
 
} from '@digi/arbetsformedlingen';
import { useNavigate } from 'react-router';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection />
      <DigiButton
        afSize={ButtonSize.MEDIUM}
        afVariation={ButtonVariation.PRIMARY}
        afFullWidth={false}
        className='btn'
        onClick={() => navigate("/JobPage")}
      >
        Sök Jobb
      </DigiButton>
      <WhyMatchWork />

      <FunFacts />
    </>
  );
};
