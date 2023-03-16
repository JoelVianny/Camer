import React from "react";

const NavBar = () => {
  return (
    <div className="navBar flex  justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-bleuColors">
          <strong>Camer</strong>Market
        </h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-bleuColors">Acceuil</li>
        <li className="menuList text-[#6f6f6f] hover:text-bleuColors">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-bleuColors">Contact</li>
        <li className="menuList text-[#6f6f6f] hover:text-bleuColors">Market</li>
        <li className="menuList text-[#6f6f6f] hover:text-bleuColors">Login</li>
      </div>
    </div>
  );
};

export default NavBar;
