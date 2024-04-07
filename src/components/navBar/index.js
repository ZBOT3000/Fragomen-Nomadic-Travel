import React from "react";
import FragomenLogo from "../../assets/FragomenLogo01.png";
import displayImage from "../../assets/Christina.png";

function navBar() {
  return (
    <nav class="bg-primary-blue h-navBar">
      <div class="flex justify-between">
        <div>
          <div class="pt-[19px] pl-[19.96px]">
            <img src={FragomenLogo} alt="Logo" className="w-[114px] h-13 " />
          </div>
          <div class="pl-[22.06px] pt-[3px] h-12">
            <h1 class="font-montserrat text-xs font-bold leading-4 text-center text-white">
              Nomadic Travel
            </h1>
          </div>
        </div>
        <div className="flex pt-3.5 pr-5">
          <button
            type="button"
            class=" rounded-full h-8 w-8 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <img class="h-8 w-8 rounded-full " src={displayImage} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default navBar;
