import React, { useState } from 'react';

export const AdCard = ({ title, price, seller}) => {
  const [showHover, setShowHover] = useState(false)

  return (
    <Link to={`/movies/${id}`}
      onMouseOver={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}
    >
      <img
        src={``}
        alt={title}
      />
      {showHover &&
        <div>
          <h1>{title}</h1>
          <p>Price: {price} kr</p>
          <p>Sold by: {seller}</p>
        </div>
      }
    </Link>
  );
}