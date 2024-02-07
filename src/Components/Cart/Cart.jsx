import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';

const Cart = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch("https://shahriar-tonmoy.github.io/REPLIQ-DATA/MyCart.json")
          .then((res) => res.json())
          .then((data) => setCarts(data));
      }, []);

      const handleDelete = id =>{     
        const remainingCart = carts.filter(pro => pro.id !== id);
        setCarts(remainingCart);

    }

    return (
    <div className="min-h-screen">
      <div className="mt-32 mb-32">
        <h1 className="text-center text-5xl font-bold mb-16 text-[#76453B]">
          Your Added Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto  gap-10 ">
          {carts.map((product) => (
           <SingleCart key={product._id} product={product} handleDelete={handleDelete}></SingleCart>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Cart;