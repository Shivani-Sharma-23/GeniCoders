import React, { useState } from 'react';
import '../Accessories/Accessories.css';
import b1 from '../../images/jeans/j1.png'; 
import b2 from '../../images/jeans/j2.png';
import b3 from '../../images/jeans/j3.png';
import b4 from '../../images/jeans/j4.png';
import b5 from '../../images/jeans/j5.png';
import b6 from '../../images/jeans/j6.png';
// import b7 from '../../images/men/mc7.png';
// import b8 from '../../images/men/mc8.png';
// import b9 from '../../images/men/mc9.png';
// import b10 from '../../images/men/mc10.png';
// import b11 from '../../images/tshirts/top11.png';
// import b12 from '../../images/tshirts/top12.png';

const jeansData = [
  { id: 1, name: 'Men\'s Straight Leg Jeans With Stone Wash', image: b1, price: 800, color: 'red', size: 'M', pattern: 'striped' },
  { id: 2, name: 'Men Cat Whisker Straight Leg Jeans', image: b2, price: 1500, color: 'blue', size: 'S', pattern: 'plain' },
  { id: 3, name: 'Elasticated Waist Relaxed Fit Buckle Cargo Trouser |', image: b3, price: 1125, color: 'green', size: 'L', pattern: 'polka dot' },
  { id: 4, name: 'Mens Elastic Waist Relaxed Fit Buckle Cargo Jogger - Green - Xs', image: b4, price: 2250, color: 'yellow', size: 'M', pattern: 'striped' },
  { id: 5, name: 'Mens Denim Parachute Jean - Blue - 28R - An absolute staple in every man\'s closet is a pair of these men\'s regular fit jeans, ', image: b5, price: 1875, color: 'pink', size: 'S', pattern: 'plain' },
  { id: 6, name: 'Classic Faded Jeans ', image: b6, price: 400, color: 'purple', size: 'L', pattern: 'polka dot' },
//   { id: 7, name: 'Belted Straight Leg Pants', image: b7, price: 2800, color: 'red', size: 'M', pattern: 'striped' },
//   { id: 8, name: 'Applique Cami Top', image: b8, price: 3000, color: 'blue', size: 'S', pattern: 'plain' },
//   { id: 9, name: 'High Quality Plain T Shirt Women Cotton Elastic Basic T-shirts 2021 Summer Tops Short Sleeve ', image: b9, price: 750, color: 'green', size: 'L', pattern: 'polka dot' },
//   { id: 10, name: 'T-Shirts Women Chiffon Korean Style Summer New Fashion Design Patchwork All-Match Tops Short Sleeve Loose Solid Simple Chic, green / L', image: b10, price: 3375, color: 'yellow', size: 'M', pattern: 'striped' },
//   { id: 11, name: 'CROPPED TEE KHAKI - L', image: b11, price: 4125, color: 'pink', size: 'S', pattern: 'plain' },
//   { id: 12, name: 'Zingj Summer Striped Knitted Sleeveless Top High Waist Navel Short Vest T-shirt Tops Tank Top Tops for Women White Corset Top White-One Size ', image: b12, price: 2125, color: 'silver', size: 'S', pattern: 'plain' },
];

const Jeans = () => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState({
    price: null,
    color: '',
    size: '',
    pattern: ''
  });
  const [sortCriteria, setSortCriteria] = useState('none');
  const [filteredAccessories, setFilteredAccessories] = useState(jeansData);

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  const applyFilters = () => {
    let filtered = jeansData;

    if (filterCriteria.color) {
      filtered = filtered.filter(item => item.color === filterCriteria.color);
    }
    if (filterCriteria.size) {
      filtered = filtered.filter(item => item.size === filterCriteria.size);
    }
    if (filterCriteria.pattern) {
      filtered = filtered.filter(item => item.pattern === filterCriteria.pattern);
    }
    if (filterCriteria.price) {
      const [min, max] = filterCriteria.price.split('-').map(Number);
      filtered = filtered.filter(item => item.price >= min && item.price <= max);
    }

    // Set filtered accessories based on applied filters
    setFilteredAccessories(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
    let sortedAccessories = [...filteredAccessories];

    switch (e.target.value) {
      case 'low-to-high':
        sortedAccessories.sort((a, b) => a.price - b.price);
        break;
      case 'high-to-low':
        sortedAccessories.sort((a, b) => b.price - a.price);
        break;
      default:
        // Reset to original order or default sort logic
        sortedAccessories = jeansData;
        break;
    }

    setFilteredAccessories(sortedAccessories);
  };

  return (
    <div className="accessories-container">
      <div className={`filters-sidebar ${filtersVisible ? 'active' : ''}`}>
        <div className="filter-section">
          <h3>Filter by Price</h3>
          <select name="price" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="0-1000">0-1000</option>
            <option value="1001-2000">1001-2000</option>
            <option value="2001-3000">2001-3000</option>
            <option value="3001-4000">3001-4000</option>
            <option value="4001-5000">4001-5000</option>
          </select>
        </div>
        <div className="filter-section">
          <h3>Filter by Color</h3>
          <div className="color-options">
            <div className="color-square" style={{ backgroundColor: 'red' }} onClick={() => handleFilterChange({ target: { name: 'color', value: 'red' } })}></div>
            <div className="color-square" style={{ backgroundColor: 'blue' }} onClick={() => handleFilterChange({ target: { name: 'color', value: 'blue' } })}></div>
            <div className="color-square" style={{ backgroundColor: 'green' }} onClick={() => handleFilterChange({ target: { name: 'color', value: 'green' } })}></div>
            <div className="color-square" style={{ backgroundColor: 'yellow' }} onClick={() => handleFilterChange({ target: { name: 'color', value: 'yellow' } })}></div>
            <div className="color-square" style={{ backgroundColor: 'pink' }} onClick={() => handleFilterChange({ target: { name: 'color', value: 'pink' } })}></div>
            <div className="color-square" style={{ backgroundColor: 'purple' }} onClick={() => handleFilterChange({ target: { name: 'color', value: 'purple' } })}></div>
          </div>
        </div>
        <div className="filter-section">
          <h3>Filter by Size</h3>
          <select name="size" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
        <div className="filter-section">
          <h3>Filter by Pattern</h3>
          <select name="pattern" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="plain">Plain</option>
            <option value="striped">Striped</option>
            <option value="polka dot">Polka Dot</option>
          </select>
        </div>
        <button className="apply-filters-btn" onClick={applyFilters}>Apply Filters</button>
      </div>

      <div className="accessories-content">
        <div className="accessories-header">
          <div className="sort-dropdown">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" onChange={handleSortChange}>
              <option value="none">None</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="accessories-grid">
          {filteredAccessories.map(accessory => (
            <div key={accessory.id} className="accessory-item">
              <img src={accessory.image} alt={accessory.name} />
              <p>{accessory.name}</p>
              <p>&#8377;{accessory.price}</p>
              <div className="price-tag">&#8377;{accessory.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jeans;