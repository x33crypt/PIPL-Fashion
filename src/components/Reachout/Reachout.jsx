import React from "react";
import logo from "../../assets/footerLogo.svg";

const Reachout = () => {
  return (
    <div
      id="reachout"
      className="mt-[80px] pt-[30px] xl:mt-[100px] xl:pt-[140px] px-[15px] box-border py-3"
    >
      <div className="px-[25px] lg:px-[50px] py-[50px] bg-lightpurple rounded-[20px]">
        <div>
          <p className="text-[40px] sm:text-[40px] lg:text-[58px] xl:text-[72px] w-full md:w-full xl:w-[800px] font-Manrope leading-[45px] sm:leading-[50px] lg:leading-[70px] xl:leading-[80px] ">
            Reach Out and Let's Ensure Your Experience is Tailored to Perfection
          </p>
        </div>
        <div className="xl:grid xl:grid-cols-2 xl:mt-16 mt-10">
          <div>
            <p className="font-Manrope text-[20px] leading-[27px] lg:w-[550px] w-full xl:w-[470px]">
              At PIPL, we value your communication. Whether you have questions,
              feedback, or special requests, our dedicated team is here to
              assist you. Your satisfaction is our priority, and we look forward
              to hearing from you soon!
            </p>
            <p className="font-Manrope text-[25px] xl:text-[30px] xl:mt-6 mt-8 border-b-[1.5px] border-black max-w-max">
              hello@pipl.com
            </p>
            {/* <p className="font-Manrope text-[25px] xl:text-[30px] xl:mt-3 mt-5 border-b-[1.5px] border-black max-w-max">
              +1 (242) 224-4412
            </p> */}
            <div className="relative group max-w-max">
              <p className="relative font-Manrope text-[25px] xl:text-[30px] xl:mt-3 mt-5 max-w-max">
                +1 (242) 224-4412
                <span className="absolute left-0 bottom-0 h-[1px] bg-black transition-all duration-500 ease-in-out group-hover:w-full w-0"></span>
              </p>
            </div>
          </div>
          <div className="mt-12 xl:mt-0 xl:flex xl:flex-col">
            <form action="">
              <div>
                <p className="text-[16px] font-Manrope font-bold">Full Name</p>
                <input
                  className=" mt-1 w-full h-[30px] py-[27px] px-[20px] rounded-[10px] outline-none bg-transparent border border-gray-400 border-solid font-Manrope placeholder:font-Manrope placeholder:text-gray-500"
                  type="text"
                  name=""
                  id=""
                  required
                  placeholder="Jane Doe"
                />
              </div>
              <div className="mt-8">
                <p className="text-[16px] font-Manrope font-bold">
                  Email Address
                </p>
                <input
                  className=" mt-1 w-full h-[30px] py-[27px] px-[20px] rounded-[10px] outline-none bg-transparent border border-gray-400 border-solid font-Manrope placeholder:font-Manrope placeholder:text-gray-600"
                  type="text"
                  name=""
                  id=""
                  required
                  placeholder="Jane.doe@gmail.com"
                />
              </div>
              <div className="mt-8">
                <p className="text-[16px] font-Manrope font-bold">Question</p>
                <input
                  className=" mt-1 w-full h-[30px] py-[27px] px-[20px] rounded-[10px] outline-none bg-transparent border border-gray-400 border-solid font-Manrope placeholder:font-Manrope placeholder:text-gray-600"
                  type="text"
                  name=""
                  id=""
                  required
                  placeholder="How can we help you ?"
                />
              </div>
              <div className="mt-12">
                <button className=" px-[30px] py-[14px] font-Manrope font-semibold rounded-full bg-black text-white border hover:border-black hover:bg-lightpurple hover:text-black transition-all  duration-500 ">
                  Send a Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="px-[25px] lg:px-[50px] pt-[50px] pb-[30px] bg-black rounded-[20px] mt-[10px]">
        <div className="xl:flex xl:w-fulll xl:justify-between xl:place-items-center">
          <div className="">
            <img className="w-[110px]" src={logo} alt="" />
          </div>
          <div className="mt-[40px] xl:mt-0 flex flex-col gap-y-[25px] xl:gap-y-[0px] lg:grid lg:grid-cols-2 xl:grid-cols-6 xl:flex xl:flex-row xl:justify-between xl:w-[800px] xl:items-center">
            <p className="text-zinc-400 text-[16px] xl:text-[16px] font-Manrope cursor-pointer hover:text-white">
              Services
            </p>
            <p className="text-zinc-400 text-[16px]  font-Manrope cursor-pointer hover:text-white">
              People & Design
            </p>
            <p className="text-zinc-400 text-[16px] font-Manrope cursor-pointer hover:text-white">
              Sustainability
            </p>
            <p className="text-zinc-400 text-[16px] font-Manrope cursor-pointer hover:text-white">
              Production
            </p>
            <p className="text-zinc-400 text-[16px]  font-Manrope cursor-pointer hover:text-white">
              Products & Customers
            </p>
            <p className="text-zinc-400 text-[16px] font-Manrope cursor-pointer hover:text-white">
              Contact Us
            </p>
          </div>
          <div className="mt-[40px] xl:mt-[0px] gap-x-[20px] flex">
            <a href="https://web.facebook.com" target="_blank">
              <i class="fa-brands fa-facebook text-white text-[18px] cursor-pointer"></i>
            </a>
            <a href="https://x.com/home" target="_blank">
              <i class="fa-brands fa-x-twitter text-white  text-[18px] cursor-pointer"></i>{" "}
            </a>
            <a href="https://web.whatsapp.com" target="_blank">
              <i class="fa-brands fa-whatsapp text-white text-[19px] cursor-pointer"></i>
            </a>
          </div>
        </div>
        <div className="border-t-[0.5px] mt-[50px] border-zinc-800"></div>
        <div className="mt-[30px] flex flex-col lg:flex-row lg:w-full lg:justify-between gap-y-[8px]">
          <p className="text-zinc-300 text-[14px] font-Manrope">
            © 2024, All Rights Reserved
          </p>
          <p className="text-zinc-300 text-[14px] font-Manrope">Licenses</p>
        </div>
      </div>
    </div>
  );
};

export default Reachout;
