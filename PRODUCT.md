# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

All four are confirmed audiences, served by one site:

- **Prospective students** who want a place in the lab for an MSc, MPhil or PhD at the University of Ghana.
- **Funders and partners** (for example Google, the GDI Hub at University College London, AT2030, UK aid) judging whether to collaborate with or fund the lab.
- **Other researchers** checking the lab's projects and publications.
- **Communities the lab serves**: people with speech impairments, expectant mothers, schools and Akan, Ewe, Ga, Dagbani and Dagaare speakers who use its tools.

## Product Purpose

The public website of the Human-Computer Interaction Lab, Department of Computer Science, University of Ghana. It shows what the lab researches, who is in it, what it has published and which events it runs. Success: a visitor understands the lab's research and goes on to explore its projects and publications (the most common action), and the right people find how to join or get in touch.

## Positioning

A University of Ghana lab building speech and language technology for Ghanaian languages (Akan, Ewe, Ga, Dagbani, Dagaare, Ikposo) and for people with non-standard speech, plus persuasive technology for health and learning. Its open Ghanaian-language dataset supported Google's Akan voice search (November 2024). It runs the Tɛkyerɛma Pa ("good tongue") hackathon with the GDI Hub, UCL.

## Operating Context

- Lab: Human-Computer Interaction Lab, Department of Computer Science Building, University of Ghana, Legon, Accra.
- Director: Prof. Isaac Wiafe (iwiafe@ug.edu.gh). Lab email: hcidcsug@gmail.com.
- Joining requires admission to the University of Ghana first.
- Related site: tekyeremapahackathon.com (the hackathon, same lab brand).

## Capabilities and Constraints

- React 18 single-page app (Create React App), plain CSS, react-router with basename `/hci-ugdcs`, deployed to GitHub Pages (`npm run deploy` publishes the build to the `gh-pages` branch).
- Content lives in `src/data/*.js` (team, projects, publications, events, research areas).
- The "Software" page has no content yet; it is not linked.

## Brand Commitments

- Name: **Human-Computer Interaction Lab** (University of Ghana, Dept. of Computer Science), as on the logo.
- Logo: the UG crest with "UG Human-Computer Interaction Lab, Dept. of Computer Science", navy with a gold rule (`public/hci-lab-logo.png`, crest alone in `public/hci-lab-crest.png`). Source: tekyeremapahackathon.com.
- The site should sit with the Tɛkyerɛma Pa hackathon site as one family (the user pointed to it as the reference for the lab's identity).

## Evidence on Hand

- Real photographs: team portraits, lab group photo (`public/lab.jpg`), Department building (`public/Dept.jpg`), hackathon image, project photos.
- Credited open-licence campus/context photos in `public/img/` (Wikimedia Commons; credits in the footer).
- 70 publication citations (13 added Nov 2026 from Crossref, arXiv, ACL Anthology and publisher pages, confirmed by the user), 6 projects, 4 events and news items, 2 faculty, 9 current researchers (updated Nov 2026; portraits in `public/team/`, most titles still to confirm).
- Several older images (`ar.png`, `vr.jpg`, `pervasive.png`, `science.png`, `llms.png`, `asr.png`, `lab_image.png`) are AI-generated illustrations; do not present them as the lab's work.
- No testimonials, metrics beyond the above, or partner quotes exist; do not invent them.
- Prof. Jamal-Deen Abdulai's "about" text in the data is a copy of Prof. Wiafe's and needs a real bio from the lab.

## Product Principles

1. Research first: projects and publications are the heart of the site and are one click from anywhere.
2. Ghanaian languages and the people they serve are the subject; show them, by name.
3. Plain, specific language a funder, a student and a community member can all read.
4. Everything shown is real: real people, real projects, credited pictures.

## Accessibility & Inclusion

The lab works on accessibility (speech impairments), so the site must meet WCAG 2.1 AA: keyboard access, visible focus, alt text, sufficient contrast, reduced-motion support.
