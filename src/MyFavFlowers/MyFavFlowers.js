import React from 'react';
import './MyFavFlowers.css';

export default function Flower({title, image, variety}) { //React components start with capitals
    return (
      <div className='Flower'>
        <label className='title'> {title} </label>
        <label className='variety'> Variety: {variety.toUpperCase()} </label>
        <img src={image} alt={title} />
      </div>
    );
  }