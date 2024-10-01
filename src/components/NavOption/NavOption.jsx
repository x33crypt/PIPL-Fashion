import React, { useContext } from "react";
import { navStatusContext } from "../../App";

const NavOption = () => {
  const { navOption, setNavOption } = useContext(navStatusContext);

  return (
    <div
      className={`${
        navOption ? "hidden" : "hidden"
      } pt-[90px] px-[25px] lg:px-[50px] z-9 fixed right-0 left-0 bg-pink-400`}
    >
      <div className="w-full bg-blue-300 ">
        <div className="py-[20px] border-b-[1.5px]">
          <p className="font-Manrope text-[28px]">Services</p>
        </div>
        <div className="py-[20px] border-b-[1.5px]">
          <p className="font-Manrope text-[28px]">People & Design</p>
        </div>
        <div className="py-[20px] border-b-[1.5px]">
          <p className="font-Manrope text-[28px]">Sustainabily</p>
        </div>
        <div className="py-[20px] border-b-[1.5px]">
          <p className="font-Manrope text-[28px]">Production</p>
        </div>
        <div className="py-[20px] border-b-[1.5px]">
          <p className="font-Manrope text-[28px]">Product & Customers</p>
        </div>
        <div className="py-[20px] border-b-[1.5px]">
          <p className="font-Manrope text-[28px]">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default NavOption;
