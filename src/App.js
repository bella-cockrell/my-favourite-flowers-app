import React from 'react';
import './App.css';
import Flower from './MyFavFlowers/MyFavFlowers';

import roseImage from './MyFavFlowers/Images/rose.jpeg'; //camelCase
import peonyImage from './MyFavFlowers/Images/peony.jpg';
import dahliaImage from './MyFavFlowers/Images/dahlia.jpg';

function App() {
  return (
    <div className="App">

      <h1>My Favourite Flowers</h1>

      <Flower title='Rose'
        image={roseImage}
        variety='Prussian Red'
      />

      <Flower title='Peony'
        image={peonyImage}
        variety="Big Girl's Blouse"
      />

      <Flower title='Dahlia'
        image={dahliaImage}
        variety='Spikey Boy'
      />

    </div>
  );
}

export default App;
