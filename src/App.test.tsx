import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('wtfs empiezan en cero', () => {
  render(<App />);
  const linkElement = screen.getByText(/WTFs por minuto 0/i);
  expect(linkElement).toBeInTheDocument();
});

test('wtfs aumentan', () => {
  render(<App />);
  const button = screen.getByText(/WTF!/i);
  fireEvent.click(button)
  const texto = screen.getByText(/WTFs por minuto 1/i);
  expect(texto).toBeInTheDocument();
});


