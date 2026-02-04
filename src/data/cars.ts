export interface Car {
  id: number;
  name: string;
  brand: string;
  type: string;
  price: number;
  image: string;
  seats: number;
  transmission: string;
  fuel: string;
  year: number;
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Mercedes C-Class",
    brand: "Mercedes-Benz",
    type: "Luksoz",
    price: 85,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
    seats: 5,
    transmission: "Automatik",
    fuel: "Benzinë",
    year: 2023,
  },
  {
    id: 2,
    name: "BMW 3 Series",
    brand: "BMW",
    type: "Luksoz",
    price: 80,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
    seats: 5,
    transmission: "Automatik",
    fuel: "Benzinë",
    year: 2023,
  },
  {
    id: 3,
    name: "Volkswagen Golf",
    brand: "Volkswagen",
    type: "Kompakt",
    price: 45,
    image: "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=600&h=400&fit=crop",
    seats: 5,
    transmission: "Manuale",
    fuel: "Naftë",
    year: 2022,
  },
  {
    id: 4,
    name: "Audi A4",
    brand: "Audi",
    type: "Luksoz",
    price: 75,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop",
    seats: 5,
    transmission: "Automatik",
    fuel: "Benzinë",
    year: 2023,
  },
  {
    id: 5,
    name: "Toyota Corolla",
    brand: "Toyota",
    type: "Ekonomik",
    price: 35,
    image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=600&h=400&fit=crop",
    seats: 5,
    transmission: "Automatik",
    fuel: "Hibrid",
    year: 2022,
  },
  {
    id: 6,
    name: "Ford Focus",
    brand: "Ford",
    type: "Kompakt",
    price: 40,
    image: "https://images.unsplash.com/photo-1551830820-330a71b99659?w=600&h=400&fit=crop",
    seats: 5,
    transmission: "Manuale",
    fuel: "Benzinë",
    year: 2022,
  },
  {
    id: 7,
    name: "Range Rover Sport",
    brand: "Land Rover",
    type: "SUV",
    price: 120,
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop",
    seats: 5,
    transmission: "Automatik",
    fuel: "Naftë",
    year: 2023,
  },
  {
    id: 8,
    name: "Hyundai Tucson",
    brand: "Hyundai",
    type: "SUV",
    price: 55,
    image: "https://images.unsplash.com/photo-1633695028498-3ee8e8f8e4f3?w=600&h=400&fit=crop",
    seats: 5,
    transmission: "Automatik",
    fuel: "Hibrid",
    year: 2023,
  },
];

export const carTypes = ["Të gjitha", "Ekonomik", "Kompakt", "Luksoz", "SUV"];
