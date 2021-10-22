import * as reactRedux from 'react-redux';

export const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
export const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
