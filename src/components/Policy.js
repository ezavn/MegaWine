import React from "react";

const Policy = () => {
  return (
    <section className="pb-[30px] md:pb-[70px]">
      <div className="page-container text-center max-w-[670px]">
        <div className="mb-[15px] md:mb-0 inline-flex items-center justify-center rounded-[100rem] md:w-[470px] h-[45px] border border-yellow uppercase font-semibold text-yellow px-[15px] text-[12px] md:text-[16px]">
          Tham khảo chính sách ưu đãi của mega wine
        </div>
        <div className="flex items-end">
          <a href="/" className="inline-block">
            <img className="" src="/images/policy-1.png" alt="" />
          </a>
          <a href="/" className="inline-block">
            <img className="" src="/images/policy-2.png" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Policy;
