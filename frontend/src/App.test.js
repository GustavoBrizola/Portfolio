import { render, screen } from '@testing-library/react';
import MainPage from './sites/MainPage';

test('renders MainPage react link', () => {
  render(<MainPage/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});