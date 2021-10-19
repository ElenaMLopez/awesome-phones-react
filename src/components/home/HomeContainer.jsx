import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhonesAction } from '../../redux/phones/phonesActions';
import Loader from '../Loader';
// const PhoneList = lazy(() => import('../phoneList/PhoneListContainer'))
import PhoneListContainer from '../phoneList/PhoneListContainer';

const Home = () => {
  const dispatch = useDispatch();
  const phones = useSelector(store => store.phones.phones)
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    dispatch(getPhonesAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (phones.length > 0) {
        setIsLoading(false)
    }     
  },[phones])

   return isLoading ? <Loader /> : <PhoneListContainer />
}

export default Home;