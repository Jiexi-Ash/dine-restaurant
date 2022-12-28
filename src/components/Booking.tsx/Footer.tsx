import React from "react";
import Logo from "../../../public/assets/logo.svg";
import Image from "next/image";

function Footer() {
  return (
    <div className="container w-full max-w-8xl  bg-primaryCodGray py-20">
      <div className="flex flex-col items-center justify-center">
        <Image src={Logo} alt="Logo" />

        <div className="mt-10 flex flex-col">
          <div className="flex flex-col items-center">
            <span className="text-sm leading-7 tracking-[2px] text-white">
              Marthwaite, Sedbergh
            </span>
            <span className=" text-sm leading-7 tracking-[2px] text-white">
              Cumbria
            </span>
            <span className="text-sm leading-7 tracking-[2px] text-white">
              +00 44 123 4567
            </span>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <span className="text-sm leading-7 tracking-[2px] text-white">
              OPEN TIMES
            </span>
            <span className="text-sm leading-7 tracking-[2px] text-white">
              MON - FRI: 09:00 AM - 10:00 PM
            </span>
            <span className=" text-sm leading-7 tracking-[2px] text-white">
              SAT - SUN: 09:00 AM - 11:30 PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
