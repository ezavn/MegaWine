import React from "react";

const Category2 = () => {
  return (
    <section className="pb-[40px] md:pb-[70px]">
      <div className="page-container">
        <div className="text-center mb-[30px]">
          <img
            className="w-[666px] inline-block"
            src="/images/spcl.png"
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px] mx-[15px] md:mx-[60px]">
          <CategoryItem src="/images/cate-1.png" cash="185.000 vnđ">
            nước hồng sâm won <br />
            hộp 5 gói
          </CategoryItem>
          <CategoryItem src="/images/cate-2.png" cash="230.000 vnđ">
            trà sâm kore <br />
            hộp 100 gói
          </CategoryItem>
          <CategoryItem src="/images/cate-3.png" cash="230.000 vnđ">
            kẹo sâm cao cấp kgc <br />
            hộp thiếc 240gr
          </CategoryItem>
          <CategoryItem src="/images/cate-4.png" cash="470.000 vnđ">
            sâm lát tẩm <br className="hidden-mb" />
            mật ong samiya hũ 200gr
          </CategoryItem>
        </div>
      </div>
    </section>
  );
};

const CategoryItem = ({ src, children, cash }) => {
  return (
    <div className="flex flex-col">
      <div className="mb-[15px] flex-shrink-0">
        <img src={src} alt="" />
      </div>
      <div className="flex flex-col flex-1 font-semibold text-center uppercase text-yellow">
        <p className="text-[12px] md:text-[16px] mb-[10px]">{children}</p>
        <img className="mt-auto" srcSet="/images/light.png 2x" alt="" />
        <h4 className="text-[20px] md:text-[32px]">{cash}</h4>
      </div>
    </div>
  );
};

export default Category2;
