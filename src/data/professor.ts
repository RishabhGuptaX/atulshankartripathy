export const professor = {
  name: "Dr. Atul Shankar Mani Tripathi",
  position: "Associate Professor Grade 1",
  school: "School of Electronics Engineering",
  university: "VIT-AP University",
  location: "Amaravati, Andhra Pradesh, India",
  email: "atul.tripathi@vitap.ac.in",
  office: "Information to be updated",
  intro:
    "Dr. Atul Shankar Mani Tripathi is an academic researcher and educator working in the areas of organic and flexible electronics, semiconductor device modelling, low-power VLSI and emerging electronic devices.",
  biography: [
    "Dr. Atul Shankar Mani Tripathi serves as Associate Professor Grade 1 in the School of Electronics Engineering at VIT-AP University, Amaravati, Andhra Pradesh, India. His work spans teaching, doctoral supervision and research in emerging electronic materials and devices.",
    "His research interests centre on organic and flexible electronics, semiconductor device physics and modelling, thin-film transistors and low-power VLSI design. This work sits at the intersection of materials, device engineering and circuit-level implementation.",
    "He completed doctoral studies at Kyushu Institute of Technology, Japan, following postgraduate study at the Indian Institute of Technology (BHU), Varanasi, India, and undergraduate study at Uttar Pradesh Technical University, India.",
    "Alongside classroom teaching, he engages in laboratory-based instruction, project supervision and mentoring of research students. Further details of professional activities, editorial and reviewing service are to be updated.",
  ],
  profiles: {
  googleScholar: "https://scholar.google.com/citations?user=8lC2gSAAAAAJ",
  orcid: "https://orcid.org/0000-0003-2586-0421",
  scopus: "https://www.scopus.com/authid/detail.uri?authorId=57196718716",
  researcherId: "https://www.webofscience.com/wos/author/record/HTM-2273-2023",
  researchGate: "https://www.researchgate.net/profile/Atul-Tripathi-4",
  linkedin: "https://www.linkedin.com/in/dr-atul-s-m-tripathi-283aa652",
  irins: "https://vitap.irins.org/profile/301670",
} as Record<ProfileKey, string>,
} as const;

export type ProfileKey =
  | "googleScholar"
  | "orcid"
  | "scopus"
  | "researcherId"
  | "researchGate"
  | "linkedin"
  | "irins";

export const profileOrder: ProfileKey[] = [
  "googleScholar",
  "orcid",
  "scopus",
  "researcherId",
  "researchGate",
  "linkedin",
  "irins",
];

export const profileLabels: Record<ProfileKey, string> = {
  googleScholar: "Google Scholar",
  orcid: "ORCID",
  scopus: "Scopus",
  researcherId: "ResearcherID",
  researchGate: "ResearchGate",
  linkedin: "LinkedIn",
  irins: "VIT-AP IRINS",
};

export const profileMeta: Record<ProfileKey, string> = {
  googleScholar: "Publications & citations",
  orcid: "Persistent researcher identifier",
  scopus: "Indexed author record",
  researcherId: "Web of Science author profile",
  researchGate: "Preprints & full texts",
  linkedin: "Professional network",
  irins: "Institutional research profile",
};
