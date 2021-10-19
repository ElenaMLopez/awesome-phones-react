import { render, screen } from '@testing-library/react';
import PhoneListContainer from '../components/phoneList/PhoneListContainer';
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
