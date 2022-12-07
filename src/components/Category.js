import React from "react";
import { usePopup } from "../contexts/popupContext";

const Category = () => {
  const {
    setShowOne,
    setShowTwo,
    setShowThree,
    setShowFour,
    setShowFive,
    setShowSix,
    setShowSeven,
    setShowEight,
    setShowNine,
  } = usePopup();
  return (
    <section className="pb-[70px] md:pb-[140px]">
      <div className="font-medium text-justify md:text-center page-container text-yellow">
        <p className="pdMobile mb-[20px] md:mb-0">
          Set
          <span className="font-semibold text-white">
            {" "}
            QUÀ TẾT MEGA WINE 2023
          </span>{" "}
          được lấy cảm hứng từ SỰ GẦN GŨI của những loại mứt tết,{" "}
          <br className="hidden-mb" /> hạt dinh dưỡng mang hương vị Tết xưa,{" "}
          <br className="hidden-mb" /> và SỰ ĐẲNG CẤP của những chai rượu vang
          nhập khẩu được chú trọng từ hình thức bao bì đến chất lượng bên trong.
        </p>
        <p className="pdMobile">
          Mỗi{" "}
          <span className="font-semibold text-white">
            SET QUÀ TẾT MEGA WINE
          </span>{" "}
          tượng trưng cho những lời chúc an khang, <br className="hidden-mb" />{" "}
          hạnh phúc và thịnh vượng trong năm mới Quý Mão - 2023 với sự đáp ứng
          đủ các tiêu chí về sự sang trọng - đẳng cấp - tinh tế.
        </p>
        <div className="relative">
          <img src="/images/may.png" alt="" />
          <img
            className="absolute bottom-[-45px] left-[50%] translate-x-[-50%] w-[666px]"
            src="/images/danhmuc.png"
            alt=""
          />
        </div>
        <p className="text-justify md:text-center text-white italic mb-[15px] mt-[45px] md:my-[20px] pdMobile">
          <span className="font-semibold">
            SET HỘP QUÀ TẾT CHIA LÀM 2 PHẦN:
          </span>{" "}
          <br />
          + Phần hộp quà không rượu: Cố định <br />
          + Phần rượu: Khách hàng lựa chọn phân khúc theo mong muốn và có chiết
          khấu theo số lượng <br />
          (Giá set quà chưa bao gồm VAT và phí vận chuyển)
        </p>
        <div className="md:mx-[60px] grid grid-cols-2 md:grid-cols-3 relative">
          <div className="absolute top-[80px] left-[-106px] md:block hidden">
            <img
              className="ml-[35px] arrow"
              srcSet="/icons/arrow.png 2x"
              alt=""
            />
            <p className="text-white max-w-[120px] text-left">
              click vào để xem thông tin set quà tết
            </p>
          </div>
          <div className="category-item" onClick={() => setShowOne(true)}>
            <img src="/images/set1.png" alt="" />
          </div>
          <div className="category-item" onClick={() => setShowTwo(true)}>
            <img src="/images/set2.png" alt="" />
          </div>
          <div className="category-item" onClick={() => setShowThree(true)}>
            <img src="/images/set3.png" alt="" />
          </div>
          <div className="category-item" onClick={() => setShowFour(true)}>
            <img src="/images/set4.png" alt="" />
          </div>
          <div className="category-item" onClick={() => setShowFive(true)}>
            <img src="/images/set5.png" alt="" />
          </div>
          <div className="category-item" onClick={() => setShowSix(true)}>
            <img src="/images/set6.png" alt="" />
          </div>
          <div className="category-item" onClick={() => setShowSeven(true)}>
            <img src="/images/set7.png" alt="" />
          </div>
          <div className="category-item" onClick={() => setShowEight(true)}>
            <img src="/images/set8.png" alt="" />
          </div>
          <div className="category-item" onClick={() => setShowNine(true)}>
            <img src="/images/set9.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
