"use client";
import Image from 'next/image';
import React from 'react';

interface Recipe {
  id: number;
  name: string;
  image: string;
  matchScore: number;
}

interface RecipeListProps {
  recipes: Recipe[];
  loading?: boolean;
}

export default function RecipeList({ recipes, loading = false }: RecipeListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((index) => (
          <div
            key={`skeleton-${index}`}
            className="project-card overflow-hidden animate-pulse"
          >
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="mt-2 h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="text-center text-gray-600 dark:text-gray-400 theme-gray:text-gray-200">
        No se encontraron recetas con los ingredientes especificados.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="project-card overflow-hidden"
        >
          <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            {recipe.image && recipe.image.startsWith('http') ? (
              <Image
                src={recipe.image}
                alt={recipe.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={true}
                onError={(e) => {
                  // @ts-ignore
                  e.target.src = '/placeholder.png';
                }}
              />
            ) : (
              <span className="text-gray-400">Sin imagen</span>
            )}
          </div>
          <div className="p-4">
            <h2 className="project-title">
              {recipe.name}
            </h2>
            {recipe.matchScore < 1 && (
              <div className="mt-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Coincidencia: {Math.round(recipe.matchScore * 100)}%
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
