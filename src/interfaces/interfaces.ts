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
  [x: string]: any;
  data: IProduct[];
}
