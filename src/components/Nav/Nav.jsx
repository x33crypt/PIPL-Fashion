import React, { useState, useContext } from "react";
import logo from "../../assets/pipl logo.svg";
import ScrollReveal from "scrollreveal";
import { navStatusContext } from "../../App";

const Nav = () => {
  const { navOption, setNavOption } = useContext(navStatusContext);

  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // setNavOption(false);

    if (scrollTop > lastScrollTop) {
      // Scrolling down, hide navbar
      navbar.className.remove("translate-y-0");
      navbar.className.add("-translate-y-full");
    } else {
      // Scrolling up, show navbar
      navbar.className.remove("-translate-y-full");
      navbar.className.add("translate-y-0");
    }
    lastScrollTop = scrollTop;
  });

  const scrollToTop = () => {
    setNavOption(false);
    const section = document.getElementById("ultimate");
    section.scrollIntoView({ behavior: "smooth" });

    // Apply ScrollReveal animation to this specific section
    ScrollReveal().reveal("#ultimate", {
      duration: 1500,
      origin: "bottom",
      distance: "100px",
    });
  };

  const scrollToProviding = () => {
    setNavOption(false);
    const section = document.getElementById("providing");
    section.scrollIntoView({ behavior: "smooth" });

    // Apply ScrollReveal animation to this specific section
    ScrollReveal().reveal("#providing", {
      duration: 1500,
      origin: "bottom",
      distance: "100px",
    });
  };

  const scrollToElevating = () => {
    setNavOption(false);
    const section = document.getElementById("elevating");
    section.scrollIntoView({ behavior: "smooth" });

    // Apply ScrollReveal animation to this specific section
    ScrollReveal().reveal("#elevating", {
      duration: 1500,
      origin: "bottom",
      distance: "100px",
    });
  };

  const scrollToCommitment = () => {
    setNavOption(false);
    const section = document.getElementById("commitment");
    section.scrollIntoView({ behavior: "smooth" });

    // Apply ScrollReveal animation to this specific section
    ScrollReveal().reveal("#commitment", {
      duration: 1500,
      origin: "bottom",
      distance: "100px",
    });
  };

  const scrollToSymphony = () => {
    setNavOption(false);
    const section = document.getElementById("symphony");
    section.scrollIntoView({ behavior: "smooth" });

    // Apply ScrollReveal animation to this specific section
    ScrollReveal().reveal("#symphony", {
      duration: 1500,
      origin: "bottom",
      distance: "100px",
    });
  };

  const scrollToShinning = () => {
    setNavOption(false);
    const section = document.getElementById("shinning");
    section.scrollIntoView({ behavior: "smooth" });

    // Apply ScrollReveal animation to this specific section
    ScrollReveal().reveal("#shinning", {
      duration: 1500,
      origin: "bottom",
      distance: "100px",
    });
  };

  const scrollToReachOut = () => {
    setNavOption(false);
    const section = document.getElementById("reachout");

    // Scroll smoothly to the section
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    // Apply ScrollReveal animation to this specific section
    ScrollReveal().reveal("#reachout", {
      duration: 1500,
      origin: "bottom",
      distance: "100px",
    });
  };

  return (
    <>
      <div className=" bg-orange-400 fixed left-0 right-0 top-0  flex flex-col z-10 ">
        <div
          id="navbar"
          className=" fixed left-0 right-0 bg-white px-[25px] lg:px-[50px] py-8  border-t-[8px] border-t-lightpurple transition-transform duration-300 ease-in-out  w-full flex justify-between items-center "
        >
          <div onClick={() => scrollToTop()} className="cursor-pointer ">
            <img className="w-[110px]" src={logo} alt="" />
          </div>
          <div className="hidden xl:flex w-[650px] justify-between text-[16px] text-black font-Manrope ">
            <div
              onClick={() => scrollToProviding()}
              className="relative group cursor-pointer"
            >
              <p className="mb-2 px-1">Services</p>
              <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-black transition-all duration-500 group-hover:w-full"></span>
            </div>
            <div
              onClick={() => scrollToElevating()}
              className="relative group cursor-pointer"
            >
              <p className="mb-2 px-1">People & Design</p>
              <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-black transition-all duration-500 group-hover:w-full"></span>
            </div>
            <div
              onClick={() => scrollToCommitment()}
              className="relative group cursor-pointer"
            >
              <p className="mb-2 px-1">Sustainability</p>
              <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-black transition-all duration-500 group-hover:w-full"></span>
            </div>
            <div
              onClick={() => scrollToSymphony()}
              className="relative group cursor-pointer"
            >
              <p className="mb-2 px-1">Production</p>
              <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-black transition-all duration-500 group-hover:w-full"></span>
            </div>

            <div
              onClick={() => scrollToShinning()}
              className="relative group cursor-pointer"
            >
              <p className="mb-2 px-1">Product & Customers</p>
              <span className="absolute bottom-0 w-0 h-[0.5px] bg-black transition-all duration-500 group-hover:w-full"></span>
            </div>
          </div>
          <div className="hidden xl:flex">
            <button
              onClick={() => scrollToReachOut()}
              className=" text-base bg-black text-white px-7 py-[13px] rounded-3xl font-Manrope font-medium hover:bg-lightpurple hover:text-black transition ease-in-out duration-300"
            >
              Contact Us
            </button>
          </div>
          <div className="flex xl:hidden ">
            <p
              onClick={() => setNavOption((prev) => !prev)}
              className="font-Manrope text-[16px]"
            >
              {navOption ? "Close" : "Menu"}
            </p>
          </div>
        </div>
        <div
          className={`${
            navOption ? "flex" : "hidden"
          } pt-[100px] pb-[50px] px-[25px] lg:px-[50px] right-0 left-0 bg-white transition ease-in-out duration-300 h-[100vh] overflow-scroll xl:hidden flex-col`}
        >
          <div className="w-full">
            <div
              onClick={() => scrollToProviding()}
              className="py-[20px] border-b-[1.5px]"
            >
              <p className="font-Manrope text-[27px]">Services</p>
            </div>
            <div
              onClick={() => scrollToElevating()}
              className="py-[20px] border-b-[1.5px]"
            >
              <p className="font-Manrope text-[27px]">People & Design</p>
            </div>
            <div
              onClick={() => scrollToCommitment()}
              className="py-[20px] border-b-[1.5px]"
            >
              <p className="font-Manrope text-[27px]">Sustainabily</p>
            </div>
            <div
              onClick={() => scrollToSymphony()}
              className="py-[20px] border-b-[1.5px]"
            >
              <p className="font-Manrope text-[27px]">Production</p>
            </div>
            <div
              onClick={() => scrollToShinning()}
              className="py-[20px] border-b-[1.5px]"
            >
              <p className="font-Manrope text-[27px]">Product & Customers</p>
            </div>
            <div
              onClick={() => scrollToReachOut()}
              className="py-[20px] border-b-[1.5px]"
            >
              <p className="font-Manrope text-[27px]">Contact Us</p>
            </div>
          </div>
          <div className="mt-[70px] xl:mt-[0px] gap-x-[20px] flex">
            <a href="https://web.facebook.com" target="_blank">
              <i class="fa-brands fa-facebook text-black text-[22px] cursor-pointer"></i>
            </a>
            <a href="https://x.com/home" target="_blank">
              <i class="fa-brands fa-x-twitter text-black  text-[23px] cursor-pointer"></i>{" "}
            </a>
            <a href="https://web.whatsapp.com" target="_blank">
              <i class="fa-brands fa-whatsapp text-black text-[25px] cursor-pointer"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
