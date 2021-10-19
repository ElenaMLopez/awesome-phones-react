import { GET_PHONES } from './phonesActions';
import initialData from './phonesConstants';

export default function phonesReducer (state= initialData, action) {
  switch (action.type) {
    case GET_PHONES:
      return {
        ...state,
        phones: action.payload
      }
    default:
      return state;
  }
}
