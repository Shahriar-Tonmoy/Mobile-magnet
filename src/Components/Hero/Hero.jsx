import React from 'react';

const Hero = () => {
    return (
        <div className="hero mt-32">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/pZJ6j64/pngwing-com-12.png"
            className="max-w-sm rounded-lg "
          />
          <div>
            <h1 className="text-6xl text-[#76453B] text-right font-bold">Your Online Destination for Smartphones</h1>
            <p className="py-6 text-2xl text-right">
            Welcome to <span className="text-[#76453B] font-bold">Mobile Magnet</span> – your premier online destination for cutting-edge smartphones. Explore a curated collection of the latest models, from flagship to budget-friendly options. Enjoy a seamless shopping experience with secure transactions, fast shipping, and expert customer support. Upgrade your mobile lifestyle at <span className="text-[#76453B] font-bold">Mobile Magnet</span>!
            </p>
          </div>
        </div>
      </div>
    );
};

export default Hero;