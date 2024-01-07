import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('wtfs aumentan', () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Start Panic!/i))
  const button = screen.getByText(/WTF!/i);
  fireEvent.click(button)
  const text = screen.getByText(/WTFs por minuto 1/i);
  expect(text).toBeInTheDocument();
});

test('start panic', () => {
  render(<App />);
  const button = screen.getByText(/Start Panic!/i);
  fireEvent.click(button)
  const wtfsButton = screen.getByText(/WTF!/i);
  expect(wtfsButton).toBeInTheDocument();
});


test('wtfs empiezan en cero al empezar el pánico', () => {
  render(<App />);
  const button = screen.getByText(/Start Panic!/i);
  fireEvent.click(button)

  const text = screen.getByText(/WTFs por minuto 0/i);
  expect(text).toBeInTheDocument();
});

test('calm by default', () => {
  render(<App />);

  const wtfsButton = screen.queryByText(/WTF!/i);
  expect(wtfsButton).toBeNull();

  const text = screen.queryByText(/WTFs por minuto 0/i);
  expect(text).toBeNull();
});

test('calm down hides the button and the text', () => {
  render(<App />);
  const button = screen.getByText(/Start Panic!/i);
  fireEvent.click(button)

  fireEvent.click(button)

  const wtfsButton = screen.queryByText(/WTF!/i);
  expect(wtfsButton).toBeNull();

  const text = screen.queryByText(/WTFs por minuto 0/i);
  expect(text).toBeNull();
});

test('calm down adds element to history', () => {
  render(<App />);
  const button = screen.getByText(/Start Panic!/i);
  fireEvent.click(button)
  const wtfsButton = screen.getByText(/WTF!/i);
  fireEvent.click(wtfsButton)

  fireEvent.click(button)

  const text = screen.getByText(/Wtfs were... 1/i);
  expect(text).toBeInTheDocument();
});

