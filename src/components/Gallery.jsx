import React, { useEffect, useState } from 'react'; // Importing React and useEffect from React
import TourCard from './TourCard'; // Importing the Tour component

const Gallery = ({ tours, setTours, onRemove }) => {
    // Local state to manage loading and errors
    const [loading, setLoading] = useState(true); // State variable to manage loading state
    const [error, setError] = useState(false); // State variable to manage error state

    // Function to fetch tours from the API
    const fetchTours = async () => {
        try {
            setLoading(true); // Setting loading state to true before fetching data
            const response = await fetch('https://course-api.com/react-tours-project'); // Fetching data from the API
            if (!response.ok) { // Checking if the response is ok
                throw new Error('Network response was not ok');
            }
            const data = await response.json(); // Parsing the JSON data
            setTours(data); // Setting the tours state with the fetched data
        } catch (error) {
            console.error('Error fetching tours:', error); // Logging the error
            setError(true); // Setting error state to true if there is an error
            setLoading(false); 
        } finally {
            setLoading(false); 
        };
    };

    // Task 4: Handle loading and error states gracefully
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
        return (
            <div className="no-tours">
                <h2>No Tours Available</h2>
                <button onClick={fetchTours}>Refresh</button>
            </div>
        );
    };

    // Rendering the list of tours
    return (
        <section className='gallery'>
            {tours.map((tour) => (
                <TourCard 
                    key={tour.id} // Unique key for each tour
                    {...tour} // Spreading the tour object properties
                    onRemove={onRemove} // Passing the onRemove function as a prop
                /> 
            ))}
        </section>
    );
};

export default Gallery; // Exporting the Gallery component