import { TypographyVariation } from "@digi/arbetsformedlingen"
import { DigiLayoutBlock, DigiTypography } from "@digi/arbetsformedlingen-react"
import { SearchForm } from "./SearchForm"

export const HomeJobSearch = () => {
const handleSearch = () => {
    
}

    return <>
    <DigiLayoutBlock>
        <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h2>Sök ditt drömjobb direkt här!</h2>
        <SearchForm onSearchResult={handleSearch}/>
        </DigiTypography>
    </DigiLayoutBlock>
    </>
}