import { useEffect, useState } from 'react';

type Theme = 'light' | 'gray' | 'dark';

export const useTheme = () => {
  // Lee el valor guardado en localStorage o usa 'light' por defecto
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    // Removemos las clases de tema del documento al inicio
    document.documentElement.classList.remove('dark', 'theme-gray');
  }, []);

  useEffect(() => {
    // Aplicar el tema al documento
    const root = document.documentElement;
    
    // Remover todas las clases de tema primero
    root.classList.remove('dark', 'theme-gray');
    
    // Agregar la clase correspondiente
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'gray') {
      root.classList.add('theme-gray');
    }
    
    // Guardar en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'light') return 'gray';
      if (prev === 'gray') return 'dark';
      return 'light';
    });
  };

  return { theme, toggleTheme };
}; 