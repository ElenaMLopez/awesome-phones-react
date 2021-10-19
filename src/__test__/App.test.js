import { render, screen } from '@testing-library/react';
import App from '../App';

test('Render header title', () => {
  render(<App />);
  const headerTitle = screen.getByText(/Awesome phones/i);
  expect(headerTitle).toBeInTheDocument();  
});
test('Render phone list title', () => {
  render(<App />);
  const phoneListTitle = screen.getByText(/Nice phones list/i);
})
