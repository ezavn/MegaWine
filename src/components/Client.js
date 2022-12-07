import React from "react";

const Client = () => {
  return (
    <section className="relative w-full page-container">
      <div className="absolute top-0 left-0">
        <img
          className="w-[140px] md:w-[320px]"
          src="/images/tree-l.png"
          alt=""
        />
      </div>
      <div className="">
        <h2 className="text-center font-black pt-[110px] md:pt-[150px]">
          <p className="text-[16px] md:text-[36px] leading-[1] mb-[10px] md:mb-[15px]">
            HÀNG TRĂM DOANH NGHIỆP
          </p>
          <p className="text-[24px] md:text-[52px] leading-[1] mb-[10px] md:mb-[15px]">
            ĐÃ TRỞ THÀNH
          </p>
          <div className="text-[20px] md:text-[40px] leading-[1]">
            <p className="relative mx-auto w-fit z-[5]">
              KHÁCH HÀNG CỦA MEGA WINE
              <div className="w-[350px] md:w-[700px] h-[6px] md:h-[12px] bg-[#f7a44d] absolute bottom-[1px] md:bottom-[2px] left-[-8px] md:left-[-15px] rounded-[100rem] z-[-1]"></div>
            </p>
          </div>
        </h2>
      </div>
      <div className="absolute top-0 right-0">
        <img
          className="w-[170px] md:w-[420px]"
          src="/images/tree-r.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Client;
