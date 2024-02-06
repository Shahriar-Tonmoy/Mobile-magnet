import React, { useEffect, useState } from 'react';
import Summary from '../Summary/Summary';
import Customers from '../Customers/Customers';

const Dashboard = () => {
    const [mobiles, setMobiles] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://shahriar-tonmoy.github.io/REPLIQ-DATA/product.json`)
      .then((res) => res.json())
      .then((data) => setMobiles(data));
  }, []);
  useEffect(() => {
    fetch(`https://shahriar-tonmoy.github.io/REPLIQ-DATA/customers.json`)
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);
  useEffect(() => {
    fetch(`https://shahriar-tonmoy.github.io/REPLIQ-DATA/Orders.json`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

    return (
        <div className='min-h-screen'>
            <Summary mobiles={mobiles} customers={customers} orders={orders}></Summary>
            <Customers customers={customers}></Customers>
        </div>
    );
};

export default Dashboard;