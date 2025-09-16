import { DigiHeader } from "@digi/arbetsformedlingen-react"

export const Header = () => {
    return <>
    <DigiHeader 
    afSystemName="MatchWork"
    afHideSystemName= {false}
    >
    <a slot="header-logo" aria-label="Match startsida" href="/"></a>
    
    </DigiHeader>
    </>

}