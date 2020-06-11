import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CardContainer } from '../lib/CardStyling';
 
export const AdCard = ({ id,title, price, sellerName}) => {
  // const [showHover, setShowHover] = useState(false)
  
  return (
    <Link to={`/posts/${id}`}
      //onMouseOver={() => setShowHover(true)}
      //onMouseLeave={() => setShowHover(false)}
    >
      <CardContainer>
        <h1>{title}</h1>
        <p>Price: {price} kr</p>
        <p>Sold by: {sellerName}</p>
      </CardContainer>
    </Link>
  );
}