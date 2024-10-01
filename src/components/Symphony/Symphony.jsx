import React from "react";
import commitImg1 from "../../assets/CommitmentImg1.webp";
import synImg1 from "../../assets/synImg1.jpg";
import synImg2 from "../../assets/synImg5.jpg";
import synImg3 from "../../assets/synImg6.jpg";

const Symphony = () => {
  return (
    <div
      id="symphony"
      className="mt-[80px] pt-[30px] xl:mt-[100px] xl:pt-[140px] px-[15px] box-border py-3"
    >
      <div className=" px-[25px] lg:px-[50px] py-[50px] flex flex-col flex-1 xl:flex-row justify-evenly bg-darkLight rounded-t-[20px] gap-x-20">
        <div className="w-full">
          <p className="text-[37px] sm:text-[40px] lg:text-[58px] xl:text-[72px] w-full md:w-full lg:w-[580px] xl:w-full font-Manrope leading-[45px] sm:leading-[50px] lg:leading-[70px]  xl:leading-[80px] ">
            The Symphony of Our Production Partnerships
          </p>
        </div>
        <div className="w-full bg-darkLight mt-1 sm:pt-5 pt-6 flex flex-col justify-end">
          <p className="text-[20px] lg:w-[420px] font-Manrope">
            Our production collaborations harmonize expertise and creativity,
            creating a symphony of unparalleled quality and innovation.
          </p>
          <div className="w-full">
            <button className="mt-8 flex items-center bg-black pl-7 pr-2 py-2 rounded-full relative overflow-hidden transition-all duration-500 ease-in-out group hover:bg-lightpurple">
              <p className="mr-7 font-Manrope text-base font-medium text-white transition-colors duration-500 ease-in-out group-hover:text-black">
                Contact Us
              </p>
              <i className="fa-solid fa-arrow-right text-black bg-lightpurple py-3 px-3 rounded-full"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="px-[25px] lg:px-[50px] bg-darkLight rounded-b-[20px]">
        <div className="py-[40px] border-t-[2px] xl:flex xl:gap-x-[210px]">
          <div>
            <img
              className="rounded-[15px] h-[360px] lg:h-[440px] xl:h-[230px] object-cover w-full xl:w-[1400px]"
              src={synImg1}
              alt=""
            />
          </div>
          <div className=" lg:flex lg:gap-x-[60px]">
            <p className="text-[24px] font-Manrope mt-5 xl:mt-2 font-semibold">
              01
            </p>
            <div className="w-full">
              <p className="mt-5 xl:mt-2 font-Manrope text-[24px] font-semibold">
                Our Network of Offices
              </p>
              <p className="mt-5  font-Manrope text-neutral-500 text-[20px] leading-[27px]">
                Each country's unique specialties are expertly understood by our
                teams, seamlessly connecting customers and production partners
                through our digital platform. We bridge expertise and execution
                for a globally connected production experience.
              </p>
            </div>
          </div>
        </div>
        <div className="py-[40px] border-t-[2px] xl:flex xl:gap-x-[210px]">
          <div>
            <img
              className="rounded-[15px] h-[360px] lg:h-[440px] xl:h-[230px] object-cover w-full xl:w-[1400px]"
              src={synImg3}
              alt=""
            />
          </div>
          <div className=" lg:flex lg:gap-x-[60px]">
            <p className="text-[24px] font-Manrope mt-5 xl:mt-2 font-semibold">
              02
            </p>
            <div className="w-full">
              <p className="mt-5 xl:mt-2 font-Manrope text-[24px] font-semibold">
                Future Realities
              </p>
              <p className="mt-5  font-Manrope text-neutral-500 text-[20px] leading-[27px]">
                Enduring effort and commitment define transformative change.
                Meet our partners investing in cutting-edge technologies,
                eco-friendly practices, recycling, craft revival, and a
                commitment to valuing human life. Together, we shape the future.
              </p>
            </div>
          </div>
        </div>
        <div className="py-[40px] border-t-[2px] xl:flex xl:gap-x-[210px]">
          <div>
            <img
              className="rounded-[15px] h-[360px] lg:h-[440px] xl:h-[230px] object-cover w-full xl:w-[1400px]"
              src={synImg2}
              alt=""
            />
          </div>
          <div className=" lg:flex lg:gap-x-[60px]">
            <p className="text-[24px] font-Manrope mt-5 xl:mt-2 font-semibold">
              03
            </p>
            <div className="w-full">
              <p className="mt-5 xl:mt-2 font-Manrope text-[24px] font-semibold">
                Embracing Diversity in Fashion
              </p>
              <p className="mt-5  font-Manrope text-neutral-500 text-[20px] leading-[27px]">
                Explore the rich tapestry of fashion — diverse in clothing,
                beauty, and the people who create and wear them. Unite with us
                in diverse collaborations, working towards our common goal:
                crafting a climate-neutral future for fashion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symphony;
