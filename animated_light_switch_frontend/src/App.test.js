import { render, screen } from '@testing-library/react';
import App from './App';

test('renders interactive light switch title', () => {
  render(<App />);
  const heading = screen.getByText(/Interactive Light Switch/i);
  expect(heading).toBeInTheDocument();
});
