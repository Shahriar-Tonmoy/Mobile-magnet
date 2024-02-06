import React, { useEffect, useState } from "react";
import Mobile from "../Mobile/Mobile";

const Mobiles = () => {
  const [mobiles, setMobiles] = useState([]);
  useEffect(() => {
    fetch(`https://shahriar-tonmoy.github.io/REPLIQ-DATA/product.json`)
      .then((res) => res.json())
      .then((data) => setMobiles(data));
  }, []);
  console.log(mobiles);
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-5xl font-bold mb-16 mt-16 text-[#76453B]">
        Find your one
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto mt-10 mb-16">
        {mobiles.map((mobile) => (
          <Mobile key={mobile.id} mobile={mobile}></Mobile>
        ))}
      </div>
    </div>
  );
};

export default Mobiles;
