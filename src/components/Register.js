import React from "react";
import Form from "./Form";

const Register = () => {
  return (
    <section className="page-container pb-[40px] md:pb-[50px] pdMobile">
      <div className="register rounded-[20px] flex flex-col md:flex-row md:gap-[40px] md:pb-[40px] md:pr-[45px] md:pl-[70px] md:pt-[60px] px-[20px] py-[30px] relative">
        <div className="absolute top-0 left-0 w-[60px] md:w-[70px]">
          <img src="/images/f.png" alt="" />
        </div>
        <div className="absolute top-[-36px] md:top-[-68px] left-[50%] translate-x-[-50%] w-[180px] md:w-[350px]">
          <img src="/images/register-c.png" alt="" />
        </div>
        <div className="absolute top-0 right-0 w-[90px] md:w-[120px]">
          <img src="/images/register-r.png" alt="" />
        </div>
        <div className="flex-1 font-medium text-justify text-brown relative z-[2]">
          <h2 className="text-[32px] text-center md:text-left md:text-[40px] font-bold uppercase">
            Liên hệ ngay
          </h2>
          <p className="mb-[10px] md:mb-[30px]">
            Để được tư vấn chi tiết về sản phầm và các dịch vụ đi kèm
          </p>
          <p className="mb-[10px] md:mb-[30px]">
            * Lựa chọn Quà tết với những thức quà tuyển tính tế cùng rượu vang
            đẳng cấp.
          </p>
          <p className="mb-[10px] md:mb-[30px]">
            * MEGA WINE đồng hành cùng Quý khách để tạo nên một cái Tết Khởi sắc
            - Vinh hoa thông qua Set quà Tết lịch sự, tinh tế.
          </p>
        </div>
        <div className="md:w-[600px] flex-shrink-0">
          <p className="md:text-[18px] text-[16px] text-center md:text-left text-brown font-medium">
            ĐỂ LẠI THÔNG TIN NHẬN TƯ VẤN MIỄN PHÍ
          </p>
          <p className="text-center md:text-left text-[20px] md:text-[25px] text-brown uppercase font-medium">
            <span className="font-bold">ưu đãi</span> và{" "}
            <span className="font-bold">chiết khấu cao</span> dành cho{" "}
            <span className="font-bold">cộng tác viên</span> hoặc{" "}
            <span className="font-bold">nhà phân phối</span>
          </p>
          <div className="mt-[20px] md:mt-[50px]">
            <Form></Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
