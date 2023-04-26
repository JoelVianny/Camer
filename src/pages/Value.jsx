import React from "react";
import logo1 from '../Assets/logo1.png'

const Value = () => {
  return(
     <div className="mb-[4rem] mt-[6rem]">
     <h1 className="text-textColors text-[25px] py-[2rem] pb-[2rem] font-bold w-[400px]block">
      The value that  holds us treue and to account
      </h1> 
      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo1} alt="" className="w-[70%]"/>
            </div>
            <span className=" font-semibold text-textColor text-[18px]">Cameroun</span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
            Things being made beautifull simple are at the heart  of everythings we do.
          </p>

        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#f0f0f6] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#cfcff5] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo1} alt="" className="w-[70%]"/>
            </div>
            <span className=" font-semibold text-textColor text-[18px]">Cameroun</span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
            Things being made beautifull simple are at the heart  of everythings we do.
          </p>

        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo1} alt="" className="w-[70%]"/>
            </div>
            <span className=" font-semibold text-textColor text-[18px]">Cameroun</span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
            Things being made beautifull simple are at the heart  of everythings we do.
          </p>

        </div>
        
      </div>


  </div>);
};

export default Value;
