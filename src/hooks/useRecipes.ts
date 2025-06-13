import { useEffect, useState } from 'react';
import { Recipe } from '../data/recipes';
import { getRandomRecipes, searchRecipes } from '../services/spoonacularService';

export const useRecipes = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const calculateMatchScore = (recipeIngredients: string[], searchIngredients: string[]): number => {
    const searchSet = new Set(searchIngredients.map(i => i.toLowerCase()));
    const recipeSet = new Set(recipeIngredients.map(i => i.toLowerCase()));
    
    let matches = 0;
    searchSet.forEach(ingredient => {
      if (recipeSet.has(ingredient)) {
        matches++;
      }
    });
    
    return matches / searchIngredients.length;
  };

  useEffect(() => {
    loadRandomRecipes();
  }, []);

  const loadRandomRecipes = async () => {
    try {
      setLoading(true);
      setError(null);
      const results = await getRandomRecipes(2);
      setRecipes(results);
    } catch (err) {
      setError('Error al cargar recetas aleatorias. Por favor, intenta de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const searchRecipesByIngredients = async (ingredients: string) => {
    try {
      setLoading(true);
      setError(null);
      const searchIngredients = ingredients.split(',').map(i => i.trim());
      const results = await searchRecipes({ ingredients });
      
      // Calcular matchScore para cada receta
      const recipesWithScore = results.map((recipe: Recipe) => ({
        ...recipe,
        matchScore: calculateMatchScore(recipe.ingredients, searchIngredients)
      }));
      
      setRecipes(recipesWithScore);
    } catch (err) {
      setError('Error al buscar recetas. Por favor, intenta de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    recipes,
    loading,
    error,
    searchRecipesByIngredients,
    loadRandomRecipes,
  };
}; 