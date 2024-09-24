import React from "react";
import { GoArrowRight } from "react-icons/go";
import sourceImg1 from "../../assets/sourcingImg.svg";
import sourceImg2 from "../../assets/sourcingImg2.svg";

const Sourcing = () => {
  return (
    <div className=" mt-3 box-border py-12 px-12 ">
      <div className="flex flex-col lg:flex-row justify-evenly bg-darkLight rounded-t-[20px]">
        <div className="w-[1700px]">
          <p className="text-[70px] w-[450px] font-Manrope leading-[80px]">
            Sourcing Style Worldwide for Your Fashion Delight
          </p>
        </div>
        <div className="w-full bg-darkLight pt-12 flex flex-col justify-end">
          <p className="text-[20px] w-[420px] font-Manrope">
            From every chic corner of the globe to your doorstep, our commitment
            to a boundless global fashion experience knows no borders.
          </p>
          <div className="w-full">
            <button className="mt-8 flex items-center bg-black pl-7 pr-2 py-2 rounded-full">
              <p className="text-white mr-7 font-Manrope text-base font-medium">
                Our Service
              </p>
              <i className="fa-solid fa-arrow-right text-black bg-lightpurple py-3 px-3 rounded-full"></i>
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-darkLight mt-12 flex rounded-b-[20px]">
        <div>
          <img src={sourceImg1} alt="" />
        </div>
        <div className=" hidden lg:flex pl-12 pt-[80px]">
          <img src={sourceImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sourcing;
