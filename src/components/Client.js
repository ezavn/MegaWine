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
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className="client-slide-item">
              <img
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className="client-slide-item">
              <img
                src="https://images.unsplash.com/photo-1558670460-cad0c19b1840?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt=""
              />
            </div>
            <div className="client-slide-item">
              <img
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className="client-slide-item">
              <img
                src="https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt=""
              />
            </div>
            <div className="client-slide-item">
              <img
                src="https://images.unsplash.com/photo-1562673478-900ecbd319cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt=""
              />
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
