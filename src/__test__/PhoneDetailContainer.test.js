import { render, screen } from '@testing-library/react';
import PhoneDetailContainer from '../components/PhoneDetail/PhoneDetailContainer';
import { phoneMock } from './mocks/phonesMock';
import { MemoryRouter } from 'react-router-dom';
import { useSelectorMock,useDispatchMock } from './mocks/reactReduxMock';

beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();
})

const locationMock = {
  detailProps: {
    id: 1
  }
}

const dispatch = jest.fn();

test('Send description to detail component', async () => {
  useSelectorMock.mockReturnValue(phoneMock);
  useDispatchMock.mockReturnValue(dispatch);
  render(<PhoneDetailContainer location={locationMock} />, {wrapper: MemoryRouter})

  const phoneDescription = await screen.findByText(/Poopayee bananaaaa/i);
  expect(phoneDescription).toBeInTheDocument();
})
