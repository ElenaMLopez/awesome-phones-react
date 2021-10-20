import { render, screen } from '@testing-library/react';
import PhoneDetailComponent from '../components/phoneDetail/phoneDetailComponent';
import { phoneMock } from './mocks/phonesMock';
import { MemoryRouter } from 'react-router-dom';

test('Render a phone detail page', async () => {
  render(<PhoneDetailComponent phone={phoneMock} />, {wrapper: MemoryRouter});

  const phoneName = await screen.findByText(/iPony 007/i)

  expect(phoneName).toBeInTheDocument();
})

test('There is a link to navigate to Home view', async () => {
  render(<PhoneDetailComponent phone={phoneMock} />, {wrapper: MemoryRouter});
  const homeLink = await screen.findByText(/Home/i);

  expect(homeLink).toBeInTheDocument();
})

test('There is a button to delete the phone', async () => {
  render(<PhoneDetailComponent phone={phoneMock} />, {wrapper: MemoryRouter});
  const deleteButton = await screen.findByText(/Delete/i);

  expect(deleteButton).toBeInTheDocument();
})

