import React from "react";

const SingleCart = ({ product, handleDelete }) => {

    const { id, brand, model, price, imageURL, storage, display, camera, battery, details, quantity } = product;

  return (
    <div className="card card-side bg-base-100 shadow-xl border-2 border-[#76453B]">
      <figure>
        <img src={imageURL} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#76453B] text-left font-semibold">{brand} {model}</h2>
        <p className="font-extrabold text-left">Price: {price}</p>
        <p className="font-extrabold text-left">Storage: {storage}</p>
        <p className="font-extrabold text-left">Storage: {display}</p>
        <p className="font-extrabold text-left">Storage: {camera}</p>
        <p className="font-extrabold text-left">Storage: {battery}</p>
        <div className="card-actions justify-start">
          <button
            onClick={() => handleDelete(id)}
            className="btn bg-[#76453B] text-white hover:bg-[#76453B]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
