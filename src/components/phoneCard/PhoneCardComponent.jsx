import { Link } from 'react-router-dom';

const PhoneCard = ({ name, image, price, id, _id }) => {
  
  return (
    <Link 
    to={{
      pathname: `/phones/detail/${id}`,
      detailProps: {_id}
    }} 
    className="phone-card"
    >
      <h3 className="phone-title">{name}</h3>
      <p>Price: {price}</p>
      <img src={image} alt={name} className="phone-image"/>
    </Link>
  );
}

export default PhoneCard;