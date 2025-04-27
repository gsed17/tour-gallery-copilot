// Fetch tours from https://course-api.com/react-tours-project using useEffect
// Store in state: tours, loading, error

import { useState, useEffect } from 'react';
import Gallery from './components/Gallery'; 
import './App.css';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://course-api.com/react-tours-project');
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch tours');
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchTours();
  }, []);



  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
// If loading is true, display "Loading..."
// If error, display an error message
// Else, render Gallery with tour data


  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="App">
      <Gallery tours={tours} removeTour={removeTour} />
    </div>
  );
}


export default App;
