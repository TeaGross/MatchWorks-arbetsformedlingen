import { FooterVariation, FooterCardVariation } from "@digi/arbetsformedlingen";
import { DigiFooter, DigiFooterCard, DigiIconEnvelope } from "@digi/arbetsformedlingen-react";



export const Footer = () => {
  return (
    <>
  
<DigiFooter afVariation={FooterVariation.SMALL}>
  <div slot="content-top">
    <div>
      <DigiFooterCard afType={FooterCardVariation.ICON}>
        <ul>
          <li>
            <a href="#">
              <DigiIconEnvelope></DigiIconEnvelope>
              Mejla till oss
            </a>
          </li>
            <li>
            <a href="#">
              
              Adress: 
              Adressgatan 25 <br />
              000 00 Stockholm
            </a>
          </li>
        </ul>
      </DigiFooterCard>
	  </div>

    <div>
      <DigiFooterCard afType={FooterCardVariation.BORDER}>
        <a href="#">Kontakta oss</a>
        <p>Telefon: 0771-60 0001 <br/> Öppettider: Vardagar 08:00-16:30</p>
      </DigiFooterCard>
    </div>
  </div>
  <div slot="content-bottom-left">
 
	</div>
	<div slot="content-bottom-right">
		<p>Följ oss på</p>
		<a href="#">Facebook</a>
		<a href="#">Youtube</a>
		<a href="#">Linkedin</a>
		<a href="#">Instagram</a>
	</div>
</DigiFooter>

    </>
  );
};

//Searchform ny push