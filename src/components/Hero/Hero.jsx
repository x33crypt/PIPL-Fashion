import React, { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import heroImage from "../../assets/heroImage.webp";

const Hero = () => {
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
    <div className="pt-[155px] lg:pt-[160px] box-border">
      <div className=" px-[30px] lg:px-[50px]">
        <p className=" text-[55px] sm:text-[60px] lg:text-[75px] xl:text-[110px] sm:leading-[65px] lg:leading-[95px] xl:leading-[115px] xl:w-[1000px] w-full leading-[60px] ">
          Your Ultimate Fashion Destination
        </p>
        <p className="mt-5 sm:text-[25px] w-full lg:w-[420px] font-Manrope">
          Discover trends, embrace elegance, and redefine your wardrobe with us.
        </p>
        <button className="mt-8 flex items-center bg-black pl-7 pr-2 py-2 rounded-full">
          <p className="text-white mr-5 font-Manrope text-base font-medium">
            Explore Worldwide
          </p>
          <i className="fa-solid fa-arrow-right text-black bg-lightpurple py-3 px-3 rounded-full"></i>
        </button>
      </div>
      <div className="px-[15px]">
        <div className="mt-28 h-[380px] lg:h-[550px] w-full overflow-hidden rounded-[20px]">
          <img
            className="object-cover h-full w-full transition-transform duration-1500 ease-in-out ;"
            src={heroImage}
            id="zoomImage"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
