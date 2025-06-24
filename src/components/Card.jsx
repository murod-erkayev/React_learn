import React from "react";

export const Card = ({ item, onDelete, onUpdate }) => {
  return (
    <div className="card">
      <div className="card-body">
        <img
          src={item.img || "https://via.placeholder.com/150"}
          alt={item.name}
          className="w-100 rounded-1"
        />
      </div>
      <div className="card-footer">
        <h3 className="text-center">{item.name}</h3>
        <div className="d-flex justify-content-between">
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
        <div className="flex gap-3 mt-3">
          <button
            className="btn btn-secondary bg-blue-500 text-white px-4 py-1"
            onClick={() => onUpdate(item)}
          >
            Update
          </button>
          <button
            className="btn btn-primary bg-red-500 text-white px-4 py-1"
            onClick={() => onDelete(item.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
