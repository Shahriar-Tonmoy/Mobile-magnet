import React from "react";

const Summary = ({mobiles, customers, orders}) => {

  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow mt-16 border border-[#76453B] w-[50%]">
      <div className="stat">
        <div className="stat-title text-xl">Products</div>
        <div className="stat-value text-[#76453B] text-5xl font-extrabold">{mobiles.length}</div>
        <div className="stat-desc text-xl">Jan 1st - Feb 1st</div>
      </div>

      <div className="stat">
        <div className="stat-title text-xl">Customers</div>
        <div className="stat-value text-[#76453B] text-5xl font-extrabold">{customers.length}</div>
        <div className="stat-desc text-xl">↗︎ 400 (22%)</div>
      </div>

      <div className="stat">
        <div className="stat-title text-xl">Total Orders</div>
        <div className="stat-value text-[#76453B] text-5xl font-extrabold">{orders.length}</div>
        <div className="stat-desc text-xl">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
};

export default Summary;
