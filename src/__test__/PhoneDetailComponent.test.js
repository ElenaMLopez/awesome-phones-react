import { render, screen } from '@testing-library/react';
import PhoneDetailComponent from '../components/phoneDetail/phoneDetailComponent';
import { phoneMock } from './mocks/phonesMock';
import { MemoryRouter } from 'react-router-dom';

test('Render a phone detail page', async () => {

  render(<PhoneDetailComponent phone={phoneMock} />, {wrapper: MemoryRouter});

  const phoneName = await screen.findByText(/iPony 007/i)

  expect(phoneName).toBeInTheDocument();
})
