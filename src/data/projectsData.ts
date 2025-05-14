export type Project = {
    title: string
    description: string
    image?: string | string[]
    stack: string[]
    github?: string
    live?: string
    role: string
    date: string
    category?: string
    link?: string
    privateRepo?: boolean 
    note?: string
  }
  
  export const projectsData: Project[] = [
    {
  category: 'App',
  title: 'Finanstid App',
  description: 'Fullt utvecklad nyhetsapp för Finanstid AB. Byggd från grunden av mig med React Native. Innehåller sök, pushnotiser och formulär. Sluttestas nu inför publicering på Google Play och App Store. Projektet utvecklades och testades i Android Studio och Xcode.',
  image: ['/images/finanstid_1.png','/images/finanstid_2.png'],
  stack: ['React Native', 'OneSignal', 'WordPress API', 'TypeScript', 'Rule.io', 'Firebase'],
  github: 'https://github.com/2102kh', 
  live: '',
  link: '',
  privateRepo: true, 
  role: 'Huvudutvecklare',
  date: 'Januari 2025 - nu',
},

    {
      category: 'App',
      title: 'World Meditations',
      description: 'Meditationsapp med integrerad ljudspelare. Jag bidrog till en vidareutvecklad version av appen där jag implementerade navigeringsknappar för föregående/nästa spår, ersatte hårdkodad innehåll med dynamisk data från Firebase, samt testade stöd för nedladdning och uppspelning av ljud offline.Projektet utvecklades och testades i Android Studio.',
      image: ['/images/w_meditations.png', '/images/w_meditations_1.png'],
      stack: ['React Native', 'TypeScript', 'Node.js', 'Firebase', 'Express.js', ],
      github: 'https://github.com/2102kh',
      live: '',
      link:'https://play.google.com/store/apps/details?id=com.worldmeditation',
      privateRepo: true,
      role: 'LIA 1 / Medutvecklare',
      date: 'September-November 2024',
    },
   {
  category: 'Webb',
  title: 'AI Portfolio',
  description: 'Mitt första AI-drivna portfolio-projekt, där jag experimenterade med GPT, röstsyntes och 3D-animation. Applikationen är responsiv och byggd med Next.js och React Three Fiber, och innehåller en interaktiv 3D-avatar som presenterar mina projekt, svarar på frågor via GPT och pratar med hjälp av Google TTS. Projektet fokuserar på AI-integration, animation och användarupplevelse.',
  image: '/images/ai-portfolio_1.png',
  stack: ['Next.js', 'React', 'Three.js', 'React Three Fiber', 'OpenAI API', 'Tailwind CSS', 'Blender', 'Google TTS (Poly)', 'Ready Player Me'],
  github: 'https://github.com/2102kh/my-ai-portfolio',
  live: 'https://my-ai-portfolio-six.vercel.app/',
  link: 'https://my-ai-portfolio-six.vercel.app/',
  role: 'Eget projekt',
  date: 'Maj 2025',
},
    {
      category: 'Webb',
      title: 'CleanPFAS',
      description: 'The PFAS Information Map är en webbaserad applikation utvecklad för Linespotting AB, i samarbete med 22 svenska länsstyrelser. Applikationen visualiserar miljödata genom en interaktiv Sverigekarta, där användaren kan zooma in på specifika kommuner för att se aggregerad PFAS-information. Målet är att ge länsstyrelser möjlighet att logga in, lägga till och uppdatera data om förekomst av PFAS (per- och polyfluorerade alkylsubstanser). Projektet syftar till att öka tillgänglighet, transparens och förståelse för miljögifter i hela landet',
      image: '/images/cleanpfas_1.png',
      stack: ['React', 'TypeScript','SASS','Firebase', 'Express.js','Cypress'],
      github: 'https://github.com/2102kh/pfas-map.git',
      live: '',
      link:'https://sweden-pfas-data.netlify.app/',
      role: 'Examensprojekt',
      date: 'December 2024',
    },
    {
  category: 'Webb',
  title: 'The Zoo',
  description: 'Mitt första skolprojekt där jag använde React för att utveckla en interaktiv och dynamisk applikation med möjlighet att hämta data från ett API. Syftet med projektet var att skapa ett djurparksystem där användaren enkelt kunde hålla koll på när djuren senast matades och få en tydlig översikt över tiden som passerat sedan deras senaste måltid.',
  image: '/images/theZoo_1.png', 
  stack: ['React', 'JavaScript', 'SASS', 'API'],
  github: 'https://github.com/Medieinstitutet/react-the-zoo-2102kh',
  link: 'https://thezoo-2102-react.netlify.app/',
  role: 'Skolprojekt',
  date: 'September 2024',
},
{
  category: 'Webb',
  title: 'Webbshop',
  description: 'Grupprojekt där vi byggde en komplett webbshop med produktkategorier, varukorg, responsiv design och beställningsflöde. Jag ansvarade för produktlistning, filtrering och mobilanpassning. OBS:Webbshopen är inte responsiv.',
  image: '/images/webbshop_1.png',
  stack: ['JavaScript', 'HTML', 'SASS'],
  github: 'https://github.com/2102kh/webbshop-grupp',
  link: 'https://apexheaven.netlify.app/',
  role: 'Grupprojekt (skola)',
  date: 'Oktober 2023',
},
{
  category: 'Webb',
  title: 'Quiz App',
  description: 'En responsiv quizapplikation där användaren kan testa sina kunskaper inom olika ämnen. Designad för att vara mobilvänlig med tydlig UI och dynamiska frågekategorier.',
  image: '/images/quiz1.png',
  stack: ['HTML', 'CSS', 'JavaScript'],
  github: 'https://github.com/2102kh/quiz-app',
  link: 'https://simplequiz-01.netlify.app/',
  role: 'Eget projekt',
  date: 'Maj 2024',
}
  ]
  