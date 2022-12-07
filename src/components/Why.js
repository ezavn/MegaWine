import React from "react";

const Why = () => {
  return (
    <section className="pb-[40px] md:pb-[50px]">
      <div className="page-container pdMobile">
        <div className="text-center">
          <img
            className="w-[666px] inline-block"
            src="/images/visao.png"
            alt=""
          />
        </div>
        <div className="mx-[40px] hidden md:block">
          <img className="w-full" src="/images/board.png" alt="" />
        </div>
        <div className="block md:hidden">
          <img className="w-full mb-[15px]" src="/images/board1.png" alt="" />
          <img className="w-full" src="/images/board2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Why;
