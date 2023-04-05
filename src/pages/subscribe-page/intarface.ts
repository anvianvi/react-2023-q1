export interface Person {
  id: number;
  name: string;
  surname: string;
  birthdate: string;
  gender: 'male' | 'female';
  duration: 'lessThan1:30' | '1:30to2:00' | 'moreThan2:00';
  email: string;
}
