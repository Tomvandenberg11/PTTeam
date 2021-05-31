# Intern Match

Met Intern Match kan jij als student of als Bedrijf, elkaar op een gemakkelijke manier vinden 🚀! Je hebt het vast wel meegemaakt, je stuurt naar tientallen bedrijven een sollicitatiebrief waarop de meeste antwoorden "...helaas hebben wij geen plek meer..." of het bedrijf reageert helemaal niet 😡.

Met Intern Match kan je als student gemakkelijk stagebedrijven vinden in jouw branche. je kan een interessant bedrijf liken. Als het bedrijf jou ook hebt geliked, zijn jullie een match geworden. Nadat je een match bent kan je met elkaar chatten met als doel een contract te krijgen 🤝.

## Hoe kan je het installeren

1. Clone deze repositoryin je terminal:
   `git clone https://github.com/wongsrila/intern-match.git`

2. navigeer naar je nieuwe folder: `cd intern-match`

3. Installeer de Node Modules: `npm install`

4. Maak een Mongodb Atlas account aan. Hoe je dit moet doen kan je vinden op [docs.atlas.mongodb.com] (https://docs.atlas.mongodb.com/tutorial/create-atlas-account/)

5. Maak een nieuwe cluster aan. Vervolgens klik je op "connect". Je kiest dan "Connect your application". Je moet dan de `connection string` Kopiëren.

6. Maak een `.env` bestand aan in de root van je intern-match folder. Plak daarin het volgende:

```.env

PORT=3000
MONGODB_URI=<connection string>

```
