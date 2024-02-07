import React from 'react';

const AddCustomer = () => {
    return (
        <div>
                    <div className="hero">
                      <div className="hero-content flex-col lg:flex-row-reverse w-full">
                        <div className="text-center lg:text-left"></div>
                        <div className="card flex-shrink-0 w-full  shadow-2xl border border-[#76453B] bg-base-100  px-5">
                          <h1 className="text-[#76453B] text-center text-3xl font-bold">
                            Add New Customer
                          </h1>
                          <form
                            className="card-body"                           
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">First Name</span>
                                </label>
                                <input
                                  type="text"
                                  
                                  placeholder="First Name"
                                  className="input input-bordered"
                                  name="email"
                                  readOnly
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">Last Name</span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Last Name"
                                  className="input input-bordered"
                                  name="jobTitle"
                                  required
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">Email</span>
                                </label>
                                <input
                                  type="text"
                                  className="input input-bordered"
                                  placeholder="Email"
                                  name="deadline"
                                  required
                                  min={new Date().toISOString().split("T")[0]}
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">
                                    Phone
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Phone"
                                  className="input input-bordered"
                                  name="description"
                                  required
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">
                                    Address
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Address"
                                  className="input input-bordered"
                                  name="minimumPrice"
                                  required
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">Image</span>
                                </label>
                                <input type="file" id="fileInput" name="fileInput" />
                              </div>
                            </div>
                            <div className="form-control mt-6">
                              <button className="btn border-[#76453B] bg-[#76453B] text-white hover:bg-red-950">
                                Add
                              </button>
                            </div>
                          </form>
                          <div className="text-center">
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    );
};

export default AddCustomer;