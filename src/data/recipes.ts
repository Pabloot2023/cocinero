export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  image: string;
  matchScore: number;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Bife con ensalada",
    ingredients: ["carne", "sal", "aceite girasol"],
    image: "https://source.unsplash.com/featured/?steak",
    matchScore: 1,
  },
  {
    id: 2,
    name: "Papas al horno",
    ingredients: ["papa", "aceite girasol", "sal"],
    image: "https://source.unsplash.com/featured/?potatoes",
    matchScore: 1,
  },
];
