import React from "react";

const Customers = ({ customers }) => {
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
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    Details
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">

                      <h3 className="font-bold text-lg">Hello!</h3>
                      <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={customer.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                      <p className="py-4">
                        Press ESC key or click the button below to close
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
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
