import React, { useState } from 'react'; // Importing React and useState from React

// TourCard component to display individual tour details
const TourCard = ({ id, name, info, price, image, onRemove }) => {
    const [readMore, setReadMore] = useState(false); // State variable to manage read more/less state

    return (
        <article className="tour-card">
        <img src={image} alt={name} className="tour-img" /> {/* Displaying the tour image */}
        
        <div className="tour-info"> {/* Displaying the tour name and price */}
            <div className="tour-header">
                <h2>{name}</h2>
                <h3 className="tour-price">${price}</h3>
            </div>
          
            {/* Displaying the tour description */}
            <p>
            {readMore ? info : `${info.substring(0, 80)}...`}
            {/* Conditional rendering based on readMore state */}
            <button className="read-more" onClick={() => setReadMore(!readMore)}>
              {readMore ? "Show Less" : "Read More"}
            </button>
          </p>
        
          <button className="not-interested" onClick={() => onRemove(id)}> Not Interested </button> {/* Button to remove the tour from the list */}
        </div>
      </article>
    );
}

export default TourCard; // Exporting the TourCard component