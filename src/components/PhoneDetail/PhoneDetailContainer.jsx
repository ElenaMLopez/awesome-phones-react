import { useEffect, useState } from 'react';
import { getPhonePhoneByIdAction, clearPhoneAction, deletePhoneAction } from '../../redux/phones/phonesActions';
import { useDispatch, useSelector } from 'react-redux';
import useSnackbar from '../../hooks/useSnackbar';
import { useHistory } from 'react-router-dom'


import Loader from '../Loader';
import PhoneDetailComponent from './PhoneDetailComponent';
import Snackbar from '../commons/Snackbar';

const PhoneDetailContainer = (props) =>{
  const id = props.location.detailProps._id;
  const dispatch = useDispatch();
  const phone = useSelector(store => store.phones.phone);
  const [isLoading, setIsLoading] = useState(true)
  const { isActive, message, openSnackBar } = useSnackbar();
  const _showSnackBarHandler = () => {
    openSnackBar('You have deleted this phone');
  }
  const history = useHistory();


  useEffect(()=> {
    dispatch(getPhonePhoneByIdAction(id));
    return (() => dispatch(clearPhoneAction()))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (phone.imageFileName) {
        setIsLoading(false)
    }     
  },[phone])
  const deletePhone = () => {
    _showSnackBarHandler();
    setTimeout(() => { history.push('/phones') }, 3000)
    return dispatch(deletePhoneAction(phone._id))
  }
    
  const Details = () => <>
    <PhoneDetailComponent phone={phone} deletePhone={deletePhone} />
    <Snackbar isActive={isActive} message={message} />
  </>
  
  return isLoading ? <Loader /> : <Details />
}

export default PhoneDetailContainer;
