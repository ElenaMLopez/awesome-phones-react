import { render, screen, waitFor } from '@testing-library/react';
import PhoneListContainer from '../components/phoneList/PhoneListContainer';
import user from "@testing-library/user-event";

import { phonesMock } from './mocks/phonesMock';
import { MemoryRouter } from 'react-router-dom';
import { useSelectorMock,useDispatchMock } from './mocks/reactReduxMock';

beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();
});

test('Renders a list of phones', async () => {
  useSelectorMock.mockReturnValue(phonesMock);
  render(<PhoneListContainer />, {wrapper: MemoryRouter});
  const firstPhoneName = await screen.findByText(/iPony 007/i);
  const secondPhoneName = await screen.findByText(/BlackHole 8000/i);

  expect(firstPhoneName && secondPhoneName).toBeInTheDocument();  
})

test('Render phone list title', async() => {
  useSelectorMock.mockReturnValue(phonesMock);
  render(<PhoneListContainer />, {wrapper: MemoryRouter});
  const phoneListTitle = await screen.getByText(/Nice phones list/i);
  expect(phoneListTitle).toBeInTheDocument()
})

test('Render add phone button', async() => {
  useSelectorMock.mockReturnValue(phonesMock);
  render(<PhoneListContainer />, {wrapper: MemoryRouter});
  const addButton = await screen.getByText(/Add Phone/i);
  user.click(addButton);

  await waitFor(() => {
    const closeButton = screen.getByText(/Close/i)
    expect(closeButton).toBeInTheDocument()
  })

})