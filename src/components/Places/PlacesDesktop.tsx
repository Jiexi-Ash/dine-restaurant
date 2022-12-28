import React from "react";
import Image from "next/image";
import ImageDesktop from "../../../public/assets/homepage/enjoyable-place-desktop@2x.jpg";
import ImageDesktop2 from "../../../public/assets/homepage/locally-sourced-desktop@2x.jpg";

function PlacesDesktop() {
  return (
    <>
      <div className="mt-[128px] flex w-full justify-between px-40 lg:justify-evenly 2xl:justify-between">
        <PlacesImageDesktop1 />

        <div className="lg:ml-12">
          <h2 className="w-full max-w-[400px] text-5xl font-bold leading-[48px] tracking-[-0.5px]">
            Enjoyable place for all the family
          </h2>

          <p className="mt-7 w-full max-w-[430px] text-ebonyClay">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>
      <div className="mt-[128px] flex w-full flex-row-reverse justify-between px-[163px]">
        <PlacesImageDesktop2 />

        <div className="text-left">
          <h2 className="w-full max-w-[400px] text-5xl font-bold leading-[48px] tracking-[-0.5px]">
            Enjoyable place for all the family
          </h2>

          <p className="mt-7 w-full max-w-[430px] text-ebonyClay">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>
    </>
  );
}

export default PlacesDesktop;

export const PlacesImageDesktop1 = () => {
  return (
    <div className="relative  flex items-center  justify-between">
      <Image
        src={ImageDesktop}
        alt="Places"
        width={540}
        height={720}
        // put the image in the center
        className="relative top-[120px] -translate-y-1/2 transform  shadow-xl shadow-black/50 lg:top-[100px] 2xl:top-[120px]"
      />
    </div>
  );
};

export const PlacesImageDesktop2 = () => {
  return (
    <div className="relative  flex items-center  justify-between">
      <Image
        src={ImageDesktop2}
        alt="Places"
        width={540}
        height={720}
        // put the image in the center
        className="relative top-[120px] -translate-y-1/2 transform  shadow-xl shadow-black/50 lg:top-[100px] 2xl:top-[120px]"
      />
    </div>
  );
};
