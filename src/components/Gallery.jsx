import React, { use, useEffect } from 'react'; // Importing React and useEffect from React
import TourCard from './TourCard'; // Importing the Tour component

const Gallery = ({ tours, setTours, onRemove }) => {
    // Local state to manage loading and errors
    const [loading, setLoading] = useState(true); // State variable to manage loading state
    const [error, setError] = useState(false); // State variable to manage error state

    // Function to fetch tours from the API
    const fetchTours = async () => {
        try {
            const response = await fetch('https://course-api.com/react-tours-project'); // Fetching data from the API
            if (!response.ok) { // Checking if the response is ok
                throw new Error('Network response was not ok');
            }
            const data = await response.json(); // Parsing the JSON data
        } catch (error) {
            console.error('Error fetching tours:', error); // Logging the error
            setError(true); // Setting error state to true if there is an error
        } finally {
            setLoading(false); // Setting loading state to false after fetching data
        }
    }
}

// Calling the fetchTours function to fetch tours
useEffect(() => {
    fetchTours(); 
}, []);

// Rendering loading state 
if (loading) {
    return <h2>Loading...</h2>; 
};

// Rendering error state
if (error) {
    return <h2>Error occurred while fetching tours</h2>; 
};

// Rendering if there are no tours
if (tours.length === 0) {
    return <h2>No tours available</h2>; 
    <button onClick={fetchTours}>Refresh</button>

    // Rendering the list of tours
    return (
        <section className='gallery'>
            {tours.map((tour) => {
                return (
                    <TourCard 
                        key={tour.id} // Unique key for each tour
                        {...tour} // Spreading the tour object properties
                        onRemove={onRemove} // Passing the onRemove function as a prop
                        /> 
                );
            })}
        </section>
    );
};

export default Gallery; // Exporting the Gallery component