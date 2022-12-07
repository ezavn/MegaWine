import React from "react";

const Top = () => {
  return (
    <section className="page-container pb-[80px] md:pb-[140px] pdMobile">
      <div className="flex items-center justify-center text-center mb-[80px] md:mb-[120px]">
        <p className="text-yellow relative w-full max-w-[870px] flex-1 text-[14px] md:text-[20px]">
          <img
            className="absolute bottom-0 left-[20px] md:block hidden"
            srcSet="/images/line-l.png 2x"
            alt=""
          />
          MEGA WINE giới thiệu Danh sách các loại rượu hàng đầu{" "}
          <br className="hidden-mb" /> để Quý khách hàng dễ dàng chọn lựa!
          <img
            className="absolute top-[10px] right-[-20px] md:block hidden"
            srcSet="/images/line-r.png 2x"
            alt=""
          />
        </p>
      </div>
      <div className="md:mx-[30px]">
        <div className="mb-[90px] md:mb-[115px] bg-yellow3 rounded-[16px] relative">
          <img
            className="absolute top-[-60px] md:top-[-78px] left-[50%] translate-x-[-50%] w-[260px] md:w-[600px] h-[90px] md:h-[100px]"
            src="/images/top10-head.png"
            alt=""
          />
          <h2 className="w-full text-red uppercase text-[12px] md:text-[16px] text-center absolute font-semibold top-[-50px] left-[50%] translate-x-[-50%]">
            <span className="leading-[1] text-[30px] md:text-[45px] font-black">
              Top 10
            </span>{" "}
            <br />
            loại{" "}
            <span className="text-[14px] md:text-[24px] font-bold leading-[1]">
              rượu vang bán chạy <br className="block md:hidden" />
            </span>{" "}
            nhất mega wine
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-[10px] gap-y-[10px] md:gap-y-[20px] px-[20px] md:px-[35px] pb-[20px] md:pb-[35px] pt-[40px] md:pt-[55px]">
            <Top10 src="/images/wine-1.png" cash="295.000 vnđ">
              MIRADOR CABERNET <br /> SAUVIGNON
            </Top10>
            <Top10 src="/images/wine-2.png" cash="550.000 vnđ">
              CAMPI RUDI
            </Top10>
            <Top10 src="/images/wine-3.png" cash="590.000 vnđ">
              MOSCATO SPARKLING <br /> SPUMANTE
            </Top10>
            <Top10 src="/images/wine-4.png" cash="610.000 vnđ">
              THIEVERY ZINFANDEL
            </Top10>
            <Top10 src="/images/wine-5.png" cash="650.000 vnđ">
              TALENTO ECO
            </Top10>
            <Top10 src="/images/wine-6.png" cash="690.000 vnđ">
              NAVIGATOR CABERNET <br /> SAUVIGNON
            </Top10>
            <Top10 src="/images/wine-7.png" cash="720.000 vnđ">
              ACUMA
            </Top10>
            <Top10 src="/images/wine-8.png" cash="790.000 vnđ">
              CHATEAU BEL VUE
            </Top10>
            <Top10 src="/images/wine-9.png" cash="1.030.000 vnđ">
              MILLEFIORI
            </Top10>
            <Top10 src="/images/wine-10.png" cash="1.400.000 vnđ">
              KHỔNG TƯỚC <br /> MONTEPULCIANO
            </Top10>
          </div>
        </div>
        <div className="mb-[90px] md:mb-[115px] bg-yellow3 rounded-[16px] relative">
          <img
            className="absolute top-[-60px] md:top-[-78px] left-[50%] translate-x-[-50%] w-[260px] md:w-[600px] h-[90px] md:h-[100px]"
            src="/images/top10-head.png"
            alt=""
          />
          <h2 className="w-full text-red uppercase text-[12px] md:text-[16px] text-center absolute font-semibold top-[-50px] left-[50%] translate-x-[-50%]">
            <span className="leading-[1] text-[30px] md:text-[45px] font-black">
              Top 10
            </span>{" "}
            <br />
            loại{" "}
            <span className="text-[14px] md:text-[24px] font-bold leading-[1]">
              rượu dành cho nam
            </span>{" "}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-[10px] gap-y-[10px] md:gap-y-[20px] px-[20px] md:px-[35px] pb-[20px] md:pb-[35px] pt-[40px] md:pt-[55px]">
            <Top10 src="/images/wine-11.png" cash="460.000 vnđ">
              CHATEAU BEL AIR
            </Top10>
            <Top10 src="/images/wine-12.png" cash="495.000 vnđ">
              GEARBOX CABERNET <br /> SAUVIGNON
            </Top10>
            <Top10 src="/images/wine-13.png" cash="500.000 vnđ">
              ALTO VUELO RESERVA <br /> SYRAH
            </Top10>
            <Top10 src="/images/wine-14.png" cash="590.000 vnđ">
              CHATEAU DUPA
            </Top10>
            <Top10 src="/images/wine-15.png" cash="680.000 vnđ">
              SERECTO CABERNET <br /> SAUVIGON
            </Top10>
            <Top10 src="/images/wine-16.png" cash="890.000 vnđ">
              XANTHOS SYRAH CALI
            </Top10>
            <Top10 src="/images/wine-17.png" cash="890.000 vnđ">
              OCTOPODA CABERNET <br /> SAUVIGON CALI
            </Top10>
            <Top10 src="/images/wine-18.png" cash="1.250.000 vnđ">
              BELAN
            </Top10>
            <Top10 src="/images/wine-19.png" cash="1.350.000 vnđ">
              FABIANO RIPASSO
            </Top10>
            <Top10 src="/images/wine-20.png" cash="1.400.000 vnđ">
              SYRAH 17
            </Top10>
          </div>
        </div>
        <div className="mb-[40px] md:mb-[60px] bg-yellow3 rounded-[16px] relative">
          <img
            className="absolute top-[-60px] md:top-[-78px] left-[50%] translate-x-[-50%] w-[260px] md:w-[600px] h-[90px] md:h-[100px]"
            src="/images/top10-head.png"
            alt=""
          />
          <h2 className="w-full text-red uppercase text-[12px] md:text-[16px] text-center absolute font-semibold top-[-50px] left-[50%] translate-x-[-50%]">
            <span className="leading-[1] text-[30px] md:text-[45px] font-black">
              Top 10
            </span>{" "}
            <br />
            loại{" "}
            <span className="text-[14px] md:text-[24px] font-bold leading-[1]">
              rượu dành cho nữ
            </span>{" "}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-[10px] gap-y-[10px] md:gap-y-[20px] px-[20px] md:px-[35px] pb-[20px] md:pb-[35px] pt-[40px] md:pt-[55px]">
            <Top10 src="/images/wine-21.png" cash="390.000 vnđ">
              ALTO VUELO CABERNET <br /> SAUVIGNON
            </Top10>
            <Top10 src="/images/wine-22.png" cash="490.000 vnđ">
              CHATEAU CURTON
            </Top10>
            <Top10 src="/images/wine-23.png" cash="495.000 vnđ">
              GEARBOX PINOT NOIR
            </Top10>
            <Top10 src="/images/wine-24.png" cash="495.000 vnđ">
              SPATLESE KENER
            </Top10>
            <Top10 src="/images/wine-25.png" cash="550 .000 vnđ">
              AUSLESE
            </Top10>
            <Top10 src="/images/wine-26.png" cash="730.000 vnđ">
              PASSITIVO APASSIMENTO <br /> PRIMITIVO ORGANIC
            </Top10>
            <Top10 src="/images/wine-27.png" cash="780.000 vnđ">
              LINDSAY MOSCATO <br /> ROSE
            </Top10>
            <Top10 src="/images/wine-28.png" cash="950.000 vnđ">
              CLETUS
            </Top10>
            <Top10 src="/images/wine-29.png" cash="980.000 vnđ">
              NAVIGATOR ROSE
            </Top10>
            <Top10 src="/images/wine-30.png" cash="1.200.000 vnđ">
              GUSTIN
            </Top10>
          </div>
        </div>
        <div>
          <h2 className="uppercase text-[20px] md:text-[30px] text-yellow text-center mb-[20px] md:mb-[30px]">
            <span className="leading-[1] text-[42px] md:text-[60px] font-extrabold">
              top 8
            </span>{" "}
            <br />
            sản phẩm dành cho người{" "}
            <span className="text-[30px] md:text-[40px] font-bold leading-[1]">
              sành rượu
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[10px] gap-y-[10px] md:gap-y-[20px]">
            <TopItem src="/images/top8-1.png" cash="295.000 vnđ">
              cuvee 16
            </TopItem>
            <TopItem src="/images/top8-2.png" cash="295.000 vnđ">
              chateau orme brun <br />
              saint emilion
            </TopItem>
            <TopItem src="/images/top8-3.png" cash="295.000 vnđ">
              cuvee 17
            </TopItem>
            <TopItem src="/images/top8-4.png" cash="295.000 vnđ">
              vik a
            </TopItem>
            <TopItem src="/images/top8-5.png" cash="295.000 vnđ">
              navigator cabernet <br />
              sauvignon napa valley
            </TopItem>
            <TopItem src="/images/top8-6.png" cash="295.000 vnđ">
              goru 18m
            </TopItem>
            <TopItem src="/images/top8-7.png" cash="295.000 vnđ">
              fabiano amarone
            </TopItem>
            <TopItem src="/images/top8-8.png" cash="295.000 vnđ">
              domus aurea
            </TopItem>
          </div>
        </div>
      </div>
    </section>
  );
};

const Top10 = ({ src, children, cash }) => {
  return (
    <div className="flex flex-col">
      <div className="flex-shrink-0">
        <img src={src} alt="" />
      </div>
      <div className="uppercase py-[10px] px-[5px] text-center flex-1 flex justify-between flex-col">
        <p className="text-red text-[10px] md:text-[13px] font-bold leading-[1] mb-[6px]">
          {children}
        </p>
        <div className="text-yellow2 flex items-center justify-center bg-red leading-[1] rounded-[20px] font-semibold py-[4px]">
          {cash}
        </div>
      </div>
    </div>
  );
};

const TopItem = ({ src, children, cash }) => {
  return (
    <div className="flex flex-col">
      <div className="mb-[15px] flex-shrink-0">
        <img src={src} alt="" />
      </div>
      <div className="flex flex-col flex-1 font-semibold text-center uppercase text-yellow">
        <p className="text-[12px] md:text-[16px] mb-[10px]">{children}</p>
        <img className="mt-auto" srcSet="/images/light.png 2x" alt="" />
        <h4 className="">{cash}</h4>
      </div>
    </div>
  );
};

export default Top;
