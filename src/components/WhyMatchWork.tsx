import { InfoCardMultiHeadingLevel, InfoCardMultiType, TypographyVariation } from "@digi/arbetsformedlingen"
import { DigiInfoCardMulti, DigiInfoCardMultiContainer, DigiLayoutBlock, DigiTypography } from "@digi/arbetsformedlingen-react"

export const WhyMatchWork = () => {
    return (
        <DigiLayoutBlock>
            <DigiTypography afVariation={TypographyVariation.SMALL}>
                <div className="info-matchwork">
                    <h2>Varför MatchWork?</h2>
                    <p>Våra användare söker efter sitt drömjobb och vi gör allt vi kan för att hjälpa dem att hitta det.</p>
                </div>
                    <DigiInfoCardMultiContainer 
                        afHeading="Varför MatchWork?">
                        <DigiInfoCardMulti
                            afHeading="Trygghet och pålitlighet"
                            afHeadingLevel={InfoCardMultiHeadingLevel.H2}
                            afType={InfoCardMultiType.RELATED}>
                            <p>Alla jobbannonser hämtas från tillförlitliga källor så att du kan söka med förtroende.</p>
                                
                        </DigiInfoCardMulti>
                        <DigiInfoCardMulti  
                            afHeading="Med dig hela vägen"
                            afHeadingLevel={InfoCardMultiHeadingLevel.H2}
                            afType={InfoCardMultiType.RELATED}>
                            
                            <p>Från första sökningen till den där viktiga ansökan finns vi med dig på vägen.</p>
                        </DigiInfoCardMulti>

                        <DigiInfoCardMulti
                            afHeading="Framtidsfokus"
                            afHeadingLevel={InfoCardMultiHeadingLevel.H2}
                            afType={InfoCardMultiType.RELATED}
                            >
                           <p> MatchWork utvecklas ständigt för att göra ditt jobbsök ännu enklare och mer träffsäkert.</p>

                        </DigiInfoCardMulti>
                    </DigiInfoCardMultiContainer>
            </DigiTypography>
        </DigiLayoutBlock>
    )
}