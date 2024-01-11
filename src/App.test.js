/* where you pass tests */

import { render, screen } from '@testing-library/react';
import App from './App';

/* tests for rendering here V */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
