export type PublicationType =
  | "Journal"
  | "Conference"
  | "Book Chapter"
  | "Review"
  | "Other";

export type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  type: PublicationType;
  doi?: string;
  link?: string;
  abstract?: string;
  featured?: boolean;
};

/**
 * Verified publications only.
 * Add entries here — the Publications page, filters and homepage highlights
 * are generated automatically from this list.
 */
export const publications: Publication[] = [];

export const publicationTypes: PublicationType[] = [
  "Journal",
  "Conference",
  "Book Chapter",
  "Review",
  "Other",
];
