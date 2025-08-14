import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the seafood recipe page correctly', () => {
  render(<App />);
  // Check for the main title
  expect(screen.getByText(/delicious seafood paella/i)).toBeInTheDocument();
  // Check for subtitle
  expect(screen.getByText(/a flavorful and easy-to-make seafood recipe/i)).toBeInTheDocument();
  // Optional: check for ingredients or steps
});
