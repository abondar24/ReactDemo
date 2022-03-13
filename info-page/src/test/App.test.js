import { render, screen } from '@testing-library/react';
import App from '../component/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to React World/i);
  expect(linkElement).toBeInTheDocument();
});
