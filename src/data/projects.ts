export type Project = {
  title: string;
  principalInvestigator: string;
  fundingAgency: string;
  institution: string;
  duration: string;
  description: string;
  status: "Ongoing" | "Completed" | "To be updated";
};

/** Verified research projects only. */
export const projects: Project[] = [];
