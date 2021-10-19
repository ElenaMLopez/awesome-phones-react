import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PhoneCard from '../phoneCard/PhoneCardComponent';
const { REACT_APP_IMAGES_DIR } = process.env;

const PhoneList = () => {
  const phones = useSelector(store => store.phones.phones)
  return (
    <div>
      <h1 className="phones-list_title">Nice phones list</h1>
      <ul className="phones-list">
        {phones.map( phone => {
          return (
            <li key={uuidv4()} className="phone-list_element">
              <PhoneCard 
                name={phone.name}
                price={phone.price}
                image={`${REACT_APP_IMAGES_DIR}/${phone.imageFileName}`}
                id={phone.id}
                _id={phone._id}
                />
            </li>
          )
          
        })}
      </ul>

    </div>
  )
}

export default PhoneList;