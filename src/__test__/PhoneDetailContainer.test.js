import { waitFor, render, screen } from '@testing-library/react';
import user from "@testing-library/user-event";
import Snackbar from '../components/commons/Snackbar';
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


test('It shows a message when user delete a phone', async () => {
  useSelectorMock.mockReturnValue(phoneMock);
  useDispatchMock.mockReturnValue(dispatch);

  render(<PhoneDetailContainer location={locationMock} />, {wrapper: MemoryRouter})
  const {getByText} = render(<Snackbar />)

  const deleteButton = await screen.findByText(/Delete/i);
  user.click(deleteButton);

  await waitFor(() => {
    expect(getByText(/You have deleted this phone/i)).toBeInTheDocument()
  })
})