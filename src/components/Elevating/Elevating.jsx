import React, { useState, useEffect } from "react";
import elevateImg from "../../assets/elevateImg.webp";
import elevateImg1 from "../../assets/elevateImg2.jpg";

const Elevating = () => {
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
      id="elevating"
      className="px-[25px] lg:px-[50px] mt-[80px] pt-[30px] xl:mt-[100px] xl:pt-[140px] xl:flex items-start xl:gap-x-[100px]"
    >
      <div className="">
        <p className="text-[40px] sm:text-[40px] lg:text-[58px] xl:text-[72px] w-full md:w-full lg:w-[550px] xl:w-[480px] font-Manrope leading-[45px] sm:leading-[50px] lg:leading-[70px] xl:leading-[80px] ">
          Elevating Innovation with Focus Design
        </p>
        <div className=" mt-[20px] pb-[5px] relative group max-w-max cursor-pointer">
          <p className="mb-1 font-Manrope font-semibold text-[15px]">
            Discover Production
          </p>
          <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-black transition-all duration-500 group-hover:w-full"></span>
        </div>
        <p className="mt-[40px] xl:mt-[280px] font-Manrope text-[19px] font-semibold">
          Focused on Future Trends
        </p>
        <p className="mt-6 font-Manrope text-neutral-500 lg:w-[550px] xl:w-[500px] text-[20px] leading-[27px]">
          Guided by market intelligence, our global in-house design community
          presents four exclusive collections and a sustainable capsule from
          fabric scraps. Experience precision with CLO 3D, shaping the future of
          style with excellence.
        </p>
      </div>
      <div className="mt-14 xl:mt-0 h-[600px] lg:h-[550px] xl:h-[850px] w-full overflow-hidden rounded-[20px]">
        <img
          className="object-cover h-full w-full transition-transform duration-1500 ease-in-out ;"
          src={elevateImg1}
          id="zoomImage"
          style={{ transform: `scale(${scale})` }}
        />
      </div>
    </div>
  );
};

export default Elevating;
