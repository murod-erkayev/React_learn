import { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const ProdcutModal = ({
  isOpen,
  toggle,
  products,
  setProducts,
  editingProduct,
  isEdit,
  setIsEdit,
  setEditingProduct
}) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    sale: "",
    quantity: ""
  });

  useEffect(() => {
    if (isEdit && editingProduct) {
      setForm(editingProduct);
    } else {
      setForm({ name: "", price: "", sale: "", quantity: "" });
    }
  }, [editingProduct, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit && editingProduct) {
      const updated = products.map((p) =>
        p.id === editingProduct.id ? { ...p, ...form } : p
      );
      setProducts(updated);
    } else {
      const newProduct = {
        ...form,
        img: "https://maxcom.uz/storage/product/4Qpm46C04en6BB9D6OT9Pb01vYrOq0n27dct6jy8.jpeg",
        id: Date.now(), // unikal id
      };
      setProducts([...products, newProduct]);
    }

    toggle();
    setIsEdit(false);
    setEditingProduct(null);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{isEdit ? "Edit Product" : "Add Product"}</ModalHeader>
      <ModalBody>
        <form id="product" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control my-2"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name..."
          />
          <input
            type="text"
            className="form-control my-2"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price..."
          />
          <input
            type="text"
            className="form-control my-2"
            name="sale"
            value={form.sale}
            onChange={handleChange}
            placeholder="Sale..."
          />  
          <input
            type="text"
            className="form-control my-2"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="Quantity..."
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-secondary" onClick={toggle}>Cancel</button>
        <button className="btn btn-primary" form="product">Save</button>
      </ModalFooter>
    </Modal>
  );
};
