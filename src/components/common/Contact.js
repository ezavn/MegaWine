import React from "react";

const Contact = () => {
  return (
    <div className="fixed bottom-[20px] left-0 md:left-[20px] w-[80px] h-[80px] z-[99]">
      <a
        href="tel:093 878 50 81"
        className="inline-block w-full h-full ringing-bell faa-ring animated"
      >
        <img className="w-[100px]" src="/icons/phone.png" alt="" />
      </a>
    </div>
  );
};

export default Contact;
