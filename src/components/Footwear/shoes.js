import React from 'react';

import s1 from '../../images/shoes/s1.png'; 
import s2 from '../../images/shoes/s2.png';
import s3 from '../../images/shoes/s3.png';
import s4 from '../../images/shoes/s4.png';
import s5 from '../../images/shoes/s5.png';
import s6 from '../../images/shoes/s6.png';
import s7 from '../../images/shoes/s7.png';
import s8 from '../../images/shoes/s8.png';
import s9 from '../../images/shoes/s9.png';
import s10 from '../../images/shoes/s10.png';

const shoes = [
  { id: 1, name: 'sandle 1', image: s1 },
  { id: 2, name: 'Accessory 2', image: s2 },
  { id: 3, name: 'Accessory 3', image: s3 },
  { id: 4, name: 'Accessory 4', image: s4 },
  { id: 5, name: 'Accessory 5', image: s5 },
  { id: 6, name: 'Accessory 6', image: s6 },
  { id: 7, name: 'Accessory 7', image: s7 },
  { id: 8, name: 'Accessory 8', image: s8 },
  { id: 9, name: 'Accessory 9', image: s9 },
  { id: 10, name: 'Accessory 10', image: s10 },
];

const Shoes = () => {
  return (
    <div className="accessories-container">
      <h2>SHOES</h2>
      <div className="accessories-grid">
        {shoes.map(shoes => (
          <div key={shoes.id} className="accessory-item">
            <img src={shoes.image} alt={shoes.name} />
            <p>{shoes.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shoes;
