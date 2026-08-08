export const professor = {
  name: "Dr. Atul Shankar Mani Tripathi",
  position: "Associate Professor Grade 1",
  school: "School of Electronics Engineering",
  university: "VIT-AP University",
  location: "Amaravati, Andhra Pradesh, India",
  email: "atul.tripathi@vitap.ac.in",
  office: "Information to be updated",
  intro:
    "Researcher and educator working in advanced electronics, semiconductor devices, organic/flexible electronics, low-power VLSI and related emerging electronic technologies.",
  biography: [
    "Dr. Atul Shankar Mani Tripathi serves as Associate Professor Grade 1 in the School of Electronics Engineering at VIT-AP University, Amaravati, Andhra Pradesh, India. His work spans teaching, doctoral supervision and research in emerging electronic materials and devices.",
    "His research interests centre on organic and flexible electronics, semiconductor device physics and modelling, thin-film transistors and low-power VLSI design. This work sits at the intersection of materials, device engineering and circuit-level implementation.",
    "He completed doctoral studies at Kyushu Institute of Technology, Japan, following postgraduate study at the Indian Institute of Technology (BHU), Varanasi, India, and undergraduate study at Uttar Pradesh Technical University, India.",
    "Alongside classroom teaching, he engages in laboratory-based instruction, project supervision and mentoring of research students. Further details of professional activities, editorial and reviewing service are to be updated.",
  ],
  profiles: {
    googleScholar: "",
    orcid: "",
    scopus: "",
    researcherId: "",
    researchGate: "",
    linkedin: "",
  },
} as const;

export type ProfileKey = keyof typeof professor.profiles;

export const profileLabels: Record<ProfileKey, string> = {
  googleScholar: "Google Scholar",
  orcid: "ORCID",
  scopus: "Scopus",
  researcherId: "ResearcherID",
  researchGate: "ResearchGate",
  linkedin: "LinkedIn",
};
