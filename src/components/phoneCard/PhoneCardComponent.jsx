
const PhoneCard = ({ name, image, price, id }) => {

  return (
    <>
      <h3 className="phone-title">{name}</h3>
      <p>Price: {price}</p>
      <img src={image} alt={name} className="phone-image"/>
    </>
  );
}

export default PhoneCard;