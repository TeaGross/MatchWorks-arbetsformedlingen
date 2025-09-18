import { LayoutColumnsElement, LayoutColumnsVariation, TypographyVariation } from "@digi/arbetsformedlingen"
import { DigiLayoutBlock, DigiLayoutColumns, DigiLayoutContainer, DigiMediaImage, DigiTypography } from "@digi/arbetsformedlingen-react"
import { useMediaQuery } from "react-responsive";

export const FunFacts  = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return <>
       <DigiLayoutBlock>
        <DigiTypography afVariation={TypographyVariation.LARGE}>
            <DigiLayoutContainer>

            <h2>MatchWorks: Upptäck karriärmöjligheter i Sverige!</h2>
            <DigiLayoutColumns 
            afElement={LayoutColumnsElement.DIV}
            afVariation={isMobile ? LayoutColumnsVariation.ONE : LayoutColumnsVariation.THREE}
            >
                <div className="fun-fact-card">
                    <DigiMediaImage
                     afUnlazy
                     afWidth="200"
                     afSrc="src/assets/sweden-icon.png"
                     afAlt="Hej och hå"></DigiMediaImage>
                    <p>Sverige har en av världens högsta sysselsättningsgrader, över 80 % av befolkningen i arbetsför ålder jobbar.</p>
                </div>
                <div className="fun-fact-card">
                    <DigiMediaImage
                     afUnlazy
                     afWidth="200"
                     afSrc="src/assets/match-logo.png"
                     afAlt="Hej och hå"></DigiMediaImage>
                    <p>Ett bra CV är som en första dejt, du får bara en chans att göra ett bra första intryck.</p>
                </div>
                <div className="fun-fact-card">
                     <DigiMediaImage
                     afUnlazy
                     afWidth="200"
                     afSrc="src/assets/recruiter-icon.png"
                     afAlt="Hej och hå"></DigiMediaImage>
                    <p>3 av 5 rekryterare granskar din LinkedIn-profil noggrant innan de faktiskt ringer upp.</p>
                </div>

            </DigiLayoutColumns>

           
            </DigiLayoutContainer>
        </DigiTypography>
        </DigiLayoutBlock> 
    </>
}