import React, { useEffect, useState } from "react";
import Summary from "../Summary/Summary";
import Customers from "../Customers/Customers";
import Button from "../Button/Button";
import { Link } from "react-scroll";
import Orders from "../Orders/Orders";

import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import Products from "../Products/Products";

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
    <div className="min-h-screen">
      <Summary
        mobiles={mobiles}
        customers={customers}
        orders={orders}
      ></Summary>
      

      <Tabs className="w-full mx-auto mt-10" defaultValue={1}>
        <TabsList>
          <Tab value={1}>Customers</Tab>
          <Tab value={2}>Orders</Tab>
          <Tab value={3}>Products</Tab>
        </TabsList>
        <TabPanel value={1}><Customers customers={customers}></Customers></TabPanel>
        <TabPanel value={2}><Orders orders={orders} ></Orders></TabPanel>
        <TabPanel value={3}><Products mobiles={mobiles}></Products></TabPanel>
      </Tabs>
      {/* <Orders  orders={orders}></Orders> */}
    </div>
  );

};

export default Dashboard;

  const Tab = styled(BaseTab)`
    color: white;
    cursor: pointer;
    background-color: transparent;
    width: 100%;
    line-height: 1.5;
    padding: 8px 12px;
    margin: 6px;
    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: #7E6363;
    }

    &:focus {
      color: #fff;
      outline: 3px solid #76453B;
    }

    &.${tabClasses.selected} {
      background-color: #fff;
      color: #76453B;
    }

    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  const TabPanel = styled(BaseTabPanel)`
    width: 100%;

  `;

  const TabsList = styled(BaseTabsList)(
    ({ theme }) => `
    min-width: 400px;
    background-color: #76453B;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 6px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.4)" : "rgba(0,0,0, 0.2)"
    };
    `
  );
