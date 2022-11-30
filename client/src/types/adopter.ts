export type Adopter = {
  description: string;
  email: string;
  password?: string;
  first_name: string;
  last_name: string;
  age: number;
  house_type: string;
  has_pets: boolean;
  has_children: boolean;
  time_at_home: number;
  latitude: number;
  longitude: number;
  address: string;
  id?: string;
};
