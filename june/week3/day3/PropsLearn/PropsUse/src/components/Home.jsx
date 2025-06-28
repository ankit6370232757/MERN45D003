import React from 'react';
import './Home.css';

function Home(props) {
  const {
    imgLink,
    obj: {
      name,
      price,
      originalPrice,
      discount,
      rating,
      description
    }
  } = props;

  return (
    <div className='card'>
      <img src={imgLink} alt={name} className="product-image" />

      <div className="card-content">
        <p className="product-name">{name}</p>

        <div className="price-section">
          <span className="current-price">₹{price}</span>
          {originalPrice && (
            <span className="original-price">₹{originalPrice}</span>
          )}
          {discount && (
            <span className="discount">{discount}% off</span>
          )}
        </div>

        {rating && (
          <div className="rating">
            {"⭐".repeat(Math.floor(rating))}
            <span className="rating-number">({rating})</span>
          </div>
        )}

        <p className="description">{description}</p>

        <button className="add-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default Home;
