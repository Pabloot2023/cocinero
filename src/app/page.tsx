"use client";
import IngredientInput from "@/components/IngredientInput";
import RecipeList from "@/components/RecipeList";
import ThemeToggle from "@/components/ThemeToggle";
import { recipes as allRecipes } from "@/data/recipes";
import { useState } from "react";

export default function HomePage() {
  const [results, setResults] = useState(allRecipes);

  const handleSearch = (ingredients: string[]) => {
    const filtered = allRecipes.filter((recipe) =>
      recipe.ingredients.every((ing) => ingredients.includes(ing))
    );
    setResults(filtered);
  };

  return (
    <main className="max-w-4xl mx-auto py-10 px-4 relative">
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>
      <h1 className="text-3xl font-bold text-center mb-8">👨‍🍳 El Cocinero</h1>
      <IngredientInput onSearch={handleSearch} />
      <RecipeList recipes={results} />
    </main>
  );
}
