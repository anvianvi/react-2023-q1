export interface RouteError {
  status?: string;
  statusText?: string;
  message?: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IProducts {
  data: IProduct[];
}

export interface Person {
  id: number;
  name: string;
  surname: string;
  birthdate: string;
  gender: 'male' | 'female';
  duration: 'lessThan1:30' | '1:30to2:00' | 'moreThan2:00';
  email: string;
}

export type Photo = {
  id: number;
  alt_description: string;
  width: number;
  height: number;
  urls: { full: string; large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    first_name?: string;
    last_name?: string;
    bio?: string;
    total_photos?: number;
    username?: string;
    name?: string;
    portfolio_url?: string;
  };
};

export interface ApiResponse {
  response?: {
    results: Photo[];
  };
  errors?: string[];
}
