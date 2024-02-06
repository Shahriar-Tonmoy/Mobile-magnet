import React from "react";

const FAQ = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold mb-16 mt-16 text-[#76453B]">
        Unveiling Clarity
      </h1>

      <div className="collapse collapse-arrow bg-[#76453B]">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium text-[#EEEEEE]">
        What is your return policy
        </div>
        <div className="collapse-content">
          <p className="text-[#EEEEEE]">
          We want you to be completely satisfied with your purchase. If, for any reason, you are not happy with your order, you can return it within 30 days of receiving the product. Please ensure the item is in its original condition with all packaging intact. Visit our 'Returns' page for detailed instructions and initiate the return process.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2 border-[#76453B]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-[#76453B]">
         How can I track my order?
        </div>
        <div className="collapse-content">
          <p className="text-[#76453B]">
          Once your order is confirmed, you will receive a confirmation email with a unique tracking number. You can use this tracking number to monitor the status of your shipment. Additionally, you can log in to your account on our website to check the real-time status of your order.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#76453B]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-white">
        What payment methods are accepted?
        </div>
        <div className="collapse-content">
          <p className="text-white">
          We accept a variety of payment methods to provide you with flexibility. You can pay for your order using credit/debit cards (Visa, MasterCard, American Express), PayPal, and other secure payment gateways. Rest assured, all transactions are encrypted for your security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
