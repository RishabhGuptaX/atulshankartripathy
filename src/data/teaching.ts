export type Course = {
  name: string;
  code: string;
  level: "Undergraduate" | "Postgraduate" | "Doctoral";
  semester: string;
};

/** Verified courses only. */
export const courses: Course[] = [];

export const teachingInterests: string[] = [
  "Semiconductor devices",
  "Electronic circuits and VLSI design",
  "Emerging electronic materials and devices",
];

export const academicResponsibilities: string[] = [
  "Information to be updated",
];
