import React from 'react';
import { Link } from 'react-router-dom';

const Mobile = ({ mobile }) => {
    const {
        id,
        brand,
        model,
        price,
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
              <h2 className="card-title text-2xl text-start text-[#76453B]">{brand} - {model}</h2>
              <p className="font-semibold text-xl text-start text-[#76453B]">Price  - <span className="text-[#76453B]">{price}</span></p>
              <div className="card-actions justify-start">
              <Link ><button className="btn border-[#76453B] bg-[#76453B] text-white hover:bg-red-950">Details</button></Link>
              </div>
            </div>
          </div>
    );
};

export default Mobile;