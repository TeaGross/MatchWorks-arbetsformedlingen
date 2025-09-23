# 📌 Rättningsrapport – fed24d-case-af-jobtech-group-1-1

## 🎯 Uppgiftens Krav:
# Skapa en egen Platsbanken för ert drömscenario 

Dokumentation om Arbetsförmedlingens öppna data finns på https://jobtechdev.se. All öppna data från arbetsförmedlingen och andra offentliga organisationen går även att hitta direkt på dataportal.se. 
I detta dokument ges två förslag på användningsfall som vi tror är lämpliga för studenter som vill utveckla en applikation på riktig data. All data som är öppna data får vem som helst använda utan att fråga myndigheten om lov, så ingen är begränsad till de exempel vi ger.

Läs först igenom kom-igång hjälpen 

-  [Övergripande dokumentation API:etJobSearch](https://data.arbetsformedlingen.se/data/platsannonser/)
-  [Kom-igång guide](https://gitlab.com/arbetsformedlingen/job-ads/jobsearch/jobsearch-api/-/blob/main/docs/GettingStartedJobSearchSE.md)

## Prova att utforska datan med vår interaktiva tjänst 

Görs genom att öppna Swagger-sidan för API:et (för att enkelt testa olika endpoints i API:et och läsa dokumentation för respektive endpoint): [Search job ads (jobtechdev.se)](https://jobsearch.api.jobtechdev.se/)

## Uppgift 

Använd endpoint **/search** för att söka bland befintliga annonser. 
Det går även bra att använda historiska annonser om ni vill jämföra aktuella annonser med hur det har sett ut tidigare. Detta api finns här: [Historical job ads (jobtechdev.se)](https://historical.api.jobtechdev.se/)

Om möjligt, använd en grafisk presentation av era resultat genom t.ex. stapeldiagram eller linjegrafer.

**Observera**
Er slutprodukt ska ej innehålla Arbetsförmedlingens logga eller färger. Anpassa gärna efter eget tycke och smak så att ni har en färgpalett och en god tanke bakom. 

## Betygskriterier 

### Need-to-have (G) 
- Ni har hämtat data på ett strukturerat sätt med hjälp av antingen fetch eller axios. 
- Ni har skapat en tjänst som ni använder för att hämta data. 
- Ni använder react-koncept vi har pratat om för att göra datan tillgänglig (context, state, routing et.c.). 
- Ni använder den syntax, namngivningsstandard samt skrivsätt som vi har lärt er.  
- Ni använder designsystemet för presentation. 

### Nice-to-have (Extra bonus) 
- Styled components (som drar nytta av designsystemet) 
- Grafisk presentation av datat 
- Användning av custom hook där det finns möjlighet
- Använd endpoint /complete för att lägga till autocomplete-funktion och få förslag på begrepp vid fritextsökning

## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed24d-case-af-jobtech-group-1-1\src\context\Jobcontext.ts - no-unused-vars - 'q' is defined but never used.

## 🏆 **Betyg: G**
📌 **Motivering:** Uppgiften uppfyller G-kraven: data hämtas strukturerat via en tjänst (fetch i services/JobService), React‑koncept används (Context, state, routing, useEffect), och designsystemet används för presentation. Logotypen är dold och färgerna är anpassade, vilket följer uppgiftens riktlinjer. Paginering och detaljsida för annons fungerar i koden, och grundläggande fel- och laddningshantering finns på plats.

💡 **Förbättringsförslag:**  
- Routing: Inkonsekvent versalisering i rutter/URL:er. Ni definierar path "/jobPage" men länkar/navigerar till "/JobPage" på flera ställen (Header, HomePage, JobPresentation). React Router är skiftlägeskänsligt — detta ger brutna länkar. Standardisera till en och samma casing överallt och använd Link/DigiLinkInternal konsekvent istället för mix av <a href> och Link.
- Importer: Ni importerar RouterProvider, Link, createBrowserRouter, useNavigate m.fl. från "react-router". I en webapp ska dessa komma från "react-router-dom". Byt till react-router-dom för att undvika framtida kompatibilitetsproblem.
- Error handling: I JobList sätts aldrig error i catch-blocket (ni loggar bara). Sätt setError("Kunde inte hämta jobb.") så att användaren ser felmeddelandet.
- Sökprestanda: Sök sker på varje tangentnedslag. Lägg till debounce (t.ex. 300–500 ms) och/eller sök först när användaren trycker Enter eller när längden > 2 tecken för att minska onödiga API-anrop. Alternativt använd endpointen /complete för autocomplete (nice-to-have enligt uppgiften).
- Dubbelhämtning: Vid sök uppdateras listan både via SearchForm (onSearchResult) och via useEffect i JobList när query ändras. Samla hämtlogiken i ett ställe (eller i en custom hook) för att undvika race conditions och redundant nätverkstrafik.
- Custom hook: Skapa en useJobs(query, page) som kapslar in hämtning, laddning, fel och totalResult. Det förenklar komponenterna och minskar duplicerad logik (extra bonus enligt kravspecen).
- Resurser/bilder: I FunFacts används afSrc="src/assets/...". I Vite bör du importera bilderna och använda den importerade variabeln eller lägga dem i public/ och referera med "/..." för att fungera i produktion.
- Header state: Ni använder globalt location.pathname för "current" i menyn. Använd useLocation() från react-router-dom så blir det reaktivt och testbart.
- UI/UX: Tomt knapp-label i sök (afButtonText=""). Antingen dölj knappen helt om komponenten stödjer det, eller ge begriplig label. Undvik även döda länkar som href="#" i Footer.
- Fel- och aborthantering: Lägg till AbortController vid sök/paginering för att avbryta pågående anrop när query eller sida ändras. Visa ett tydligare felmeddelande i UI när API-svar misslyckas.
- Bonusmöjligheter: 
  - Lägg till /complete för autocomplete-förslag.
  - Visualisera data (t.ex. stapeldiagram på ort/yrke över träffar) för att uppfylla den grafiska presentationen (nice-to-have).

## 👥 Gruppbidrag

| Deltagare | Antal commits | Commit % | Uppgiftskomplettering | Totalt bidrag |
| --------- | -------------- | -------- | ---------------------- | ------------- |
| SarahSu92 | 34 | 48.6% | 0.33 | 0.39 |
| TeaGross | 24 | 34.3% | 0.33 | 0.34 |
| Omar Alawi | 12 | 17.1% | 0.33 | 0.27 |


### 📊 Förklaring
- **Antal commits**: Antalet commits som personen har gjort
- **Commit %**: Procentuell andel av totala commits
- **Uppgiftskomplettering**: Poäng baserad på mappning av README-krav mot kodbidrag 
- **Totalt bidrag**: Viktad bedömning av personens totala bidrag (40% commits, 60% uppgiftskomplettering)
