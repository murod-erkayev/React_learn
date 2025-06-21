import React, { useState } from 'react';

const Modal = ({ onClose, onCreate }) => {
  const [form, setForm] = useState({
    name: '',
    category: '',
    sale: '',
    price: '',
    quantity: '',
    img: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleCreate = () => {
    const { name, category, sale, price, quantity } = form;
    if (name && price && category && sale && quantity) {
      onCreate(form);
      onClose();
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Create New Product</h2>
        <br />
        {form.img && <img src={form.img} alt="preview" width="100" />}
        <br />
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="category"
          placeholder="Product Category"
          value={form.category}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="sale"
          placeholder="Product Sale (%)"
          value={form.sale}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={form.price}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="quantity"
          placeholder="Product Quantity"
          value={form.quantity}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={form.img}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleCreate}>Create</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999
  },
  modal: {
    background: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)'
  }
};

export default Modal;
