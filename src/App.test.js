import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page headline', () => {
  window.history.pushState({}, '', '/hci-ugdcs/');
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Ghana/);
});
