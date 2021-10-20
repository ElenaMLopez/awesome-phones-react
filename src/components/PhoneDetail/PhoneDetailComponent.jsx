import { Link } from 'react-router-dom';

const imageDir = process.env.REACT_APP_IMAGES_DIR

const PhoneDetailComponent = ({phone, deletePhone}) => {
return (
  <div className="phone-detail_container">
    <header className="phone-detail__header">
    <Link to="/phones" className="phone-detail__back-link">Home</Link>
    <button className="phone-detail__delete-button btn" onClick={deletePhone}>Delete</button>
    </header>
    <main className="phone-detail__info-container">
      <h1 className="phone-detail__title">{phone.name}</h1>
      <img className="phone-detail__image" src={`${imageDir}/${phone.imageFileName}`} alt={phone.name} />
      <p className="phone-detail__description">{phone.description}</p>
      <p className="phone-detail__description price">Price: {phone.price} </p>
    </main>
  </div>
)
}

export default PhoneDetailComponent;