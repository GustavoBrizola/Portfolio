import { render, screen } from '@testing-library/react';
import MainPage from './sites/MainPage';

test('renders MainPage react link', () => {
  render(<MainPage/>);
  const aboutElement = screen.getByText(/Gustavo Silva Brizola/i);
  expect(aboutElement).toBeInTheDocument();
});