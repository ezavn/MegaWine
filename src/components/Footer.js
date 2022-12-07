import React from "react";

const Footer = () => {
  return (
    <section className="page-container pt-[50px] md:pt-[70px] relative">
      <div className="text-center pb-[70px] md:pb-[160px] pdMobile">
        <span className="inline-block mb-[20px] md:mb-[30px] md:w-auto w-[200px]">
          <img src="/images/logo.png" alt="" />
        </span>
        <div className="text-center">
          <p className="font-bold text-[20px] md:text-[34px] uppercase mb-[10px] md:mb-[30px]">
            thông tin liên hệ mega wine
          </p>
          <p className="text-[13px] md:text-[18px]">
            Văn phòng: số 200 Đường D, Khu đô thị Lakeview City, Phường An Phú,
            TP Thủ Đức (Quận 2) <br /> Showroom: SAV.3-00.06, The Sun Avenue, 28
            Đường Mai Chí Thọ, Phường An Phú, TP Thủ Đức (Quận 2)
          </p>
          <p className="text-[24px] md:text-[47px] font-bold">
            Hotline: 093 878 50 81
          </p>
          <p className="text-[13px] md:text-[18px] flex flex-col">
            <a href="mailto:">Email:</a>
            <a
              href="https://www.facebook.com/megawinevn/"
              target="_blank"
              rel="noreferrer"
            >
              Fanpage: https://www.facebook.com/megawinevn
            </a>
            <a href="https://mega-wine.vn/" target="_blank" rel="noreferrer">
              Website: https://mega-wine.vn
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
