import React from "react";
import {AiFillInstagram} from"react-icons/ai";
import {BsFacebook} from"react-icons/bs";
import {AiOutlineTwitter} from"react-icons/ai";
import {FaTelegram} from"react-icons/fa";

const Footer = () => {
  return (
    <div className=" footer p-[5rem] mb-4 bg-bleuColors rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5em]">
            <strong>CamerMarket Place </strong>
          </h1>
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7">
          We always our seekers and companies find the best jobs and employers find the best candidates
        </p>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Camer Market Place for your Services 
        </span> 
        <div className="grid  gap-3">
          <li className="text-white aopacity-[.7] hover:opacity-[1]">Acceuil</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Acceuil</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Acceuil</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Acceuil</li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Camer Market Place for your Services 
        </span> 
        <div className="grid  gap-3">
          <li className="text-white aopacity-[.7] hover:opacity-[1]">Acceuil</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Acceuil</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Acceuil</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Acceuil</li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Contact info 
        </span> 
        <div className="grid  gap-3">
          <small className=" text-[14px] text-white aopacity-[.7] ">joel@yahoo.com</small>
         </div> 
         <div className="icons flex gap-4 py-[1rem]">
            <AiFillInstagram className='bg-white p-[8px] h-[35px]  w-[35px] rounded-full icon text-bleuColors'/>
            <BsFacebook className='bg-white p-[8px] h-[35px]   w-[35px] rounded-full icon text-bleuColors'/>
            <AiOutlineTwitter className='bg-white p-[8px] h-[35px]   w-[35px] rounded-full icon text-bleuColors'/>
            <FaTelegram className='bg-white p-[8px] h-[35px]  w-[35px] rounded-full icon text-bleuColors'/>

         </div>
      </div>

    </div>
  );
};

export default Footer;
