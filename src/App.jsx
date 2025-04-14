// Task 1: Creating the root component of the app 
import React, { useState } from 'react'; // Importing useState from React
import Gallery from './components/Gallery'; // Importing the Gallery component
import './styles/styles.css'; // Importing the CSS file for styling

// Root component of the app
function App() {
  // State variable to hold the list of tours
  const [tours, setTours] = useState([]);

  // Function to remove a tour by its ID
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h1>Our Tours</h1> {/* Main heading of the app */}
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} /> {/* Gallery component to display the tours */} 
    </main>
  );
};

export default App; // Exporting the App component 
