import {
  LayoutBlockVariation,
  QuoteImagePosition,
  QuoteType,
  QuoteVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiLayoutBlock,
  DigiQuote,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';

export const HeroSection = () => {
  return (
    <>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
        <DigiTypography>
          <h2>Matcha ditt Drömjobb här hos oss!</h2>
        </DigiTypography>
      </DigiLayoutBlock>
      <div className='citat'>
        <DigiQuote
          afType={QuoteType.DEFAULT}
          afVariation={QuoteVariation.SECONDARY}
          afImagePosition={QuoteImagePosition.LEFT}
          afImageSrc="public/Profil-Business-Manager.jpg"
          afImageAlt="Leende ung kvinna på kontoret"
          afQuoteAuthorName="Sofia Larsson"
          afQuoteAuthorTitle="Frontend Developer på BrightTech"
        >
          Tack vare den här sidan hittade jag mitt drömjobb som webbutvecklare!
          Ansökningsprocessen var enkel och jag kände mig stöttad hela vägen. Nu
          får jag arbeta med kreativa projekt varje dag och utvecklas i en miljö
          som verkligen inspirerar mig.
        </DigiQuote>
      </div>
    </>
  );
};
