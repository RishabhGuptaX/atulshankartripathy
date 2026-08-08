export type ExperienceEntry = {
  institution: string;
  position: string;
  duration: string;
  location: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    institution: "VIT-AP University",
    position: "Associate Professor Grade 1",
    duration: "Information to be updated",
    location: "Amaravati, Andhra Pradesh, India",
    description:
      "Teaching, research and student mentoring in the School of Electronics Engineering.",
  },
];

export type InternationalEntry = {
  country: string;
  nature: string;
  detail: string;
};

export const international: InternationalEntry[] = [
  {
    country: "Japan",
    nature: "Doctoral research and education",
    detail: "Kyushu Institute of Technology",
  },
  {
    country: "Hong Kong",
    nature: "Postdoctoral research",
    detail: "Institution and duration to be updated",
  },
  {
    country: "France",
    nature: "Postdoctoral research",
    detail: "Institution and duration to be updated",
  },
];
