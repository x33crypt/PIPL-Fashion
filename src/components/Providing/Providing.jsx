import React from "react";
import providingImg1 from "../../assets/provingImg.jpeg";

const Providing = () => {
  return (
    <div className="px-12 mt-32">
      <div className="flex flex-col justify-between items-center ">
        <div className="w-[700px] py-6">
          <p className="font-Manrope text-[70px] w-[700px] leading-[90px]">
            Providing Top-notch Services for Your Satisfaction
          </p>
        </div>
        <div className="w-full mt-12">
          <img
            className="lg:w-[300px] w-full h-[500px] lg:h-[300px] rounded-[20px] object-cover object-top"
            src={providingImg1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Providing;
