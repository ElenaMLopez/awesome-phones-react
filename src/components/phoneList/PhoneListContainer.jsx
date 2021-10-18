import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


const PhoneList = () => {
  const phones = useSelector(store => store.phones.phones)
  console.log({phones})
  return (
    <div>
      <h1 className="phones-list_title">Nice phones list</h1>
      <ul className="phones-list">
        {phones.map( phone => {
          return (
            <li key={uuidv4()} className="phone-list_element">
              Phone card: {phone.name}
            </li>
          )
          
        })}
      </ul>

    </div>
  )
}

export default PhoneList;