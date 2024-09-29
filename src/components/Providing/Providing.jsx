import React from "react";
import providingImg1 from "../../assets/provingImg.jpeg";

const Providing = () => {
  return (
    <div className="px-[25px] lg:px-[50px] mt-40 xl:mt-[170px]">
      <div className="flex flex-col xl:flex-row xl:gap-x-20 justify-between items-center ">
        <div className="py-6 w-full">
          <p className="text-[40px] sm:text-[40px] lg:text-[58px] xl:text-[72px] w-full md:w-full lg:w-[580px] xl:w-full font-Manrope leading-[45px] sm:leading-[50px] lg:leading-[70px]  xl:leading-[80px]">
            Providing Top-notch Services for Your Satisfaction
          </p>
        </div>
        <div className="w-full xl:w-max mt-3">
          <img
            className=" w-full h-[350px] lg:h-[400px] xl:h-[270px] xl:w-[640px] rounded-[15px] object-cover object-top"
            src={providingImg1}
            alt=""
          />
        </div>
      </div>
      <div className="mt-14 flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-[20px] gap-y-[30px]">
        <div>
          <p className="text-[20px] font-Manrope">01</p>
          <div className="mt-6 border-t-gray-100 border-t-[2px]"></div>
          <div className="pr-[30px]">
            <p className="mt-6 font-Manrope text-[20px] font-semibold">
              Global Expertise
            </p>
            <p className="mt-6 font-Manrope text-neutral-500 text-[20px] leading-[27px]">
              Redesigning fashion worldwide with cutting-edge sourcing and
              global proficiency. From concept to delivery, we're your partners
              in sustainable style.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[20px] font-Manrope">02</p>
          <div className="mt-6 border-t-gray-100 border-t-[2px]"></div>
          <div className="pr-[30px]">
            <p className="mt-6 font-Manrope text-[20px] font-semibold">
              Working Together
            </p>
            <p className="mt-6 font-Manrope text-neutral-500 text-[20px] leading-[27px]">
              Bring your wealth of expertise, wishes, and ideas. We specialize
              in crafting quick, simple, and collaborative solutions, uniquely
              tailored for your success.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[20px] font-Manrope">03</p>
          <div className="mt-6 border-t-gray-100 border-t-[2px]"></div>
          <div className="pr-[30px]">
            <p className="mt-6 font-Manrope text-[20px] font-semibold">
              Global & Local Reach
            </p>
            <p className="mt-6 font-Manrope text-neutral-500 text-[20px] leading-[27px]">
              We partner with top textile manufacturers for sustainable
              high-tech materials and collaborate with skilled artisans,
              blending modernity with traditional craftsmanship.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[20px] font-Manrope">04</p>
          <div className="mt-6 border-t-gray-100 border-t-[2px]"></div>
          <div className="pr-[30px]">
            <p className="mt-6 font-Manrope text-[20px] font-semibold">
              Design Excellence
            </p>
            <p className="mt-6 font-Manrope text-neutral-500 text-[20px] leading-[27px]">
              Our commitment to excellence is embodied in our products, defined
              by high design standards, exciting materials, and eco-friendly
              practices.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[20px] font-Manrope">05</p>
          <div className="mt-6 border-t-gray-100 border-t-[2px]"></div>
          <div className="pr-[30px]">
            <p className="mt-6 font-Manrope text-[20px] font-semibold">
              Serving Brands Worldwide
            </p>
            <p className="mt-6 font-Manrope text-neutral-500 text-[20px] leading-[27px]">
              As the ground crew for brands and start-ups, we support their
              journey to success with fabric development, in-house collections,
              and 3D presentations.
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-[20px] font-Manrope">06</p>
          <div className="mt-6 border-t-gray-100 border-t-[2px]"></div>
          <div className="pr-[30px]">
            <p className="mt-6 font-Manrope text-[20px] font-semibold">
              Unified Strength
            </p>
            <p className="mt-6 font-Manrope text-neutral-500 text-[20px] leading-[27px]">
              Our strength is in navigating three worlds: our planet, the
              fashion realm, and a digital platform connecting all. Together, we
              shape the future of fashion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Providing;
