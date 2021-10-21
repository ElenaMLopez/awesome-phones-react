import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addPhoneAction } from '../../redux/phones/phonesActions';
import { v4 as uuidv4 } from 'uuid';
import PhoneCard from '../phoneCard/PhoneCardComponent';
import AddPhoneForm from '../addPhoneForm/AddPhoneComponent';
const { REACT_APP_IMAGES_DIR } = process.env;

const PhoneList = () => {
  // const dispatch = useDispatch();
  const phones = useSelector(store => store.phones.phones);
  const [showAddPhone, setShowAddPhoneForm] = useState(false);

  return (
    <div>
      <header>
        <h1 className="phones-list_title">Nice phones list</h1>
        <button className="add-phone_btn btn" onClick={() => setShowAddPhoneForm(!showAddPhone)}>{showAddPhone ? 'Close': 'Add Phone' }</button>
        {showAddPhone && <AddPhoneForm />}
        
      </header>
      {!showAddPhone && <ul className="phones-list">
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
      </ul>}
    </div>
  )
};

export default PhoneList;