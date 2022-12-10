import React from "react";
import { usePopup } from "../../contexts/popupContext";

const PopupOne = () => {
  const { showOne, setShowOne } = usePopup();
  return (
    <>
      {showOne ? (
        <div className="overlay">
          <div className="bg-[#660C07] rounded-[20px] w-[320px] md:w-[833px] relative flex flex-col md:flex-row items-end mt-[40px] md:mt-[60px] z-[10]">
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
                  GIÁ CỦA SET QUÀ PHÚ QUÝ
                </span>{" "}
                <br />
                (Chưa bao gồm rượu)
              </p>
              <h3 className="text-[32px] md:text-[54px] text-[#FFD99B] font-bold leading-[1] mb-[15px] md:mb-[30px]">
                930.000 VNĐ
              </h3>
              <h4 className="text-[20px] md:text-[32px] font-bold leading-[1] mb-[10px] md:mb-[15px]">
                SET QUÀ BAO GỒM:
              </h4>
              <div className="font-medium flex flex-col gap-[6px]">
                <p>
                  - Rượu vang DUPA hoặc có thể thay thế{" "}
                  <br className="hidden-mb" /> bằng loại vang khác tùy theo yêu
                  cầu KH{" "}
                </p>
                <p>- Trà sâm KORE hộp 100 gói </p>
                <p>- Nước hồng sâm Won hộp 5 gói</p>
                <p>- Kẹo hồng sâm KGC hộp thiếc 240gr </p>
                <p>- Nho khô Raisain DK harvest </p>
                <p>- Hộp quà Phú Quý kèm túi giấy</p>
              </div>
            </div>
            <div className="pt-[30px] md:block hidden">
              <img
                className="w-[350px] h-[480px]"
                srcSet="/images/phuquy.png 2x"
                alt=""
              />
            </div>
            <div
              className="absolute bottom-[-80px] md:bottom-[-125px] left-[50%] translate-x-[-50%] cursor-pointer h-[80px] md:h-auto"
              onClick={() => setShowOne(false)}
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

export default PopupOne;
