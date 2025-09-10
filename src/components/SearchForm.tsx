import {
  FormInputSearchVariation,
  FormInputType,
} from '@digi/arbetsformedlingen';
import { DigiFormInputSearch } from '@digi/arbetsformedlingen-react';

export const SearchForm = () => {
  return (
    <>
      <DigiFormInputSearch
        afLabel="Sökfält"
        afVariation={FormInputSearchVariation.MEDIUM}
        afType={FormInputType.SEARCH}
        afButtonText="Knapptext"
      ></DigiFormInputSearch>
    </>
  );
};

//Searchform ny push