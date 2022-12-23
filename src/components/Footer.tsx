import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo.svg";

function Footer() {
  return (
    <div className="container mx-auto flex max-w-8xl flex-col items-center justify-center bg-primaryCodGray px-6 py-20 md:flex-row md:items-start md:justify-start md:px-10">
      <div className="md:mr-32">
        <Image src={Logo} alt="logo" width={100} height={40} />
      </div>

      <div className="mt-8 flex flex-col md:mt-0 md:items-start">
        <div className="mt-11 flex flex-col md:mt-0 md:items-start">
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

        <div className="mt-8 flex flex-col md:items-start">
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
    </div>
  );
}

export default Footer;
