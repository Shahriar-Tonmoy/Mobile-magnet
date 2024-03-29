import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Button from "../Button1/Button";

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
    <div className="h-max">
      <div className="hero my-16">
        <div className="hero-content flex-col lg:flex-row">
          <img src={imageURL} className="max-w-sm rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold text-[#76453B]">{brand} - {model}</h1>
            <p className="py-6 text-lg font-semibold">{details}</p>
            <p className="py-4 text-2xl font-bold">Camera - {camera}</p>
            <p className="py-4 text-2xl font-bold">Battery - {battery}</p>
            <p className="py-4 text-2xl font-bold">Storage - {storage}</p>
            <p className="py-4 text-2xl font-bold mb-5">Display - {display}</p>
            <Button text={"Add to cart"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
