import React from "react";
import Image from "next/image";
import ImageMobile from "../../public/assets/homepage/enjoyable-place-mobile@2x.jpg";
import ImageTablet from "../../public/assets/homepage/enjoyable-place-tablet@2x.jpg";
import ImageDesktop from "../../public/assets/homepage/enjoyable-place-desktop@2x.jpg";
import SourcedFoodMobile from "../../public/assets/homepage/locally-sourced-mobile@2x.jpg";
import SourcedFoodTablet from "../../public/assets/homepage/locally-sourced-tablet@2x.jpg";
import PlacesDesktop from "./Places/PlacesDesktop";

function Places() {
  return (
    <div className="container mx-auto w-full max-w-8xl">
      <div className="px-6 lg:hidden">
        <PlacesImageMobile />
        <PlacesImageTablet />
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-4 w-4 rounded-full border-2 border-[#9E7F66]"></div>
            <hr className="w-16 border-[1px] border-[#9E7F66] bg-[#9E7F66]" />
          </div>

          <div className="mt-9 mb-[100px] flex flex-col items-center justify-center text-center">
            <h2 className="max-w-[230px] text-3xl font-bold leading-10 tracking-[-0.4px] text-primaryCodGray">
              Enjoyable place for all the family
            </h2>

            <p className="mt-3 max-w-[327px] text-center text-[16px] leading-6 text-ebonyClay md:max-w-[457px] ">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
          <div className="mt-[101px]">
            <SourcedImageMobile />
            <SourcedImageTablet />
            <div className="flex items-center justify-center space-x-4">
              <div className="h-4 w-4 rounded-full border-2 border-[#9E7F66]"></div>
              <hr className="w-16 border-[1px] border-[#9E7F66] bg-[#9E7F66]" />
            </div>
            <div className="mt-9 mb-[100px] flex flex-col items-center justify-center text-center">
              <h2 className="max-w-[230px] text-3xl font-bold leading-10 tracking-[-0.4px] text-primaryCodGray">
                The most locally sourced food
              </h2>

              <p className="mt-3 max-w-[327px] text-center text-[16px] leading-6 text-ebonyClay md:max-w-[457px]">
                All our ingredients come directly from our farm or local
                fishery. So you can be sure that you’re eating the freshest,
                most sustainable food.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <PlacesDesktop />
      </div>
    </div>
  );
}

export default Places;

export const PlacesImageMobile = () => {
  return (
    <div className="relative flex items-center justify-center md:hidden lg:hidden">
      <Image
        src={ImageMobile}
        alt="Places"
        width={327}
        height={400}
        // put the image in the center
        className="relative top-[120px] -translate-y-1/2 transform  shadow-xl shadow-black/50"
      />
    </div>
  );
};

export const PlacesImageTablet = () => {
  return (
    <div className="relative hidden items-center justify-center  md:flex lg:hidden">
      <Image
        src={ImageTablet}
        alt="Places"
        width={573}
        height={360}
        // put the image in the center
        className="relative top-[120px] -translate-y-1/2 transform  shadow-xl shadow-black/50"
      />
    </div>
  );
};

export const PlacesImageDesktop = () => {
  return (
    <div className="relative hidden items-center justify-center  md:flex lg:hidden">
      <Image
        src={ImageDesktop}
        alt="Places"
        width={573}
        height={360}
        // put the image in the center
        className="relative top-[120px] -translate-y-1/2 transform  shadow-xl shadow-black/50"
      />
    </div>
  );
};

export const SourcedImageMobile = () => {
  return (
    <div className="relative flex items-center justify-center md:hidden lg:hidden">
      <Image
        src={SourcedFoodMobile}
        alt="Sourced Food"
        width={327}
        height={400}
        // put the image in the center
        className="relative top-[120px] -translate-y-1/2 transform  shadow-xl shadow-black/50"
      />
    </div>
  );
};

export const SourcedImageTablet = () => {
  return (
    <div className="relative hidden items-center justify-center  md:flex lg:hidden">
      <Image
        src={SourcedFoodTablet}
        alt="Places"
        width={573}
        height={360}
        // put the image in the center
        className="relative top-[120px] -translate-y-1/2 transform  shadow-xl shadow-black/50"
      />
    </div>
  );
};
