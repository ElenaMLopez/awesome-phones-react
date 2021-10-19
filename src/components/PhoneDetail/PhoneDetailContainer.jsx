import { useEffect, useState } from 'react';
import { getPhonePhoneByIdAction, clearPhoneAction } from '../../redux/phones/phonesActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import PhoneDetailComponent from './PhoneDetailComponent';

const PhoneDetailContainer = (props) =>{
  const id = props.location.detailProps._id;
  const dispatch = useDispatch();
  const phone = useSelector(store => store.phones.phone);
  const [isLoading, setIsLoading] = useState(true)

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
  
  return isLoading ? <Loader /> : <PhoneDetailComponent phone={phone} />
}

export default PhoneDetailContainer;
