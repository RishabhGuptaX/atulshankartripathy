export type Award = {
  title: string;
  organization: string;
  year: string;
  location: string;
  description: string;
};

/** Verified awards and honours only. */
export const awards: Award[] = [];

export type Membership = {
  organization: string;
  detail: string;
};

/** Verified professional memberships only. */
export const memberships: Membership[] = [];
