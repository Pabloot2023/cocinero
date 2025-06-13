import { useEffect, useState } from 'react';
import { getRandomRecipes, searchRecipes } from '../services/spoonacularService';

export const useRecipes = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recipes, setRecipes] = useState([]);

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
      const results = await searchRecipes({ ingredients });
      setRecipes(results);
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