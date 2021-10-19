import { useEffect, Suspense, lazy } from 'react';
import { getPhonePhoneByIdAction, clearPhoneAction } from '../../redux/phones/phonesActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
const PhoneDetailComponent = lazy(() => import('./PhoneDetailComponent'));

const PhoneDetailContainer = (props) =>{
  const id = props.location.detailProps._id;
  const dispatch = useDispatch();
  const phone = useSelector(store => store.phones.phone);
  useEffect(()=> {
    dispatch(getPhonePhoneByIdAction(id));
    return (() => dispatch(clearPhoneAction()))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return(
    <Suspense fallback={<Loader />}>
      <PhoneDetailComponent phone={phone} />
    </Suspense>
  )
}

export default PhoneDetailContainer;
