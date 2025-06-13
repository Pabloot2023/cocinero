export interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string;
}

export const recipes: Recipe[] = [
  {
    name: "Pasta con Salsa de Tomate",
    ingredients: ["pasta", "tomate", "cebolla", "ajo", "aceite de oliva", "sal"],
    instructions: "1. Cocinar la pasta según las instrucciones del paquete.\n2. Sofreír la cebolla y el ajo en aceite de oliva.\n3. Agregar los tomates picados y cocinar hasta que se forme una salsa.\n4. Mezclar la pasta con la salsa y servir."
  },
  {
    name: "Ensalada César",
    ingredients: ["lechuga", "pollo", "pan", "queso parmesano", "salsa césar"],
    instructions: "1. Cortar la lechuga en trozos.\n2. Cocinar el pollo y cortarlo en tiras.\n3. Tostar el pan y cortarlo en cubos.\n4. Mezclar todos los ingredientes y agregar la salsa césar."
  },
  {
    name: "Arroz con Pollo",
    ingredients: ["arroz", "pollo", "cebolla", "zanahoria", "caldo de pollo"],
    instructions: "1. Cocinar el pollo y desmenuzarlo.\n2. Sofreír la cebolla y la zanahoria.\n3. Agregar el arroz y el caldo.\n4. Cocinar hasta que el arroz esté listo."
  }
];
