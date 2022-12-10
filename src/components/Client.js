import React from "react";
import Slider from "react-slick";

const Client = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "ease",
    nextArrow: <ClientNext />,
    prevArrow: <ClientPrev />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };
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
        <div className="client-slide">
          <Slider {...settings}>
            <div className="client-slide-item">
              <img src="/images/client-1.jpg" alt="" />
            </div>
            <div className="client-slide-item">
              <img src="/images/client-2.jpg" alt="" />
            </div>
            <div className="client-slide-item">
              <img src="/images/client-3.jpg" alt="" />
            </div>
            <div className="client-slide-item">
              <img src="/images/client-4.jpg" alt="" />
            </div>
            <div className="client-slide-item">
              <img src="/images/client-5.jpg" alt="" />
            </div>
            <div className="client-slide-item">
              <img src="/images/client-6.jpg" alt="" />
            </div>
            <div className="client-slide-item">
              <img src="/images/client-7.jpg" alt="" />
            </div>
          </Slider>
        </div>
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

function ClientNext(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`client-next ${className}`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    />
  );
}

function ClientPrev(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`client-prev ${className}`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    />
  );
}

export default Client;
