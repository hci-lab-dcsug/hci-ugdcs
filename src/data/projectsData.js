const projectsData = [
  {
    title:
      "Ɔbaa Panin: Pre-and Postnatal Care Chatbot for Akan-Speaking Communities ",
    timeline: "01/2025 - 06/2026",
    description:
      " This project seeks to provide a culturally relevant chatbot, Ɔbaa Panin, to provide maternal health support in the Akan language to pregnant and expectant mothers. By integrating text-based conversational agents with female voice-based interfaces, this project addresses barriers to healthcare access, including low literacy levels and limited maternal health knowledge, particularly in rural areas. The chatbot will leverage resources from the UGSpeechData Project to offer personalised guidance and promote maternal health literacy, adherence to healthcare practices, and informed decision-making. We will evaluate its usability, cultural relevance, and impact on healthcare utilisation, while identifying challenges to adoption. This will inform the scalability of linguistically appropriate technological solutions for maternal health support in low-resource settings",
    image: `${process.env.PUBLIC_URL}/maternal-healthcare.jpg`,
    status: "current",
  },
  {
    title: "Automatic Profane and Vulgar Detection in Akan Language",
    timeline: "11/2024 - 10/2025 ",
    description:
      "This project seeks to develop a computational model to identify and filter profane and vulgar expressions in Akan. It seeks to address the growing need for content moderation tailored to local languages and cultural norms, and will enhance digital communication and entertainment in Akan. It leverages Natural Language Processing (NLP) and machine learning techniques to create a culturally sensitive annotated dataset of Akan text and audio. A classifier shall be trained to identify inappropriate content to facilitate real-time content moderation that can be integrated into social media platforms to detect and block profane language in posts, comments, and messages. This will foster safer and more respectful online interaction among Akan-speaking users.  ",
    image: `${process.env.PUBLIC_URL}`,
    status: "current"
  },
  {
    title: "ASR Models for Non-Standard Speech in Ghanaian Languages",
    timeline: "07/2024 - 12/2025",
    description:
      "The  project seek to develop Automatic Speech Recognition (ASR) systems that address nonstandard speech variations in Akan, Ewe, Ga, Dagbani, and Dagaare for impairments such as stammering, cleft-related speech challenges, post-stroke aphasia, and speech affected by cerebral palsy. By accommodating these variations along with dialects, accents, and informal speech patterns, the project will create inclusive models that enhance the accessibility and usability of AI tools. For instance, individuals with post-stroke speech impairments can use voice-enabled digital tools for communication, whereas people with cleft-related speech difficulties can access tailored educational resources in their native language. This study aims to enhance accessibility and inclusivity in language technology, reduce communication barriers, promote independence, and provide equitable access to technology for individuals with diverse speech needs in Ghanaian communities. ",
    image: `${process.env.PUBLIC_URL}/asr.png`,
    status: "current"
  },

  {
    title: "TTS Machine Learning Models for African Languages",
    timeline: "01/2024 - 05/2025",
    description:
      "The project focuses on creating and optimising scripts for training Text-to-Speech (TTS) machine learning models tailored to African languages, specifically Akan, Ewe in Ghana, and Baoulé in Abidjan. This project seeks to develop natural language communication tools by improving the quality and fluency of speech synthesis in these languages. This work will contribute to effective voiceenabled technologies for some West African speakers and enhance accessibility and usability in various applications such as voice assistants, language learning platforms, and digital content creation.",
    image: `${process.env.PUBLIC_URL}/`,
    status: "current"
  },
  {
    title: "Dataset for Neural Machine Translation in Ghanaian Language",
    timeline: "02/2023 - 02/2024",
    description:
      "The project involved the creation of parallel datasets of transcribed audio and text data for Neural Machine Translation in five Ghanaian languages: Akan, Ewe, Ga, Dagbani, and Ikposo. The dataset created for this project was made open source to enable others to use and build upon it. This open-source dataset played a crucial role in supporting Google’s development and release of the Akan voice search feature in November 2024. By making the dataset publicly available, the project promotes inclusivity and supports the advancement of voice-enabled technologies for local languages in various sectors, such as education, governance, and business. ",
    image: `${process.env.PUBLIC_URL}/`,
    status: "past"
  },

  {
    title: "Virtual Reality for Tertiary Education",
    timeline: "01/2022 - 12/2024",
    description:
      "The  project investigated how persuasive software features in Behaviour Change Support Systems (BCSS) and immersive Virtual Reality (VR) learning environments can improve learner compliance and enhance students' learning satisfaction. The project explored how persuasive features, such as unobtrusiveness, design aesthetics, primary task support, and perceived persuasiveness in VR learning environments, contribute to student engagement, fostering a more immersive and effective educational experience. The findings demonstrated the importance of tailoring these features to meet the distinct needs of users at different stages of engagement and that VR educational tools that adapt to users' evolving needs enhance compliance, engagement, and learning satisfaction.",
    image: `${process.env.PUBLIC_URL}/vr.jpg`,
    status: "past"
  },
];

export default projectsData;
