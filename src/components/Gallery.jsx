// Create a gallery that maps over the tours array and renders TourCard for each
import TourCard from './TourCard';

function Gallery({ tours, removeTour }) {
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </div>
  );
}

export default Gallery;