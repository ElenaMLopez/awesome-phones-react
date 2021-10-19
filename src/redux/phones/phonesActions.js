import API from '../../services/api';

const { REACT_APP_PHONES_URL } = process.env;

export const GET_PHONES = 'GET_PHONES';
export const GET_PHONE_BY_ID = 'GET_PHONE_BY_ID';
export const CLEAR_PHONE = 'CLEAR_PHONE';
export const DELETE_PHONE = 'DELETE_PHONE';

export const getPhonesAction = () => async (dispatch, getState) => {
  const res = await API.get(REACT_APP_PHONES_URL)
  dispatch({
    type: GET_PHONES,
    payload: res.data
  });
};
export const getPhonePhoneByIdAction = (id) => async (dispatch, getState) => {
  const res = await API.get(`${REACT_APP_PHONES_URL}/${id}`);
  dispatch({
    type: GET_PHONE_BY_ID,
    payload: res.data
  })
};
export const clearPhoneAction = () => async(dispatch, getState) => {  
  dispatch({
    type: CLEAR_PHONE,
    payload: {}
  })
}
export const deletePhoneAction = (id) => async (dispatch, getState) => {
  const res = await API.deleteElement(`${REACT_APP_PHONES_URL}/${id}`)
  const phonesState = getState().phones.phones;
  const newPhonesState = phonesState.filter(phone => phone._id !== id)
  alert(res)

  dispatch({
    type: DELETE_PHONE,
    payload: {newPhonesState}
  })
}

