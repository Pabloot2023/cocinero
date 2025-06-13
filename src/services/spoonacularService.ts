import { SPOONACULAR_API_KEY, SPOONACULAR_BASE_URL } from '../config/api';

export interface SpoonacularRecipe {
  id: number;
  title: string;
  image: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
}

export interface SearchRecipesParams {
  ingredients?: string;
  number?: number;
}

const ensureHttps = (url: string) => {
  if (url.startsWith('http://')) {
    return url.replace('http://', 'https://');
  }
  return url;
};

export const getRandomRecipes = async (number: number = 2) => {
  const queryParams = new URLSearchParams({
    apiKey: SPOONACULAR_API_KEY,
    number: number.toString(),
    addRecipeInformation: 'false',
    instructionsRequired: 'false',
    fillIngredients: 'false',
  });

  const response = await fetch(
    `${SPOONACULAR_BASE_URL}/random?${queryParams.toString()}`
  );

  if (!response.ok) {
    throw new Error('Error al obtener recetas aleatorias');
  }

  const data = await response.json();
  return data.recipes.map((recipe: SpoonacularRecipe) => ({
    id: recipe.id,
    name: recipe.title,
    image: ensureHttps(recipe.image),
    matchScore: 1, // Las recetas aleatorias no tienen score de coincidencia
  }));
};

export const searchRecipes = async (params: SearchRecipesParams) => {
  const queryParams = new URLSearchParams({
    apiKey: SPOONACULAR_API_KEY,
    number: params.number?.toString() || '5',
    addRecipeInformation: 'false',
    instructionsRequired: 'false',
    fillIngredients: 'false',
  });

  if (params.ingredients) {
    queryParams.append('includeIngredients', params.ingredients);
  }

  const response = await fetch(
    `${SPOONACULAR_BASE_URL}/complexSearch?${queryParams.toString()}`
  );

  if (!response.ok) {
    throw new Error('Error al buscar recetas');
  }

  const data = await response.json();
  return data.results.map((recipe: SpoonacularRecipe) => ({
    id: recipe.id,
    name: recipe.title,
    image: ensureHttps(recipe.image),
    matchScore: recipe.usedIngredientCount / (recipe.usedIngredientCount + recipe.missedIngredientCount),
  }));
}; 