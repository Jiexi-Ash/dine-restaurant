import React from "react";
import Image from "next/image";
import SalmonMealImg from "../../public/assets/homepage/salmon-mobile@2x.jpg";
import BeefMealImg from "../../public/assets/homepage/beef-mobile@2x.jpg";
import ChocolateImage from "../../public/assets/homepage/chocolate-mobile@2x.jpg";

function Highlights() {
  return (
    <div className="container mx-auto w-full max-w-8xl bg-primaryCodGray">
      <div className="pb-9 pt-[72px]">
        <div className="flex items-center justify-center space-x-4">
          <div className="h-4 w-4 rounded-full border-2 border-[#9E7F66]"></div>
          <hr className="w-16 border-[1px] border-[#9E7F66] bg-[#9E7F66]" />
        </div>
      </div>
      <div>
        <h2 className=" mx-auto w-full max-w-[400px]    px-6 text-center text-[32px]  font-bold leading-10 text-white">
          A few highlights from our menu
        </h2>
        <p className="mt-5 px-6 text-center text-[16px] leading-[26px] text-white">
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>

        <div className="flex flex-col divide-y-[1px] divide-white/30  px-6">
          <FoodContainer1 />
          <FoodContainer2 />
          <FoodContainer3 />
        </div>
      </div>
    </div>
  );
}

export default Highlights;

export const FoodContainer1 = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-24">
      <div className="mt-20 flex items-center justify-center">
        <Image src={SalmonMealImg} alt="salmon meal" width={327} height={245} />
      </div>
      <div>
        <h3 className="mt-9 text-center text-xl font-bold leading-6 tracking-[-0.25px] text-white">
          Seared Salmon Fillet
        </h3>
        <p className="mt-2  text-center text-[16px] leading-[26px] text-white">
          Our locally sourced salmon served with a refreshing buckwheat summer
          salad.
        </p>
      </div>
    </div>
  );
};

export const FoodContainer2 = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-24">
      <div className="mt-20 flex items-center justify-center">
        <Image
          src={BeefMealImg}
          alt="Rosemary Filet Mignon"
          width={327}
          height={245}
        />
      </div>
      <div>
        <h3 className="mt-9 text-center text-xl font-bold leading-6 tracking-[-0.25px] text-white">
          Rosemary Filet Mignon
        </h3>
        <p className="mt-2  text-center text-[16px] leading-[26px] text-white">
          Our prime beef served to your taste with a delicious choice of
          seasonal sides.
        </p>
      </div>
    </div>
  );
};

export const FoodContainer3 = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-24">
      <div className="mt-20 flex items-center justify-center">
        <Image
          src={ChocolateImage}
          alt="Summer Fruit Chocolate Mousse"
          width={327}
          height={245}
        />
      </div>
      <div>
        <h3 className="mt-9 text-center text-xl font-bold leading-6 tracking-[-0.25px] text-white">
          Summer Fruit Chocolate Mousse
        </h3>
        <p className="mt-2  text-center text-[16px] leading-[26px] text-white">
          Creamy mousse combined with summer fruits and dark chocolate shavings.
        </p>
      </div>
    </div>
  );
};
