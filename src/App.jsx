import React, { useState } from 'react';
import Modal from './components/Madol';

const App = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };
  return (
    <div>
      <h1>My Products</h1>
      <button onClick={() => setShowModal(true)}>Create Product</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)} onCreate={addProduct} />
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {products.map((p, index) => (
          <div key={index} style={cardStyle}>
            <img src={p.img || 'https://via.placeholder.com/150'} alt={p.name} width="150" />
            <h3>{p.name}</h3>
            <p>Price: ${p.price}</p>
            <p>Quantity: {p.quantity}</p>
            <p>Category: {p.category}</p>
            <p>Sale: {p.sale}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '10px',
  width: '180px',
  boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
};

export default App;
