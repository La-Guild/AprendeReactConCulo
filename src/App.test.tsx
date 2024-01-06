import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('wtfs empiezan en cero', () => {
  render(<App />);
  const linkElement = screen.getByText(/WTFs por minuto 0/i);
  expect(linkElement).toBeInTheDocument();
});
