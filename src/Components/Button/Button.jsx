import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="btn border-[#76453B] bg-[#76453B] text-white hover:bg-red-950">
        {text}
      </button>
    </div>
  );
};

export default Button;
