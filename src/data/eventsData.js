const eventsData = [
  {
    id: 4,
    slug: "tekyerema-pa-2026",
    kind: "Hackathon",
    title: "Tɛkyerɛma Pa Hackathon 2026",
    date: "2026 · winners announced November 2026",
    venue: "University of Ghana, with MTN Ghana",
    overview:
      "The second Tɛkyerɛma Pa (“good tongue”) Hackathon, run by the lab with MTN Ghana, asked teams to build inclusive digital tools in Ghanaian languages using speech recognition and AI. 131 teams with 550 participants took part; after about two months of online training and mentoring, five teams reached the finals.",
    description: [],
    results: [
      "1st: Team Vomo, an app that helps people with disabilities, especially visually impaired users, send and withdraw mobile money (GH¢70,000)",
      "2nd: Team Code Craft (GH¢20,000)",
      "3rd: Team Kasapon (GH¢10,000)",
    ],
    sponsors: [{ sponsor: "MTN Ghana" }],
    url: "https://www.tekyeremapahackathon.com/",
    linkLabel: "Hackathon website",
  },
  {
    id: 3,
    slug: "ug-mtn-partnership",
    kind: "Partnership",
    title: "UG and MTN Ghana partner up",
    date: "2 September 2026",
    venue: "MTN Ghana Head Office, Accra",
    overview:
      "The University of Ghana and MTN Ghana signed a Memorandum of Understanding to advance digital innovation and talent development, including the Tɛkyerɛma Pa Hackathon on speech technology for Ghanaian languages and people with speech impairments.",
    description: [],
    url: "https://www.ug.edu.gh/news/ug-mtn-ghana-strengthen-partnership-advance-digital-innovation-and-talent-development",
    linkLabel: "Read the UG news story",
  },
  {
    id: 2,
    slug: "inaugural-lecture-wiafe",
    kind: "Inaugural lecture",
    title: "Prof. Isaac Wiafe’s inaugural lecture",
    date: "Thursday 2 July 2026, 5:00 pm",
    venue: "Great Hall, University of Ghana, Legon",
    overview:
      "“Why AI is Irrelevant to Ghana: Reclaiming Our Future through Human-Centred Transformation.” The lab’s director argued for a human-first approach to digital transformation, in which AI matters only when it addresses the country’s real development challenges, pointing to work already under way such as speech technology for Ghanaian languages, health chatbots and platforms for persons with disabilities.",
    description: [],
    image: `${process.env.PUBLIC_URL}/prof.jpg`,
    url: "https://www.ug.edu.gh/news/ai-must-serve-ghanas-development-rather-deepen-digital-dependence-prof-isaac-wiafe-argues",
    linkLabel: "Read the UG news story",
  },
  {
    id: 1,
    slug: "tekyerema-pa-2025",
    kind: "Hackathon",
    title: "Tɛkyerɛma Pa Hackathon 2025",
    date: "February 17-21st, 2025",
    venue: "University of Ghana",
    overview:
      "The first Tɛkyerɛma Pa Hackathon asked teams of developers, linguists and accessibility advocates to design an app in Akan for people with speech impairments, built with speech recognition or text-to-speech so they can communicate clearly.",
    description: [
      "Teams designed a working prototype that met these goals:",
      "Integration of Speech Technologies: Incorporate advanced Text-to-Speech (TTS) or Automatic Speech Recognition (ASR) systems to support Akan language communication.",
      "User-Centric Interface Design: Build an intuitive and user-friendly interface tailored to individuals with speech impairments, ensuring cultural relevance and prioritizing inclusivity and ease of use.",
      "Accessibility Standards Compliance: Address diverse accessibility needs to make the app easy to use for individuals with varying levels of impairment.",
      "Scalable Language Support: Develop a scalable solution with the potential to expand to other Ghanaian languages.",
    ],
    image: `${process.env.PUBLIC_URL}/hackathon.jpg`,
    file: "/path-to-your-dataset/dataset-file.csv",
    rules: [
      "Each team is expected to have a maximum of 5 members.",
      "Each team must include at least one female participant.",
      "All code must be written during the hackathon.",
      "Preferably, each team should include someone with any form of speech impairment",
    ],
    results: [
      "Winner: University of Environment and Sustainable Development (UESD)",
      "48 teams from 28 universities in Ghana and Kenya",
      "Over 50 hours of impaired speech data collected",
    ],
    prizes: [
      "Up to £5,000 in awards",
      "Mentorship opportunities with experts from Google and GDI Hub, University College of London",
      "A potential scholarship for an MSc in Computer Science",
    ],
    sponsors: [
      { sponsor: "GDI Hub, University College of London" },
      { image: `${process.env.PUBLIC_URL}/gdi_hub.png` },
    ],
    url: "https://hci-lab-ugspeechdata.github.io/hack-tekyeremapa/",
    linkLabel: "2025 hackathon page",
  },
 
];

export default eventsData;
