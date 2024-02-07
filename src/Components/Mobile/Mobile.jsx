import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button1/Button';

const Mobile = ({ mobile }) => {
    const {
        id,
        brand,
        model,
        price,
        details,
        camera,
        battery,
        imageURL
      } = mobile;
    return (
        <div className="card lg:card-side shadow-2xl border-2 border-[#76453B] ">
            <figure className=" w-1/2 h-full">
              <img  
                src={imageURL}
                alt="Album"
                className="object-cover"
              />
            </figure>
            <div className="card-body mt-3">
              <h2 className="card-title text-3xl font-extrabold text-start text-[#76453B]">{brand} - {model}</h2>
              <p className="font-semibold text-xl text-start text-[#76453B]">Price  - <span className="text-[#76453B]">{price}</span></p>
              <p className="font-semibold text-xl text-start text-[#76453B]">Camera - {camera}</p> 
              <p className="font-semibold text-xl text-start text-[#76453B]">Battery - {battery}</p> 
              <div className="card-actions justify-start">
              <Link to={`/details/${id}`} ><Button text={"Details"}></Button></Link>
              </div>
            </div>
          </div>
    );
};

export default Mobile;