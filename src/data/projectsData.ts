export type Project = {
    title: string
    description: string
    image?: string
    stack: string[]
    github?: string
    live?: string
    role: string
    date: string
    category?: string
    link?: string
  }
  
  export const projectsData: Project[] = [
    {
      category: 'App',
      title: 'Finanstid App',
      description:'Nyhetsapp utvecklad för Finanstid Media AB med React Native. Innehåller pushnotiser, sökfunktion och kontaktformulär. Appen är i slutfasen och lanseras snart i Google Play',
      image: '/images/finanstid_1.png',
      stack: ['React Native', 'OneSignal', 'WordPress API','TypeScript','Rule.io'],
      github: 'https://github.com/dittkonto/finanstid-app',
      live: '',
      role: 'LIA 2 / Huvudutvecklare',
      date: 'Maj 2025- nu',
    },
    {
      category: 'App',
      title: 'World Meditations',
      description: 'Meditationsapp med integrerad ljudspelare. Jag bidrog till en vidareutvecklad version av appen där jag implementerade navigeringsknappar för föregående/nästa spår, ersatte hårdkodad innehåll med dynamisk data från Firebase, samt testade stöd för nedladdning och uppspelning av ljud offline.',
      image: '/images/w_meditations.png',
      stack: ['React Native', 'Firebase', 'Express.js', 'TypeScript'],
      github: 'https://github.com/dittkonto/world-meditations',
      live: '',
      link:'https://play.google.com/store/apps/details?id=com.worldmeditation',
      role: 'LIA 1 / Medutvecklare',
      date: 'September-November 2024',
    },
    {
      category: 'Webb',
      title: 'CleanPFAS',
      description: 'The PFAS Information Map är en webbaserad applikation utvecklad för Linespotting AB, i samarbete med 22 svenska länsstyrelser. Applikationen visualiserar miljödata genom en interaktiv Sverigekarta, där användaren kan zooma in på specifika kommuner för att se aggregerad PFAS-information. Målet är att ge länsstyrelser möjlighet att logga in, lägga till och uppdatera data om förekomst av PFAS (per- och polyfluorerade alkylsubstanser). Projektet syftar till att öka tillgänglighet, transparens och förståelse för miljögifter i hela landet',
      image: '/images/cleanpfas.png',
      stack: ['React', 'Firebase', 'Express.js', 'TypeScript','Cypress'],
      github: 'https://github.com/2102kh/pfas-map.git',
      live: '',
      link:'https://sweden-pfas-data.netlify.app/',
      role: 'Examensprojekt',
      date: 'December 2024',
    },
  ]
  