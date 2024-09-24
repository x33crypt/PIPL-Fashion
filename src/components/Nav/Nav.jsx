import React from "react";
import logo from "../../assets/pipl logo.svg";

const Nav = () => {
  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down, hide navbar
      navbar.classList.remove("translate-y-0");
      navbar.classList.add("-translate-y-full");
    } else {
      // Scrolling up, show navbar
      navbar.classList.remove("-translate-y-full");
      navbar.classList.add("translate-y-0");
    }
    lastScrollTop = scrollTop;
  });

  return (
    <div
      id="navbar"
      className="flex z-10 bg-white justify-between px-[30px] lg:px-[50px] py-8 items-center border-t-[8px] lg:border-t-8 border-lightpurple fixed left-0 right-0 transition-transform duration-300 ease-in-out"
    >
      <div>
        <img className="w-[130px]" src={logo} alt="" />
      </div>
      <div className="hidden xl:flex w-[650px] justify-between text-[16px] text-black font-Manrope ">
        <div className="relative group cursor-pointer">
          <p className="mb-2 px-1">Services</p>
          <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-black transition-all duration-500 group-hover:w-full"></span>
        </div>
        <div className="relative group cursor-pointer">
          <p className="mb-2 px-1">People & Design</p>
          <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-black transition-all duration-500 group-hover:w-full"></span>
        </div>
        <div className="relative group cursor-pointer">
          <p className="mb-2 px-1">Sustainability</p>
          <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-black transition-all duration-500 group-hover:w-full"></span>
        </div>
        <div className="relative group cursor-pointer">
          <p className="mb-2 px-1">Production</p>
          <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-black transition-all duration-500 group-hover:w-full"></span>
        </div>
        <div className="relative group cursor-pointer">
          <p className="mb-2 px-1">Product & Customers</p>
          <span className="absolute bottom-0 w-0 h-[0.5px] bg-black transition-all duration-500 group-hover:w-full"></span>
        </div>
      </div>
      <div className="hidden xl:flex">
        <button className=" text-base bg-black text-white px-7 py-[13px] rounded-3xl font-Manrope font-medium hover:bg-lightpurple hover:text-black transition ease-in-out duration-300">
          Contact Us
        </button>
      </div>
      <div className="flex xl:hidden ">
        <p className="font-Manrope text-[20px]">Menu</p>
      </div>
    </div>
  );
};

export default Nav;
