# 📌 Rättningsrapport – fed24d-case-af-jobtech-group-1-1

## 🎯 Uppgiftens Krav:
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/6VsM7MHT)
# Skapa en egen Platsbanken för ert drömscenario 

Dokumentation om Arbetsförmedlingens öppna data finns på https://jobtechdev.se. All öppna data från arbetsförmedlingen och andra offentliga organisationen går även att hitta direkt på dataportal.se. 
I detta dokument ges två förslag på användningsfall som vi tror är lämpliga för studenter som vill utveckla en applikation på riktig data. All data som är öppna data får vem som helst använda utan att fråga myndigheten om lov, så ingen är begränsad till de exempel vi ger.

Läs först igenom kom-igång hjälpen 

-  [Övergripande dokumentation API:etJobSearch](https://jobtechdev.se/sv/components/jobsearch)
-  [Kom-igång guide](https://gitlab.com/arbetsformedlingen/education/education-api/-/blob/main/GETTING_STARTED.md)

## Prova att utforska datan med vår interaktiva tjänst 

Görs genom att öppna Swagger-sidan för API:et (för att enkelt testa olika endpoints i API:et och läsa dokumentation för respektive endpoint): Search job ads (jobtechdev.se) 

## Uppgift 

Använd endpoint https://jobsearch.api.jobtechdev.se/ för att använda/söka bland befintliga annonser. 
Det går även bra att använda historiska annonser om ni vill jämföra aktuella annonser med hur det har sett ut tidigare. Detta api finns här: Historical job ads (jobtechdev.se)

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

## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed24d-case-af-jobtech-group-1-1\src\context\Jobcontext.ts - no-unused-vars - 'q' is defined but never used.

## 🏆 **Betyg: G**
📌 **Motivering:** Uppgiften uppfyller G‑kraven: data hämtas strukturerat via en tjänst (fetch i services/JobService), React‑koncept används (context för delad state, routing med RouterProvider och createBrowserRouter, state/effekter), och designsystemet används konsekvent för presentation. Ni har dessutom tänkt på att inte visa AF:s logotyp och har satt en egen färgpalett.

💡 **Förbättringsförslag:**  
- Routing: Routen är definierad som "/jobPage" men ni navigerar/länkar till "/JobPage" (HomePage och Header). React Router är case‑känsligt, vilket ger 404. Välj en konsekvent lowercase path och uppdatera länkar och navigate.
- Importer från React Router: Använd "react-router-dom" för webben (Link, useNavigate, RouterProvider, createBrowserRouter). Att importera från "react-router" kan leda till fel i vissa versioner/miljöer.
- Felhantering i JobList: Ni har error‑state men sätter aldrig setError i catch. Visa användarvänligt felmeddelande och erbjud möjlighet att försöka igen.
- Sökprestanda: handleSearch triggas på varje tangenttryck och gör API‑anrop. Lägg till debounce (t.ex. 300–500 ms) eller sök på submit. Alternativt använd useDeferredValue.
- Pagination‑loading: Visa/indikera laddning när sida byts (t.ex. disable pagination och lista kort under hämtning) så att användaren får feedback.
- Typning/namngivning: I modeller finns både description och AdDescription (olika casing). Samordna fältnamn efter API:t (description.text) och ta bort oanvända/inkorrekta typer.
- React‑länkar: Använd Link för intern navigering även för "Hem" i Header (undvik full page reload med <a href="/">). Använd useLocation i stället för global location för aktiv nav‑state.
- Props till React‑wrappers: För Digi React‑komponenter ska ofta camelCase‑props användas (t.ex. afVerticalPadding istället för "af-vertical-padding"). Säkerställ att props actually mappas.
- Tillgänglighet: Ersätt alt‑texter som "Hej och hå" med beskrivande alt‑texter. Sätt aria‑current på aktiv nav‑länk via designsystemet/props eller via useLocation.
- CSS & design: Ni override:ar många interna selectors i designsystemet. Försök använda exponerade CSS‑variabler/tokens i första hand och minimera djupa selektorer för bättre robusthet. Säkerställ att inga AF‑färger/loggor läcker igenom i fler vyer/komponenter.
- Struktur/återanvändbarhet: Skapa gärna en custom hook (useJobs/usePagination) för att kapsla in fetch, query, page och totalResult. Alternativt använd React Query för cache och fel/laddningshantering.
- Bonus/Grafik: För VG/extra – lägg till en grafisk presentation (t.ex. stapeldiagram över antal annonser per region/yrke) baserat på sökresultatet.


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
