import React, { useState } from 'react';

import img1 from "../../assets/3.webp"
import img2 from "../../assets/4.jpg"
import img3 from "../../assets/6.png"
import img4 from "../../assets/5.png"
import './Catalog.modules.css';


const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: 'Producto 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit..', image: img1 },
    { id: 2, name: 'Producto 2', description: 'ias, repellat optio tempore odit dolores distinctio qui? Necessitatibus.', image: img2 },
    { id: 3, name: 'Producto 3', description: 'emporibus optio quisquam facere molestias.', image: img3 },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className='title'>Nuestros productos</h2>
     

      <input 
  type="text"
  placeholder="Buscar..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="search-input"
/>
       
      <ul className="cardContainer">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li className="card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="card-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </li>
          ))
        ) : (
          <p>No se encotro el producto</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;