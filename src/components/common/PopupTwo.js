import React from "react";
import { usePopup } from "../../contexts/popupContext";

const PopupTwo = () => {
  const { showTwo, setShowTwo } = usePopup();
  return (
    <>
      {showTwo ? (
        <div className="overlay">
          <div className="bg-[#AE1A19] rounded-[20px] w-[320px] md:w-[833px] relative flex flex-col md:flex-row items-end mt-[40px] md:mt-[60px] z-[10]">
            <div className="absolute top-[-50px] md:top-[-80px] left-[-30px] md:left-[-56px] w-[200px] md:w-auto">
              <img srcSet="/images/decor1.png 2x" alt="" />
            </div>
            <div className="absolute bottom-[-30px] right-[-40px] md:bottom-[-45px] md:right-[-85px] w-[150px] md:w-auto">
              <img srcSet="/images/decor2.png 2x" alt="" />
            </div>
            <div className="pt-[80px] pb-[20px] md:pb-[30px] pl-[28px] flex-1">
              <p className="text-[14px] md:text-[18px]">
                <span className="text-[24px] md:text-[36px] leading-[1] md:inline-block hidden">
                  GIÁ CỦA SET QUÀ
                </span>{" "}
                <span className="text-[16px] leading-[1] inline-block md:hidden">
                  GIÁ CỦA SET QUÀ TÂN XUÂN
                </span>{" "}
                <br />
                (Chưa bao gồm rượu)
              </p>
              <h3 className="text-[32px] md:text-[54px] text-[#FFD99B] font-bold leading-[1] mb-[10px] md:mb-[20px]">
                2.030.000 VNĐ
              </h3>
              <h4 className="text-[20px] md:text-[32px] font-bold leading-[1] mb-[10px] md:mb-[15px]">
                SET QUÀ BAO GỒM:
              </h4>
              <div className="flex flex-col font-medium">
                <p>
                  - Rượu vang MIRADOR hoặc có thể thay thế{" "}
                  <br className="hidden-mb" /> bằng loại vang khác tùy theo yêu
                  cầu KH
                </p>
                <p>- Kẹo hồng sâm KGC hộp thiếc 240gr </p>
                <p>- Nước hồng sâm Saimdang cao cấp hộp 10 goid </p>
                <p>- Sâm lát tẩm mật ong Samiya hộp 200gr</p>
                <p>
                  - Bánh chocopie Hàn/ Nhật/ hoặc tương đương tuỳ thị trường
                </p>
                <p>- Bánh COOKIE Chocolate Hàn </p>
                <p>- Nước hồng sâm Won hộp 5 gói - 2 hộp </p>
                <p>- Khay đầu lân kèm túi xách vải đỏ </p>
              </div>
            </div>
            <div className="pt-[30px] md:block hidden">
              <img
                className="w-[350px] h-[480px]"
                srcSet="/images/tanxuan.png 2x"
                alt=""
              />
            </div>
            <div
              className="absolute bottom-[-80px] md:bottom-[-100px] left-[50%] translate-x-[-50%] cursor-pointer h-[80px] md:h-[100px]"
              onClick={() => setShowTwo(false)}
            >
              <img
                className="h-full"
                srcSet="/icons/popup-close.png 2x"
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PopupTwo;
