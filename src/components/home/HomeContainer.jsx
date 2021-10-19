import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { getPhonesAction } from '../../redux/phones/phonesActions';
import Loader from '../Loader';
const PhoneList = lazy(() => import('../phoneList/PhoneListContainer'))

const Home = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getPhonesAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return(
    <> 
    <Suspense fallback={<Loader />}>
      <PhoneList />
    </Suspense>
    </>
  )
}

export default Home;