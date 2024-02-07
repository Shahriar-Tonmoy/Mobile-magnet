import React from 'react';

const AddProducts = () => {
    return (
        <div>
                    <div className="hero">
                      <div className="hero-content flex-col lg:flex-row-reverse w-full">
                        <div className="text-center lg:text-left"></div>
                        <div className="card flex-shrink-0 w-full  shadow-2xl border border-[#76453B] bg-base-100  px-5">
                          <h1 className="text-[#76453B] text-center text-3xl font-bold">
                            Add New Mobile
                          </h1>
                          <form
                            className="card-body"                           
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">Brand</span>
                                </label>
                                <input
                                  type="text"
                                  
                                  placeholder="Brand"
                                  className="input input-bordered"
                                  name="email"
                                  readOnly
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">Model</span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Model"
                                  className="input input-bordered"
                                  name="jobTitle"
                                  required
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">Price</span>
                                </label>
                                <input
                                  type="text"
                                  className="input input-bordered"
                                  placeholder="Price"
                                  name="deadline"
                                  required
                                  min={new Date().toISOString().split("T")[0]}
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">
                                    Storage
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Storage"
                                  className="input input-bordered"
                                  name="description"
                                  required
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">
                                    Camera
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Camera"
                                  className="input input-bordered"
                                  name="minimumPrice"
                                  required
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">
                                    Battery
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Battery"
                                  className="input input-bordered"
                                  name="maximumPrice"
                                  required
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">Details</span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Details"
                                  className="input input-bordered"
                                  name="imageURL"
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

export default AddProducts;