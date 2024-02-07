import React, { useState } from "react";
import Button from "../Button/Button";
import { FaPlus } from "react-icons/fa";
import AddCustomer from "../AddCustomer/AddCustomer";

const Customers = ({ customers }) => {

    //States for customer details
    const [imageOnModal, setImageOnModal] = useState();
    const [firstNameOnModal, setFirstNameOnModal] = useState();
    const [lastNameOnModal, setLastNameOnModal] = useState();
    const [ordersOnModal, setOrdersOnModal] = useState();
    const [emailOnModal, setEmailOnModal] = useState();
    const [phoneOnModal, setPhoneOnModal] = useState();
    const [addressOnModal, setAddressOnModal] = useState({});

    const openModal = (image, firstName, lastName, email, phone, address, orders) =>{
        setImageOnModal(image);
        setFirstNameOnModal(firstName);
        setOrdersOnModal(orders);
        setLastNameOnModal(lastName);
        setEmailOnModal(email);
        setPhoneOnModal(phone);
        setAddressOnModal(address);
        document.getElementById("my_modal_5").showModal();
    }
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-16 text-[#76453B]">
        Customers
      </h1>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg text-[#76453B]">Name</th>
              <th className="text-lg text-[#76453B]">Email</th>
              <th className="text-lg text-[#76453B]">Phone</th>
              <th className="text-lg text-[#76453B]">Address</th>
              <th className="text-lg text-[#76453B] text-start">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  <FaPlus className="text-[#76453B]" />
                </button>
              </th>
              <dialog
                id="my_modal_4"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <AddCustomer></AddCustomer>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn border-[#76453B] bg-[#76453B] text-white hover:bg-red-950">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {customers.map((customer) => (
              <tr key={customer._id} className="border border-[#76453B]">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={customer.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {customer.firstName} {customer.lastName}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>
                  {customer.address.street}, {customer.address.city}
                </td>

                <th>
                  
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
 
                  <button
                    className=" h-10 w-20 rounded-lg border-[#76453B] bg-[#76453B] text-white hover:bg-red-950"
                    onClick={() =>
                        openModal(customer.image, customer.firstName, customer.lastName, customer.phone, customer.email, customer.address, customer.orders)
                      
                    }
                  >
                    Details
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle border-2"
                  >
                    <div className="modal-box">
                      <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={imageOnModal}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                      <h3 className="font-bold text-2xl text-[#76453B] mb-7">{firstNameOnModal} {lastNameOnModal}</h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3"><span className="text-xl">No. of Orders:</span> {ordersOnModal}</h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3"><span className="text-xl">Email:</span> {emailOnModal}</h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3"><span className="text-xl">Phone:</span> {phoneOnModal}</h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3"><span className="text-xl">Address:</span> {addressOnModal.street} {addressOnModal.city} {addressOnModal.state} {addressOnModal.zipCode} {addressOnModal.country}</h3>
                      <div className="modal-action">
                        <form method="dialog">
                          <Button text={"Close"}></Button>
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

export default Customers;
