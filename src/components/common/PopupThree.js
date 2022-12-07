import React from "react";
import { usePopup } from "../../contexts/popupContext";

const PopupThree = () => {
  const { showThree, setShowThree } = usePopup();
  return (
    <>
      {showThree ? (
        <div className="overlay">
          <div className="bg-[#D60D45] rounded-[20px] w-[320px] md:w-[833px] relative flex flex-col md:flex-row items-end mt-[40px] md:mt-[60px] z-[10]">
            <div className="absolute top-[-50px] md:top-[-80px] left-[-30px] md:left-[-56px] w-[200px] md:w-auto">
              <img srcSet="/images/decor1.png 2x" alt="" />
            </div>
            <div className="absolute bottom-[-30px] right-[-40px] md:bottom-[-45px] md:right-[-85px] w-[150px] md:w-auto">
              <img srcSet="/images/decor2.png 2x" alt="" />
            </div>
            <div className="pt-[80px] pb-[20px] md:pb-[30px] pl-[28px]">
              <p className="text-[14px] md:text-[18px]">
                <span className="text-[24px] md:text-[36px] leading-[1] md:inline-block hidden">
                  GIÁ CỦA SET QUÀ
                </span>{" "}
                <span className="text-[16px] leading-[1] inline-block md:hidden">
                  GIÁ CỦA SET QUÀ TÀI LỘC
                </span>{" "}
                <br />
                (Chưa bao gồm rượu)
              </p>
              <h3 className="text-[32px] md:text-[54px] text-[#FFD99B] font-bold leading-[1] mb-[15px] md:mb-[30px]">
                825.000 VNĐ
              </h3>
              <h4 className="text-[20px] md:text-[32px] font-bold leading-[1] mb-[10px] md:mb-[15px]">
                SET QUÀ BAO GỒM:
              </h4>
              <div className="font-medium flex flex-col gap-[6px]">
                <p>
                  - Rượu vang CAMPI RUBI hoặc thay thế{" "}
                  <br className="hidden-mb" /> loại vang khác tùy theo yêu cầu
                  KH
                </p>
                <p>- Hạt điều ĐK HARVEST hộp 400gr</p>
                <p>- Nước hồng sâm Won hộp 5 gói </p>
                <p>- Trà quế rừng xanh hộp 15 gói</p>
                <p>- Sâm nguyên củ tẩm mật ong Samjang - 2 hộp/ hộp 1 củ </p>
                <p>- Hộp quà kèm túi giấy </p>
              </div>
            </div>
            <div className="pt-[30px] md:block hidden">
              <img src="/images/gift.png" alt="" />
            </div>
            <div
              className="absolute bottom-[-80px] md:bottom-[-125px] left-[50%] translate-x-[-50%] cursor-pointer h-[80px] md:h-auto"
              onClick={() => setShowThree(false)}
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

export default PopupThree;
