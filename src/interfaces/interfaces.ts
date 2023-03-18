export interface RouteError {
  status?: string;
  statusText?: string;
  message?: string;
}

export interface ContactProps {
  contact: {
    first: string;
    last: string;
    avatar: string;
    twitter?: string;
    notes?: string;
    favorite: boolean;
  }
}