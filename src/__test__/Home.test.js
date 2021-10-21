import { render, screen } from '@testing-library/react';
import Home from '../components/home/HomeContainer';
import { phonesMock } from './mocks/phonesMock';
import { MemoryRouter } from 'react-router-dom';
import { useSelectorMock,useDispatchMock } from './mocks/reactReduxMock';
import { getPhonesAction } from '../redux/phones/phonesActions';
import PhoneList from '../components/phoneList/PhoneListContainer';


beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();
});

test('Renders a home view with title', async () => {
  useSelectorMock.mockReturnValue(phonesMock);
  useDispatchMock.mockReturnValue(getPhonesAction());
  render(<Home />, {wrapper: MemoryRouter});
  const homeTitle = await screen.findByText(/Nice phones list/i);

  expect(homeTitle).toBeInTheDocument();  
})

