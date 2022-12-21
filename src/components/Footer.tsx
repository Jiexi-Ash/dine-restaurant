import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo.svg";

function Footer() {
  return (
    <div className="container mx-auto flex max-w-8xl flex-col items-center justify-center bg-primaryCodGray px-6 py-20">
      <Image src={Logo} alt="logo" width={100} height={40} />

      <div className="flex flex-col pt-11">
        <span className="text-center text-sm font-normal leading-7 tracking-[2px] text-white">
          Marthwaite, Sedbergh
        </span>
        <span className="text-center text-sm font-normal leading-7 tracking-[2px] text-white">
          Cumbria
        </span>
        <span className="text-center text-sm font-normal leading-7 tracking-[2px] text-white">
          +00 44 123 4567
        </span>
      </div>

      <div className="flex flex-col pt-8">
        <span className="text-center text-sm font-normal uppercase leading-7 tracking-[2px] text-white">
          OPEN TIMES
        </span>
        <span className="text-center text-sm font-normal uppercase leading-7 tracking-[2px] text-white">
          MON - FRI: 09:00 AM - 10:00 PM
        </span>
        <span className="text-center text-sm font-normal uppercase leading-7 tracking-[2px] text-white">
          SAT - SUN: 09:00 AM - 11:30 PM
        </span>
      </div>
    </div>
  );
}

export default Footer;
