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
    // 👉 Overlay
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Create New Product</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            {form.img && (
              <div className="mb-3 text-center">
                <img src={form.img} alt="preview" width="100" />
              </div>
            )}

            <input
              type="text"
              name="name"
              className="form-control mb-2"
              placeholder="Product Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="category"
              className="form-control mb-2"
              placeholder="Product Category"
              value={form.category}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="sale"
              className="form-control mb-2"
              placeholder="Product Sale (%)"
              value={form.sale}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="price"
              className="form-control mb-2"
              placeholder="Product Price"
              value={form.price}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="quantity"
              className="form-control mb-2"
              placeholder="Product Quantity"
              value={form.quantity}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="img"
              className="form-control mb-2"
              placeholder="Image URL"
              value={form.img}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleCreate}>
              Create
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;
