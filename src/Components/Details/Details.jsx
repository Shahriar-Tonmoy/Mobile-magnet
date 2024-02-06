import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const allMobiles = useLoaderData(); //loading data when this route loads
  const { id } = useParams();

  const selectedMobile = allMobiles.find((mob) => mob.id == id);
  const {
    brand,
    model,
    price,
    details,
    storage,
    display,
    camera,
    battery,
    imageURL
  } = selectedMobile;

  console.log(selectedMobile);

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={imageURL} className="max-w-sm rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold text-[#76453B]">{brand} - {model}</h1>
            <p className="py-6">{details}</p>
            <p className="py-4 text-2xl font-bold">Camera - {camera}</p>
            <p className="py-4 text-2xl font-bold">Battery - {battery}</p>
            <p className="py-4 text-2xl font-bold">Storage - {storage}</p>
            <p className="py-4 text-2xl font-bold">Display - {display}</p>
            <button
              className="btn bg-[#76453B]  text-white hover:bg-red-950"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
