export type NewsItem = {
  date: string;
  category:
    | "New Publication"
    | "Conference Presentation"
    | "Research Achievement"
    | "Award"
    | "Academic Event";
  title: string;
  description: string;
  link?: string;
};

/** Add academic updates here; newest first. */
export const news: NewsItem[] = [];
