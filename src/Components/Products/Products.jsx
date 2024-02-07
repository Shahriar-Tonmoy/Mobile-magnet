import React, { useState } from "react";
import { Button } from "react-scroll";
import { FaPlus } from "react-icons/fa";
import AddProducts from "../AddProducts/AddProducts";

const Products = ({ mobiles }) => {
  //States for mobile details
  const [imageOnModal, setImageOnModal] = useState();
  const [brandOnModal, setBrandOnModal] = useState();
  const [modelOnModal, setModelOnModal] = useState();
  const [priceOnModal, setPriceOnModal] = useState();
  const [storageOnModal, setStorageOnModal] = useState();
  const [displayOnModal, setDisplayOnModal] = useState();
  const [cameraOnModal, setCameraOnModal] = useState();
  const [batteryOnModal, setBatteryOnModal] = useState();
  const [detailsOnModal, setDetailsOnModal] = useState();
  const [quantityOnModal, setQuantityOnModal] = useState();

  const openModal = (
    image,
    brand,
    model,
    price,
    storage,
    display,
    camera,
    battery,
    details,
    quantity
  ) => {
    setImageOnModal(image);
    setBrandOnModal(brand);
    setModelOnModal(model);
    setPriceOnModal(price);
    setStorageOnModal(storage);
    setDisplayOnModal(display);
    setCameraOnModal(camera);
    setBatteryOnModal(battery);
    setDetailsOnModal(details);
    setQuantityOnModal(quantity);
    document.getElementById("my_modal_5").showModal();
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-16">
        <h1 className="text-center text-3xl font-bold  text-[#76453B]">
          Mobiles
        </h1>
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg text-[#76453B]">Name</th>
              <th className="text-lg text-[#76453B]">Price</th>
              <th className="text-lg text-[#76453B]">Storage</th>
              <th className="text-lg text-[#76453B]">Quantity</th>
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
                  <AddProducts></AddProducts>
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
            {mobiles.map((mobile) => (
              <tr key={mobile._id} className="border border-[#76453B]">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={mobile.imageURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {mobile.brand} {mobile.model}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{mobile.price}</td>
                <td>{mobile.storage}</td>
                <td>{mobile.quantity}</td>

                <th>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}

                  <button
                    className=" h-10 w-20 rounded-lg border-[#76453B] bg-[#76453B] text-white hover:bg-red-950"
                    onClick={() =>
                      openModal(
                        mobile.imageURL,
                        mobile.brand,
                        mobile.model,
                        mobile.price,
                        mobile.storage,
                        mobile.display,
                        mobile.camera,
                        mobile.battery,
                        mobile.details,
                        mobile.quantity
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
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={imageOnModal}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <h3 className="font-bold text-2xl text-[#76453B] mb-7">
                        {brandOnModal} {modelOnModal}
                      </h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3">
                        <span className="text-xl">Quantity:</span>{" "}
                        {quantityOnModal}
                      </h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3">
                        <span className="text-xl">Price:</span> {priceOnModal}
                      </h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3">
                        <span className="text-xl">Storage:</span>{" "}
                        {storageOnModal}
                      </h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3">
                        <span className="text-xl">Display:</span>{" "}
                        {displayOnModal}
                      </h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3">
                        <span className="text-xl">Camera:</span> {cameraOnModal}
                      </h3>
                      <h3 className="font-bold text-lg text-[#76453B] mb-3">
                        <span className="text-xl">Battery:</span>{" "}
                        {batteryOnModal}
                      </h3>
                      <h3 className="font-bold text-lg text-gray-600 mb-3">
                        <span className="text-xl text-[#76453B]">Details:</span>{" "}
                        {detailsOnModal}
                      </h3>

                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn border-[#76453B] bg-[#76453B] text-white hover:bg-red-950">
                            close
                          </button>
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

export default Products;
