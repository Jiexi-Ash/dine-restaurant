import React from "react";
import Image from "next/image";
import HeroMobileImage from "../../public/assets/homepage/hero-bg-mobile@2x.jpg";
import HeroTabletImage from "../../public/assets/homepage/hero-bg-tablet@2x.jpg";
import HeroDesktopImage from "../../public/assets/homepage/hero-bg-desktop.jpg";

import LogoImage from "../../public/assets/logo.svg";

function Hero() {
  return (
    <div className="container relative mx-auto w-full max-w-8xl ">
      <BgMobile />
      <BgTablet />
      <BgDesktop />
      <div className="absolute inset-0">
        <div className="flex h-full w-full flex-col items-center lg:items-start lg:pl-[163px]">
          <div className="mt-64 md:mt-[320px] lg:mt-16">
            <Image src={LogoImage} alt="Logo" />
          </div>

          <div className="mt-9 flex w-full flex-col  items-center text-center lg:mt-[153px] lg:items-start">
            <h1 className="max-w-[280px] text-center text-[32px] font-light leading-10 tracking-[0.4px] text-white md:max-w-sm md:text-5xl md:leading-[64px] md:tracking-[-0.6px] lg:max-w-lg lg:text-left lg:text-7xl lg:leading-[80px] lg:tracking-[-1px]">
              Exquisite dining since 1989
            </h1>
            <p className="mt-5 max-w-sm px-6 text-center text-[16px] leading-7 text-white md:max-w-2xl md:text-xl md:leading-8 lg:mt-[10px] lg:max-w-md lg:px-0 lg:text-left lg:text-[20px] lg:leading-8">
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
          </div>

          <div className="mt-14 flex w-full flex-col items-center justify-center lg:mt-10 lg:items-start">
            <button
              type="button"
              className="border px-14 py-4 uppercase text-white transition duration-200 ease-in-out hover:bg-white hover:text-primaryCodGray"
            >
              BOOK A TABLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

export const BgMobile = () => {
  return (
    <div className="relative h-screen w-full md:hidden">
      <Image
        src={HeroMobileImage}
        alt="Hero Image"
        fill={true}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
};

export const BgTablet = () => {
  return (
    <div className="relative hidden h-screen w-full md:block lg:hidden">
      <Image
        src={HeroTabletImage}
        alt="Hero Image"
        fill={true}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
};

export const BgDesktop = () => {
  return (
    <div className="relative hidden h-screen w-full  lg:block">
      <Image
        src={HeroDesktopImage}
        alt="Hero Image"
        fill={true}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
};
