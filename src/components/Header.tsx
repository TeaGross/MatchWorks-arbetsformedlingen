import {
  DigiHeader,
  DigiHeaderNavigation,
  DigiHeaderNavigationItem,
} from '@digi/arbetsformedlingen-react';
import { Link } from 'react-router';

export const Header = () => {

  return (
    <>
      <DigiHeader afSystemName="MatchWorks" afHideSystemName={false}>
        <DigiHeaderNavigation
          afCloseButtonText="Stäng"
          afCloseButtonAriaLabel="Stäng meny"
          afNavAriaLabel="Huvudmeny"
        >
          <DigiHeaderNavigationItem afCurrentPage={true}>
            <a href="/">Hem</a>
          </DigiHeaderNavigationItem>
          <DigiHeaderNavigationItem>
            <Link to="/JobPage">Jobb Sidan</Link>
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
