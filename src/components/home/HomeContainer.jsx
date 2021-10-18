import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPhonesAction } from '../../redux/phones/phonesActions';
import PhoneList from '../phoneList/PhoneListContainer';

const Home = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getPhonesAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return(
    <> 
      <PhoneList />
    </>
  )
}

export default Home;