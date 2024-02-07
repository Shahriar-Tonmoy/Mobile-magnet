import { ButtonBase } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-scroll';
import Button1 from '../Button1/Button';

const Login = () => {
    return (
        <div className="hero min-h-screen">
      
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border border-[#76453B] bg-base-100 py-20 px-5">
          <h1 className="text-[#76453B] text-center text-3xl font-bold">
            Sign in
          </h1>
          <form  className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <Button1 text={"Sign In"} ></Button1>
            </div>
          </form>
          <div className="text-center">
            <p>
              New here?{" "}
              <Link className="text-[#76453B] underline" to="/registration">
                Sign Up
              </Link>
            </p>
            <br />
            <br />
            <p>
              Sign in with{" "}
              <button>
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#DB4437]">OO</span>
                <span className="text-[#F4B400]">G</span>
                <span className="text-[#0F9D58]">LE</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;