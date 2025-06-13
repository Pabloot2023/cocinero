import { render, screen } from '@testing-library/react';
import RecipeList from '../components/RecipeList';

describe('RecipeList', () => {
  it('renders loading state correctly', () => {
    render(<RecipeList recipes={[]} loading={true} />);
    const skeletons = document.querySelectorAll('.animate-pulse');
    expect(skeletons).toHaveLength(2);
  });

  it('renders empty state correctly', () => {
    render(<RecipeList recipes={[]} loading={false} />);
    expect(screen.getByText('No se encontraron recetas con los ingredientes especificados.')).toBeInTheDocument();
  });

  it('renders recipes correctly', () => {
    const mockRecipes = [
      {
        id: 1,
        name: 'Test Recipe',
        image: 'test.jpg',
        matchScore: 1
      }
    ];
    render(<RecipeList recipes={mockRecipes} loading={false} />);
    expect(screen.getByText('Test Recipe')).toBeInTheDocument();
  });
}); 