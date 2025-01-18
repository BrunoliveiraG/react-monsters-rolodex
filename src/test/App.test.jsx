import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders welcome message', () => {
  render(<App />);
  // Get all elements containing 'vite' and ensure at least one is in the document
  const elements = screen.getAllByText(/vite/i);
  expect(elements.length).toBeGreaterThan(0); // Ensures at least one element matches
});
