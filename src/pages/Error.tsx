import { ErrorPageStatusCodes } from '@digi/arbetsformedlingen';
import {
  DigiLinkInternal,
  DigiNotificationErrorPage,
} from '@digi/arbetsformedlingen-react';

export const Error = () => {
  return (
    <DigiNotificationErrorPage
      afHttpStatusCode={ErrorPageStatusCodes.NOT_FOUND}
      af-custom-heading="Hoppsan, något har blivit fel!"
    >
      <p slot="bodytext">Vi kan tyvärr inte hitta sidan du letar efter.</p>
      <ul slot="links">
        <li>
          <DigiLinkInternal afHref="/" af-variation="small">
            Till startsidan
          </DigiLinkInternal>
        </li>
      </ul>
    </DigiNotificationErrorPage>
  );
};
