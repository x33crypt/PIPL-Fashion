import React, { useState, useEffect } from "react";
import commitImg1 from "../../assets/CommitmentImg1.webp";
import commitImg2 from "../../assets/CommitmentImg2.webp";
import commitImg3 from "../../assets/CommitmentImg3.webp";
import commitImg4 from "../../assets/CommitmentImg4.webp";

const Commitment = () => {
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
      id="commitment"
      className="px-[25px] lg:px-[50px] mmt-[80px] pt-[30px] xl:mt-[100px] xl:pt-[140px] xl:flex xl:flex-col xl:gap-x-[100px]"
    >
      <div>
        <p className="text-[40px] sm:text-[40px] lg:text-[58px] xl:text-[72px] w-full md:w-full lg:w-[550px] xl:w-[480px] font-Manrope leading-[45px] sm:leading-[50px] lg:leading-[70px] xl:leading-[80px] ">
          Commitment to Eco-Excellence
        </p>
      </div>
      <div className="mt-10 flex flex-col lg:grid lg:grid-cols-2 xl:flex xl:flex-row lg:gap-x-[10px] gap-y-[50px] w-full">
        <div className="">
          <div className="h-[370px] lg:h-[400px] xl:h-[430px]  xl:flex-1 overflow-hidden rounded-[15px] bg-blue-300">
            <img
              className="object-cover h-full w-full transition-transform duration-1500 ease-in-out"
              src={commitImg1}
              id="zoomImage"
              style={{ transform: `scale(${scale})` }}
            />
          </div>
          <div className="pr-[20px]">
            <p className="mt-6 font-Manrope text-[20px] font-semibold">
              Eco-Friendly Presentations
            </p>
            <p className="mt-3 font-Manrope text-neutral-500 text-[20px] leading-[27px]">
              3D-rendered presentations and eco-friendly laser treatment.
            </p>
          </div>
        </div>
        <div className="">
          <div className="h-[370px] lg:h-[400px] xl:h-[430px] xl:flex-1 overflow-hidden rounded-[15px] bg-blue-300">
            <img
              className="object-cover h-full w-full transition-transform duration-1500 ease-in-out"
              src={commitImg2}
              id="zoomImage"
              style={{ transform: `scale(${scale})` }}
            />
          </div>
          <div className="pr-[20px]">
            <p className="mt-6 font-Manrope text-[20px] font-semibold">
              Eco-Friendly Presentations
            </p>
            <p className="mt-3 font-Manrope text-neutral-500 text-[20px] leading-[27px]">
              3D-rendered presentations and eco-friendly laser treatment.
            </p>
          </div>
        </div>
        <div className="">
          <div className="h-[370px] lg:h-[400px] xl:h-[430px] xl:flex-1 overflow-hidden rounded-[15px] bg-blue-300">
            <img
              className="object-cover h-full w-full transition-transform duration-1500 ease-in-out"
              src={commitImg3}
              id="zoomImage"
              style={{ transform: `scale(${scale})` }}
            />
          </div>
          <div className="pr-[20px]">
            <p className="mt-6 font-Manrope text-[20px] font-semibold">
              Eco-Friendly Presentations
            </p>
            <p className="mt-3 font-Manrope text-neutral-500 text-[20px] leading-[27px]">
              3D-rendered presentations and eco-friendly laser treatment.
            </p>
          </div>
        </div>
        <div className="">
          <div className="h-[370px] lg:h-[400px] xl:h-[430px] xl:flex-1 overflow-hidden rounded-[15px] bg-blue-300">
            <img
              className="object-cover h-full w-full transition-transform duration-1500 ease-in-out"
              src={commitImg4}
              id="zoomImage"
              style={{ transform: `scale(${scale})` }}
            />
          </div>
          <div className="pr-[20px]">
            <p className="mt-6 font-Manrope text-[20px] font-semibold">
              Eco-Friendly Presentations
            </p>
            <p className="mt-3 font-Manrope text-neutral-500 text-[20px] leading-[27px]">
              3D-rendered presentations and eco-friendly laser treatment.
            </p>
          </div>
        </div>
        {/* <div>
          <img
            className="rounded-[15px] h-[370px] lg:h-[400px] xl:h-[430px] w-full xl:w-[300px] object-cover"
            src={commitImg2}
            alt=""
          />
          <div className="pr-[30px]">
            <p className="mt-6 font-Manrope text-[20px] font-semibold">
              Cradle-to-Cradle Pledge
            </p>
            <p className="mt-3 font-Manrope text-neutral-500 text-[20px] leading-[27px]">
              Regenerated and organic cotton, innovative fibers.
            </p>
          </div>
        </div>
        <div>
          <img
            className="rounded-[15px] h-[370px] lg:h-[400px] xl:h-[430px] w-full xl:w-[300px] object-cover"
            src={commitImg3}
            alt=""
          />
          <div className="pr-[30px]">
            <p className="mt-6 font-Manrope text-[20px] font-semibold">
              Ethical Sourcing & Production
            </p>
            <p className="mt-3 font-Manrope text-neutral-500 text-[20px] leading-[27px]">
              Certified suppliers and ethical production in the EU.
            </p>
          </div>
        </div>
        <div>
          <img
            className="rounded-[15px] h-[370px] lg:h-[400px] xl:h-[430px] w-full xl:w-[300px] object-cover"
            src={commitImg4}
            alt=""
          />
          <div className="pr-[30px]">
            <p className="mt-6 font-Manrope text-[20px] font-semibold">
              Ocean Sustainability
            </p>
            <p className="mt-3 font-Manrope text-neutral-500 text-[20px] leading-[27px]">
              Sea plastic buttons and chemical-free dyeing.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Commitment;
