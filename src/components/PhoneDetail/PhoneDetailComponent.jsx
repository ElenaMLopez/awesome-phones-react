import { Link } from 'react-router-dom';

const PhoneDetailComponent = ({phone}) => {
return (
  <div className="phone-detail_container">
    <Link to="/phones" className="phone-detail_back-link">Home</Link>
    <main className="phone-detail_info-container">
      <h1 className="phone-detail_title">{phone.name}</h1>
      <img className="" src="" alt={phone.name} />
      <p className="phone-detail_description">{phone.description}</p>
      <p className="phone-detail_description">Price: {phone.price} </p>
    </main>
  </div>
)
}

export default PhoneDetailComponent;