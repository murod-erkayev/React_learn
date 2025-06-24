import React, { useState } from 'react';
import { ProdcutModal } from './components/Product/ProdcutModal';
import { Card } from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const handleUpdate = (product) => {
    setEditingProduct(product);
    setIsEdit(true);
    setOpen(true);
  };

  return (
    <div className="flex justify-center items-center flex-col p-4">
      <ProdcutModal
        isOpen={open}
        toggle={() => {
          setOpen(false);
          setEditingProduct(null);
          setIsEdit(false);
        }}
        products={products}
        setProducts={setProducts}
        editingProduct={editingProduct}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        setEditingProduct={setEditingProduct}
      />

      <div className="row my-3 w-100">
        <div className="col-md-3">
          <button className="btn btn-success w-100" onClick={() => setOpen(true)}>
            Open Modal
          </button>
        </div>
        <div className="col-md-9">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="row mt-3 w-100">
        {products
          .filter((item) => item.name?.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <div key={item.id} className="col-md-4 mb-3">
              <Card item={item} onDelete={handleDelete} onUpdate={handleUpdate} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
