import React from "react";

const Footer = () => {
  return (
    <section className="page-container pt-[50px] md:pt-[70px] relative">
      <div className="text-center pb-[96px] md:pb-[180px] pdMobile relative z-[10] max-w-[700px] mx-auto">
        <span className="inline-block mb-[20px] md:mb-[30px] md:w-auto w-[200px]">
          <img src="/images/logo.png" alt="" />
        </span>
        <div className="text-center">
          <p className="font-bold text-[20px] md:text-[34px] uppercase mb-[10px] md:mb-[30px]">
            thông tin liên hệ mega wine
          </p>
          <p className="text-[13px] md:text-[18px] text-justify flex items-start gap-x-[5px] md:gap-x-[10px]">
            <img
              className="w-[20px] md:w-[32px]"
              src="/icons/office.png"
              alt=""
            />{" "}
            <span>
              Văn phòng: số 200 Đường D, Khu đô thị Lakeview City, Phường An
              Phú, TP Thủ Đức (Quận 2)
            </span>
          </p>
          <p className="text-[13px] md:text-[18px] text-justify flex items-start gap-x-[5px] md:gap-x-[10px]">
            <img
              className="w-[20px] md:w-[32px]"
              src="/icons/showroom.png"
              alt=""
            />
            <span>
              Showroom: SAV.3-00.06, The Sun Avenue, 28 Đường Mai Chí Thọ,
              Phường An Phú, TP Thủ Đức (Quận 2)
            </span>
          </p>
          <p className="text-justify md:text-center text-[18px] md:text-[32px] font-bold">
            Hotline: 0938 785 081 - 0909 111 925
          </p>
          <p className="text-[13px] md:text-[18px] flex flex-col text-justify">
            <a
              className="inline-flex items-center gap-x-[5px] md:gap-x-[10px]"
              href="mailto:dathang@ruouvanglejus.com.vn"
            >
              <img
                className="w-[20px] md:w-[32px]"
                src="/icons/email.png"
                alt=""
              />{" "}
              Email: dathang@ruouvanglejus.com.vn
            </a>
            <a
              className="inline-flex items-center gap-x-[5px] md:gap-x-[10px]"
              href="https://www.facebook.com/megawinevn/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[20px] md:w-[32px]"
                src="/icons/facebook.png"
                alt=""
              />{" "}
              Fanpage: https://www.facebook.com/megawinevn
            </a>
            <a
              className="inline-flex items-center gap-x-[5px] md:gap-x-[10px]"
              href="https://megawine.vn/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[20px] md:w-[32px]"
                src="/icons/fanpage.png"
                alt=""
              />{" "}
              Website: https://megawine.vn
            </a>
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <img src="/images/footer-bg.png" alt="" />
      </div>
    </section>
  );
};

export default Footer;
