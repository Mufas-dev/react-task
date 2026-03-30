import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <MemoryRouter initialEntries={['/jobs/react-js-developer']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/job details/i)).toBeInTheDocument();
});
