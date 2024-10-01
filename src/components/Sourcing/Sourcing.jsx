import React from "react";
import { GoArrowRight } from "react-icons/go";
import sourceImg1 from "../../assets/sourcingImg.svg";
import sourceImg2 from "../../assets/sourcingImg2.svg";

const Sourcing = () => {
  return (
    <div className=" px-[15px] box-border py-3">
      <div className=" px-[25px] xl:px-[40px] py-[40px] flex flex-col flex-1 xl:flex-row justify-evenly bg-darkLight rounded-t-[20px] gap-x-20">
        <div className="w-full">
          <p className="text-[37px] sm:text-[40px] lg:text-[58px] xl:text-[72px] w-full md:w-full lg:w-[580px] xl:w-full font-Manrope leading-[45px] sm:leading-[50px] lg:leading-[70px]  xl:leading-[80px] ">
            Sourcing Style Worldwide for Your Fashion Delight
          </p>
        </div>
        <div className="w-full bg-darkLight mt-1 sm:pt-5 pt-6 flex flex-col justify-end">
          <p className="text-[20px] md:w-[360px]  lg:w-[420px] font-Manrope">
            From every chic corner of the globe to your doorstep, our commitment
            to a boundless global fashion experience knows no borders.
          </p>
          <div className="w-full">
            <button className="mt-8 flex items-center bg-black pl-7 pr-2 py-2 rounded-full relative overflow-hidden transition-all duration-500 ease-in-out group hover:bg-lightpurple">
              <p className="mr-7 font-Manrope text-base font-medium text-white transition-colors duration-500 ease-in-out group-hover:text-black">
                Our Service
              </p>
              <i className="fa-solid fa-arrow-right text-black bg-lightpurple py-3 px-3 rounded-full"></i>
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-darkLight flex rounded-b-[20px]">
        <div className="px-[25px] pb-[40px]">
          <img src={sourceImg1} alt="" />
        </div>
        <div className=" hidden xl:flex pl-12 pt-[80px]">
          <img src={sourceImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sourcing;
