export interface regObj {
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  username?: string | null;
  email?: string | null;
  password?: string | null;
  password2?: string | null;
  gradelist?: string | null;
}

export interface RegResult {
  success: boolean;
  response: string;
}