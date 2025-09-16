import {
  DigiHeader,
  DigiHeaderNavigation,
  DigiHeaderNavigationItem,
} from '@digi/arbetsformedlingen-react';

export const Header = () => {
  return (
    <>
      <DigiHeader afSystemName="MatchWork" afHideSystemName={false}>
        <DigiHeaderNavigation
          afCloseButtonText="Stäng"
          afCloseButtonAriaLabel="Stäng meny"
          afNavAriaLabel="Huvudmeny"
        >
          <DigiHeaderNavigationItem afCurrentPage={true}>
            <a href="/">Hem</a>
          </DigiHeaderNavigationItem>
          <DigiHeaderNavigationItem>
            <a href="/">Jobb Sidan</a>
          </DigiHeaderNavigationItem>
          <DigiHeaderNavigationItem>
            <a href="#footer">Kontakt</a>
          </DigiHeaderNavigationItem>
        </DigiHeaderNavigation>
        <a slot="header-logo" className='logo' aria-label="Match startsida" href="/"></a>
      </DigiHeader>
    </>
  );
};
