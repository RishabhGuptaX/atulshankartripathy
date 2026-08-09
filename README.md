# Professor's Profile

Create a highly professional, premium academic portfolio and research website for:

Dr. Atul Shankar Mani Tripathi
Associate Professor Grade 1
School of Electronics Engineering
VIT-AP University
Amaravati, Andhra Pradesh, India

IMPORTANT:
This is an academic faculty/research portfolio, NOT a student portfolio,
startup landing page, SaaS website, or generic personal portfolio.

The website should look like a professionally designed faculty website
belonging to a prestigious international university.

==================================================
1. OVERALL DESIGN DIRECTION
==================================================

Design a sophisticated, elegant, modern academic website.

Visual inspiration:
- MIT faculty websites
- Stanford faculty/research pages
- Harvard academic profiles
- IEEE researcher profiles
- Premium university research laboratory websites

The design should communicate:

Academic excellence
Research credibility
Professionalism
Technical expertise
Trust
Minimalism
International academic presence

DO NOT make it look:
- flashy
- childish
- like a student portfolio
- like a startup landing page
- like a cryptocurrency/AI website
- overly futuristic
- overly animated
- full of gradients
- full of glassmorphism
- full of huge text
- filled with unnecessary cards

Use whitespace intelligently.

Use a restrained academic color palette:

Primary:
Deep Navy / Midnight Blue

Secondary:
Charcoal / Slate

Background:
Warm White / Off White

Accent:
Muted academic blue or subtle teal

Use color sparingly.

Typography should be premium and highly readable.

Suggested typography:
- Elegant serif font for major headings
- Modern sans-serif font for body text and UI

The website must be fully responsive:
- Desktop
- Laptop
- Tablet
- Mobile

==================================================
2. PROFESSOR PROFILE IMAGE
==================================================

I will upload the official profile photograph of Dr. Atul Shankar Mani
Tripathi separately.

IMPORTANT:
Use the uploaded image as the professor's official profile photograph.

Do NOT:
- generate an AI portrait
- replace the photograph
- use a stock photo
- use an avatar
- alter facial features
- apply cartoon effects
- heavily edit the image

The image should be displayed professionally.

Use:
- rounded rectangle or subtle portrait frame
- clean cropping
- high resolution
- subtle shadow
- no excessive decorative effects

The professor's photograph should appear prominently on the homepage
but should NOT dominate the entire screen.

==================================================
3. NAVIGATION
==================================================

Create a clean sticky navigation bar.

Navigation:

Home
About
Research
Publications
Teaching
Projects
Achievements
Students
Contact

Right side:

Google Scholar
ORCID
LinkedIn

Use small professional icons.

On mobile:
Convert navigation into a clean hamburger menu.

The navigation should remain simple and uncluttered.

==================================================
4. HOMEPAGE / HERO SECTION
==================================================

Create a sophisticated two-column hero section.

LEFT:

Small label:

SCHOOL OF ELECTRONICS ENGINEERING
VIT-AP UNIVERSITY

Large heading:

Dr. Atul Shankar Mani Tripathi

Below:

Associate Professor Grade 1
School of Electronics Engineering
VIT-AP University

Then a concise academic introduction:

"Researcher and educator working in advanced electronics, semiconductor
devices, organic/flexible electronics, low-power VLSI and related
emerging electronic technologies."

Do not overstate or invent research claims.

Buttons:

[ Explore Research ]

[ View Publications ]

Secondary links:

Google Scholar
ORCID
LinkedIn

RIGHT:

Display the uploaded official professor portrait.

Below the hero, add a subtle academic information strip:

Research
Publications
Academic Experience
Research Projects

Do NOT invent numerical statistics.

If verified publication/citation statistics are available, they may be
shown, but only using verified data.

==================================================
5. ABOUT SECTION
==================================================

Create a dedicated About page/section.

Heading:

About Dr. Atul Shankar Mani Tripathi

Create an elegant academic biography.

The biography should be written in a professional third-person academic
style.

Do not create exaggerated statements.

Include:

- Current academic position
- Academic background
- Research journey
- Teaching experience
- Research experience
- International research exposure
- Professional activities

Use a two-column layout:

LEFT:
Academic biography

RIGHT:
Quick academic profile

Example:

Current Position
Associate Professor Grade 1

Institution
VIT-AP University

School
School of Electronics Engineering

Location
Amaravati, Andhra Pradesh, India

Email
atul.tripathi@vitap.ac.in

Only display contact information that is appropriate for a public
academic website.

==================================================
6. EDUCATION SECTION
==================================================

Create a beautiful academic timeline.

Heading:

Education

Each entry should contain:

Degree
Institution
Country
Year
Field/Specialization if verified

Known academic information should be represented accurately.

Education information must NOT be invented.

Use a vertical timeline with subtle academic styling.

Example structure:

Doctorate / Doctor of Engineering
Kyushu Institute of Technology
Japan

M.Tech
Indian Institute of Technology (BHU)
Varanasi, India

B.Tech
Uttar Pradesh Technical University
India

If exact degree titles or dates are uncertain, do not guess.
Use clearly marked placeholder fields until verified.

==================================================
7. ACADEMIC EXPERIENCE
==================================================

Create a professional academic career timeline.

Heading:

Academic & Research Experience

Display:

Institution
Position
Duration
Location
Description

Include verified positions only.

Use a clean vertical timeline.

Emphasize international research experience where verified.

Do not fabricate dates.

==================================================
8. RESEARCH SECTION
==================================================

This should be one of the MOST IMPORTANT sections of the website.

Heading:

Research

Subheading:

Research interests focused on emerging electronic materials,
semiconductor devices, device modelling and low-power electronics.

Create elegant research-area cards.

Potential verified/appropriate research areas include:

- Organic Electronics
- Flexible Electronics
- Semiconductor Device Modelling
- Low-Power CMOS VLSI
- Organic Field-Effect Transistors
- Thin-Film Electronics
- Semiconductor Devices
- Nanoelectronics
- Emerging Electronic Devices

IMPORTANT:

Do not add research areas unless they are supported by the professor's
official profile/publications.

Each research area should have:
- Minimal icon
- Title
- 1–2 sentence description
- Optional related publications

Do NOT use generic AI-generated descriptions that make unsupported claims.

==================================================
9. FEATURED RESEARCH
==================================================

Create a section:

Featured Research

Display 3–6 important research themes/projects.

Each card:

Research title
Short description
Research area
Related publication/project
[Read More]

Use clean editorial-style cards rather than flashy UI cards.

==================================================
10. RESEARCH PROJECTS
==================================================

Create:

Research Projects

Each project should contain:

Project title
Principal investigator
Funding agency
Institution
Duration
Short description
Status

Use verified project information only.

If information is missing, create the UI structure but do not fabricate
project details.

==================================================
11. PUBLICATIONS
==================================================

This should be a major feature.

Create a dedicated Publications page.

DO NOT place all publications manually into JSX components.

Create a structured data file:

src/data/publications.ts

Structure:

{
  title: "...",
  authors: "...",
  journal: "...",
  year: 2026,
  type: "Journal",
  doi: "...",
  link: "...",
  abstract: "..."
}

Support:

Journal Articles
Conference Papers
Book Chapters
Reviews
Other scholarly publications

Features:

- Search publications
- Filter by year
- Filter by publication type
- Sort newest to oldest
- DOI button
- External publication button
- Expand/collapse abstract
- Citation-friendly layout

Publication card design:

TITLE

Authors

Journal / Conference
Year

DOI

[View Paper]
[DOI]

Use clean typography.

Do NOT display fake DOI links.

Do NOT invent publications.

Only add verified publications.

==================================================
12. PUBLICATION HIGHLIGHTS
==================================================

On the homepage, show:

Selected Publications

Display 3–5 recent/high-impact publications.

Add:

[View All Publications]

The full publication list should be accessible through the Publications
page.

==================================================
13. TEACHING
==================================================

Create a Teaching section.

Include:

Courses taught
Teaching interests
Academic responsibilities
Student mentoring

Only display verified information.

Create a clean course list.

Example:

Course Name
Course Code
Level
Semester

If exact course information isn't available, leave the data structure
ready for later entry rather than inventing courses.

==================================================
14. STUDENTS / RESEARCH GROUP
==================================================

Create a Research Group / Students section.

Separate:

PhD Scholars
Research Students
Project Students
Alumni

Each profile can include:

Name
Research area
Degree
Year
Profile link

IMPORTANT:

Do not invent student names.

If student information is not currently available, create the section
with a professional placeholder:

"Research group information will be updated soon."

==================================================
15. AWARDS & HONOURS
==================================================

Create an elegant timeline.

Heading:

Awards & Honours

Each entry:

Award
Organization
Year
Location
Description

Use only verified awards/scholarships/honours.

Make the timeline visually elegant but restrained.

==================================================
16. PROFESSIONAL MEMBERSHIPS
==================================================

Create:

Professional Memberships

Display verified organizations such as:

IEEE
Materials Research Society
Japan Society of Applied Physics

Only include memberships that are verified.

Use small professional organization badges/icons where legally
appropriate.

Do not use copyrighted logos unless appropriate.

==================================================
17. INTERNATIONAL EXPERIENCE
==================================================

Create a section highlighting international academic/research exposure.

Possible structure:

Japan
Doctoral research / education

Hong Kong
Postdoctoral research

France
Postdoctoral research

Use only verified information.

Make this visually impressive using a subtle world-map-inspired layout
or geographic timeline.

Do NOT use a giant animated globe.

==================================================
18. RESEARCH IDENTIFIERS
==================================================

Create a dedicated:

Research Profiles

Include buttons for verified profiles:

Google Scholar
ORCID
Scopus
ResearcherID
ResearchGate
LinkedIn

Each should open in a new tab.

Use actual profile URLs where available.

Do not fabricate profile URLs.

==================================================
19. NEWS / ACADEMIC UPDATES
==================================================

Create:

Latest Updates

Examples:

New Publication
Conference Presentation
Research Achievement
Award
Academic Event

Each update:

Date
Category
Title
Short description
External link

Make it easy to add future updates.

Store updates in:

src/data/news.ts

==================================================
20. CONTACT SECTION
==================================================

Create a premium Contact section.

Heading:

Get in Touch

Display:

Dr. Atul Shankar Mani Tripathi

Associate Professor Grade 1
School of Electronics Engineering
VIT-AP University

Email:
atul.tripathi@vitap.ac.in

Add:

Email button
Google Scholar
ORCID
LinkedIn

If office location is verified, display it.

Do not expose unnecessary personal information.

==================================================
21. FOOTER
==================================================

Create a sophisticated academic footer.

Include:

Dr. Atul Shankar Mani Tripathi

Associate Professor Grade 1
School of Electronics Engineering
VIT-AP University

Quick Links:
About
Research
Publications
Teaching
Contact

Research Profiles:
Google Scholar
ORCID
Scopus
ResearchGate
LinkedIn

Copyright:

© 2026 Dr. Atul Shankar Mani Tripathi
VIT-AP University

Do not use generic "Made with Lovable" branding in the visible
professional website.

==================================================
22. TECHNICAL ARCHITECTURE
==================================================

Use:

React
TypeScript
Tailwind CSS

Use reusable components.

Suggested structure:

src/
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── EducationTimeline.tsx
│   ├── ExperienceTimeline.tsx
│   ├── ResearchCard.tsx
│   ├── ResearchProjects.tsx
│   ├── PublicationCard.tsx
│   ├── PublicationFilters.tsx
│   ├── Teaching.tsx
│   ├── AwardsTimeline.tsx
│   ├── ResearchProfiles.tsx
│   ├── NewsCard.tsx
│   └── Footer.tsx
│
├── data/
│   ├── professor.ts
│   ├── education.ts
│   ├── experience.ts
│   ├── research.ts
│   ├── publications.ts
│   ├── projects.ts
│   ├── teaching.ts
│   ├── awards.ts
│   ├── students.ts
│   └── news.ts
│
├── assets/
│   └── images/
│       └── professor.jpg
│
└── pages/

Keep all content separate from UI components.

This is VERY IMPORTANT because the professor's information should be
easy to update later.

==================================================
23. CONTENT MANAGEMENT
==================================================

Do not hardcode all content directly into components.

For example:

Professor information:

src/data/professor.ts

Publications:

src/data/publications.ts

Awards:

src/data/awards.ts

Research:

src/data/research.ts

This should allow me to update the professor's information without
changing the website design.

==================================================
24. IMAGE HANDLING
==================================================

Use the uploaded professor image as:

/assets/images/professor.jpg

Use it in:

1. Homepage hero
2. About section

Do not duplicate the image excessively.

For future research/conference images, create a clean image gallery
component that can be populated later.

Images should:
- load efficiently
- have descriptive alt text
- be responsive
- maintain aspect ratio
- use lazy loading where appropriate

==================================================
25. ANIMATIONS
==================================================

Use subtle animations only.

Allowed:

- Fade in
- Slight upward reveal
- Smooth hover
- Navigation transitions
- Timeline reveal

Avoid:

- excessive parallax
- bouncing elements
- spinning elements
- flashy particle backgrounds
- animated gradients
- 3D objects
- excessive motion

The website should feel calm and scholarly.

==================================================
26. ACCESSIBILITY
==================================================

Follow accessibility best practices.

Include:

- semantic HTML
- proper heading hierarchy
- alt text
- keyboard navigation
- visible focus states
- sufficient color contrast
- accessible buttons
- accessible navigation

==================================================
27. SEO
==================================================

Optimize for academic search.

Page title:

Dr. Atul Shankar Mani Tripathi | Associate Professor | VIT-AP University

Meta description:

Official academic and research profile of Dr. Atul Shankar Mani
Tripathi, Associate Professor at the School of Electronics Engineering,
VIT-AP University.

Add appropriate:

- Open Graph metadata
- Twitter/X metadata
- canonical URL placeholder
- structured data / JSON-LD for Person
- academic affiliation

Do not include fabricated information in structured data.

==================================================
28. MOBILE DESIGN
==================================================

The mobile version must be designed intentionally.

Do not simply shrink the desktop website.

On mobile:

- sticky compact navbar
- portrait above/beside introduction
- readable typography
- publication cards optimized for small screens
- horizontally scrollable filters if needed
- properly spaced buttons
- no horizontal overflow

Test all major sections at:

360px
390px
430px
768px
1024px
1440px+

==================================================
29. PROFESSIONAL DETAILS
==================================================

Use small details that make the website look premium:

- subtle section separators
- elegant typography
- consistent spacing
- thin borders
- subtle shadows
- clean icons
- research-oriented visual language
- carefully designed hover states
- excellent alignment

Avoid excessive rounded cards.

Not every section needs to be a card.

Use editorial layouts, timelines, grids and typography to create visual
hierarchy.

==================================================
30. IMPORTANT CONTENT ACCURACY RULE
==================================================

THIS IS AN ACADEMIC WEBSITE.

NEVER invent:

- degrees
- universities
- dates
- publications
- DOI numbers
- awards
- grants
- students
- research projects
- citation numbers
- h-index
- professional memberships
- email addresses
- social profile URLs
- job positions

If information is unavailable:

Create the UI structure but leave the value empty or mark it as:

"Information to be updated"

Do NOT hallucinate academic credentials.

==================================================
31. SOURCE PRIORITY
==================================================

When adding information, prioritize sources in this order:

1. Official VIT-AP University faculty portal
2. Official university profile
3. IRINS / institutional research profile
4. ORCID
5. Google Scholar
6. Scopus
7. Official publisher pages
8. LinkedIn
9. ResearchGate

Use publisher pages/DOI records to verify publications whenever
possible.

==================================================
32. FINAL VISUAL GOAL
==================================================

The finished website should look like a professor who is:

- established
- credible
- research-focused
- internationally experienced
- academically accomplished

It should feel suitable for:

University faculty profile
Research collaboration
PhD applicants
Academic networking
Conference organizers
Research institutions
Industry collaborations

The website should look good enough that it could be shown to:

- university administration
- fellow professors
- researchers
- prospective PhD students
- international collaborators

FINAL INSTRUCTION:

Build the complete first version now.

Use realistic but clearly marked placeholders ONLY where information has
not yet been verified.

Prioritize visual quality, academic credibility, typography, spacing,
responsive design, publication usability and professional presentation.

Do not make the website look like an AI-generated template.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://atulshankartripathy.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/26024540-8427-4880-916f-8b5cc6ab393e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
