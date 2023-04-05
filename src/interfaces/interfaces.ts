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
