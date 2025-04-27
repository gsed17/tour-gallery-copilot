// Create a card component to display a tour's name, info, image, and price
// Include a "Not Interested" button that removes this tour when clicked
function TourCard({ id, name, info, image, price, removeTour }) {
    return (
      <div className="tour-card">
        <img src={image} alt={name} />
        <div className="tour-info">
          <h2>{name}</h2>
          <h4>${price}</h4>
          <p>{info}</p>
          <button onClick={() => removeTour(id)}>Not Interested</button>
        </div>
      </div>
    );
  }
  
  export default TourCard;