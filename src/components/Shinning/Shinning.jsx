import React, { useState, useEffect } from "react";
import shinningImg1 from "../../assets/shinningImg1.webp";
import shinningImg2 from "../../assets/shinningImg2.webp";
import shineImg1 from "../../assets/shineImg1.png";
import shineImg2 from "../../assets/shineImg2.png";
import shineImg3 from "../../assets/shineImg3.png";
import shineImg4 from "../../assets/shineImg4.png";
import shineImg5 from "../../assets/shineImg5.png";
import shineImg6 from "../../assets/shineImg6.png";
import shineImg7 from "../../assets/shineImg7.png";
import shineImg8 from "../../assets/shineImg8.png";
import shineImg9 from "../../assets/shineImg9.png";

const Shinning = () => {
  const [scale, setScale] = useState(1);
  const lastScrollTopRef = React.useRef(0);
  const scrollFactor = 0.00009; // Adjust for zoom sensitivity

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      // Calculate new scale incrementally
      const scaleChange = (scrollTop - lastScrollTopRef.current) * scrollFactor;

      // Update scale based on scroll but keep changes subtle
      setScale((prevScale) =>
        Math.min(1.1, Math.max(1, prevScale + scaleChange))
      );
      lastScrollTopRef.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="shinning"
      className="mt-[80px] pt-[30px] xl:mt-[100px] xl:pt-[140px] px-[25px] lg:px-[50px] box-border py-3"
    >
      <div className="">
        <div className=" xl:flex  w-full justify-between">
          <div className="">
            <p className=" md:w-[300px] xl:w-[250px] text-[20px] font-Manrope">
              Diligent Teams Pursuing Goals and Upholding Standards
            </p>
          </div>
          <div className="pr-[15px] xl:pr-0">
            <p className="mt-7 w-full lg:w-[580px] xl:w-[650px] xl:mt-0 text-[37px] sm:text-[40px] lg:text-[58px] xl:text-[72px] font-Manrope leading-[45px] sm:leading-[50px] lg:leading-[70px] xl:leading-[80px] ">
              Shining a Light on Design Excellence and Advocacy Unity
            </p>
          </div>
        </div>
        <div className="xl:flex xl:mt-[80px] xl:gap-x-[20px]">
          <div className=" flex mt-14 xl:mt-0 h-[500px] lg:h-full xl:h-[700px] w-full xl:w-[800px] overflow-hidden rounded-[20px]">
            <img
              className="object-cover h-full w-full transition-transform duration-1500 ease-in-out ;"
              src={shinningImg1}
              id="zoomImage"
              style={{ transform: `scale(${scale})` }}
            />
          </div>
          <div className=" flex mt-3 xl:mt-0 h-[350px] lg:h-[450px] xl:h-[700px] w-full overflow-hidden rounded-[20px]">
            <img
              className="object-cover h-full w-full transition-transform duration-1500 ease-in-out ;"
              src={shinningImg2}
              id="zoomImage"
              style={{ transform: `scale(${scale})` }}
            />
          </div>
        </div>
      </div>
      <div className="mt-3 border rounded-[20px] flex xl:flex-row flex-col">
        <div className=" p-[25px] lg:p-[50px] xl:w-[755px] xl:border-r w-full xl:flex xl:flex-col xl:justify-between">
          <p className=" mt-[15px] px-[25px] py-[10px] border border-black max-w-max font-Manrope rounded-full">
            Customers
          </p>
          <div className="mt-[60px]">
            <p className="font-Manrope text-[20px] font-semibold ">
              Customers Connections
            </p>
            <p className="mt-3 font-Manrope text-neutral-500 text-[20px] leading-[27px]">
              Explore endless choices and exceptional service, where your unique
              taste finds its perfect match in our dedicated commitment to your
              satisfaction.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 w-full mt-5 xl:mt-0">
          <div className="h-[180px] flex items-center justify-center border-r border-b border-t xl:border-t-0">
            <img className="w-[70px] xl:w-[70px]" src={shineImg1} alt="" />
          </div>
          <div className="h-[180px] flex items-center justify-center lg:border-r border-b border-t xl:border-t-0">
            <img className="w-[180px]" src={shineImg2} alt="" />
          </div>
          <div className="h-[180px] flex items-center justify-center border-b border-r lg:border-r-0 lg:border-t xl:border-t-0">
            <img className="w-[100px] xl:w-[120px]" src={shineImg3} alt="" />
          </div>
          <div className="h-[180px] flex items-center justify-center lg:border-r border-b">
            <img className="w-[110px] xl:w-[120px]" src={shineImg4} alt="" />
          </div>
          <div className="h-[180px] flex items-center justify-center border-r border-b">
            <img className="w-[80px] xl:w-[120px]" src={shineImg7} alt="" />
          </div>
          <div className="h-[180px] flex items-center justify-center border-b">
            <img className="w-[120px]" src={shineImg6} alt="" />
          </div>
          <div className="h-[180px] flex items-center justify-center border-r ">
            <img className="w-[90px] xl:w-[120px]" src={shineImg8} alt="" />
          </div>
          <div className="h-[180px] flex items-center justify-center lg:border-r">
            <img className="w-[120px]" src={shineImg5} alt="" />
          </div>
          <div className="h-[180px] hidden lg:flex items-center justify-center">
            <img className="w-[90px] xl:w-[120px]" src={shineImg9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shinning;
