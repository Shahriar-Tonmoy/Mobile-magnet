import React, { useState } from "react";
import { Button } from "react-scroll";

const Orders = ({ orders }) => {
  //States for order details
  const [orderIdOnModal, setOrderIdOnModal] = useState();
  const [customerIdOnModal, setCustomerIdOnModal] = useState();
  const [orderDateOnModal, setOrderDateOnModal] = useState();
  const [shippingAddressOnModal, setShippingAddressOnModal] = useState({});
  const [totalAmountOnModal, setTotalAmountOnModal] = useState();
  const [paymentMethodOnModal, setPaymentMethodOnModal] = useState();
  const [paymentStatusOnModal, setPaymentStatusOnModal] = useState();
  const [shippingStatusOnModal, setShippingStatusOnModal] = useState();

  const openModal = (orderId, customerId, date, address, totalAmount, paymentMethod, paymentStatus, shippingStatus) => {
    setOrderIdOnModal(orderId);
    setCustomerIdOnModal(customerId);
    setOrderDateOnModal(date);
    setShippingAddressOnModal(address);
    setTotalAmountOnModal(totalAmount);
    setPaymentMethodOnModal(paymentMethod);
    setPaymentStatusOnModal(paymentStatus);
    setShippingStatusOnModal(shippingStatus);
    document.getElementById("my_modal_5").showModal();
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-16 text-[#76453B]">
        Orders
      </h1>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg text-[#76453B]">Order Id</th>
              <th className="text-lg text-[#76453B]">Date</th>
              <th className="text-lg text-[#76453B]">Address</th>
              <th className="text-lg text-[#76453B]">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orders.map((order) => (
              <tr key={order.orderId} className="border border-[#76453B]">
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">
                        {order.orderId}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{order.orderDate}</td>
                <td>{order.shippingAddress.street} {order.shippingAddress.city} {order.shippingAddress.country}</td>
                <td>
                  {order.totalAmount}
                </td>

                <th>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}

                  <button
                    className=" h-10 w-20 rounded-lg border-[#76453B] bg-[#76453B] text-white hover:bg-red-950"
                    onClick={() =>
                      openModal(
                        order.orderId,
                        order.customerId,
                        order.orderDate,
                        order.shippingAddress,
                        order.totalAmount,
                        order.paymentMethod,
                        order.paymentStatus,
                        order.shippingStatus
                      )
                    }
                  >
                    Details
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle border-2"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold text-2xl text-[#76453B] mb-7">
                        Order ID: {orderIdOnModal}
                      </h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3">
                        <span className="text-xl">Customer Id:</span> {customerIdOnModal}
                      </h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3">
                        <span className="text-xl">Issue Date:</span> {orderDateOnModal}
                      </h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3">
                        <span className="text-xl">Address:</span>{" "}
                        {shippingAddressOnModal.street} {shippingAddressOnModal.city}{" "}
                        {shippingAddressOnModal.state} {shippingAddressOnModal.zipCode}{" "}
                        {shippingAddressOnModal.country}
                      </h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3">
                        <span className="text-xl">Total Amount:</span> {totalAmountOnModal}
                      </h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3">
                        <span className="text-xl">Payment Method:</span> {paymentMethodOnModal}
                      </h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3">
                        <span className="text-xl">Payment Status:</span> {paymentStatusOnModal}
                      </h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3">
                        <span className="text-xl">Shipping Status:</span> {shippingStatusOnModal}
                      </h3>
                      <div className="modal-action">
                        <form method="dialog">
                         <button className="btn border-[#76453B] bg-[#76453B] text-white hover:bg-red-950">close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
