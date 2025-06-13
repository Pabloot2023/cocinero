"use client";
import React, { useState } from "react";

interface IngredientInputProps {
  onSearch: (ingredients: string[]) => void;
}

export default function IngredientInput({ onSearch }: IngredientInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e?: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault();
    const ingredients = input
      .split(" ")
      .map((ing) => ing.trim())
      .filter((ing) => ing.length > 0);
    onSearch(ingredients);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex items-center justify-center w-full max-w-xl mx-auto">
        <div className="flex w-full bg-white dark:bg-gray-900 rounded-full shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ingresa ingredientes separados por espacios"
            className="flex-1 px-5 py-3 bg-transparent outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
          />
          <button
            type="submit"
            aria-label="Buscar"
            onClick={handleSubmit}
            className="px-4 flex items-center justify-center bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right text-gray-500 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}
