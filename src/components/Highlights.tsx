import Image from "next/image";
import SalmonMealImg from "../../public/assets/homepage/salmon-mobile@2x.jpg";
import SalmonMealImgTablet from "../../public/assets/homepage/salmon-desktop-tablet@2x.jpg";
import BeefMealImg from "../../public/assets/homepage/beef-mobile@2x.jpg";
import BeefMealImgTablet from "../../public/assets/homepage/beef-desktop-tablet@2x.jpg";
import ChocolateImage from "../../public/assets/homepage/chocolate-mobile@2x.jpg";
import ChocolateImageTablet from "../../public/assets/homepage/chocolate-desktop-tablet@2x.jpg";

function Highlights() {
  return (
    <div className="container mx-auto w-full max-w-8xl bg-primaryCodGray">
      <div className="flex flex-col md:px-40 lg:flex-row lg:justify-evenly 2xl:justify-between">
        <div>
          <div className="pb-9 pt-[72px]">
            <div className="flex items-center justify-center space-x-4 lg:justify-start">
              <div className="h-4 w-4 rounded-full border-2 border-[#9E7F66]"></div>
              <hr className="w-16 border-[1px] border-[#9E7F66] bg-[#9E7F66]" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className=" mx-auto w-full max-w-[400px]    px-6 text-center text-[32px]  font-bold leading-10 text-white md:max-w-md md:text-5xl md:leading-[48px] md:tracking-[-0.5px] lg:px-0 lg:text-left">
              A few highlights from our menu
            </h2>
            <p className="mx-auto mt-5 w-full px-6 text-center text-[16px] leading-[26px] text-white md:max-w-md md:text-center md:text-[20px] lg:px-0 lg:text-left">
              We cater for all dietary requirements, but here’s a glimpse at
              some of our diner’s favourites. Our menu is revamped every season.
            </p>
          </div>
        </div>
        <div className="flex flex-col divide-y-[1px] divide-white/30  px-6 md:mt-14 md:mb-24">
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
    <div className="flex flex-col items-center justify-center pb-24  md:flex-row md:py-6">
      <div className="mt-20 flex items-center justify-center md:mt-0">
        <Image
          src={SalmonMealImg}
          alt="salmon meal"
          width={327}
          height={245}
          className="block md:hidden"
        />
        <Image
          src={SalmonMealImgTablet}
          alt="salmon meal"
          width={128}
          height={96}
          className="hidden md:block"
        />
      </div>

      <div className="ml-8  mt-9 flex flex-col items-start md:mt-0">
        <h3 className="w-full text-center text-xl font-bold leading-6 tracking-[-0.25px] text-white md:text-left">
          Seared Salmon Fillet
        </h3>
        <p className="mt-2 max-w-[327px]  text-center text-[16px] leading-[26px] text-white md:max-w-sm md:text-left">
          Our locally sourced salmon served with a refreshing buckwheat summer
          salad.
        </p>
      </div>
    </div>
  );
};

export const FoodContainer2 = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-24  md:flex-row md:py-6">
      <div className="mt-20 flex items-center justify-center md:mt-0">
        <Image
          src={BeefMealImg}
          alt="Rosemary Filet Mignon"
          width={327}
          height={245}
          className="block md:hidden"
        />
        <Image
          src={BeefMealImgTablet}
          alt="Rosemary Filet Mignon"
          width={128}
          height={96}
          className="hidden md:block"
        />
      </div>
      <div className="ml-8  mt-9 flex flex-col items-start md:mt-0">
        <h3 className="w-full text-center text-xl font-bold leading-6 tracking-[-0.25px] text-white  md:text-left">
          Rosemary Filet Mignon
        </h3>
        <p className="mt-2 max-w-[327px]  text-center text-[16px] leading-[26px] text-white md:max-w-sm md:text-left">
          Our prime beef served to your taste with a delicious choice of
          seasonal sides.
        </p>
      </div>
    </div>
  );
};

export const FoodContainer3 = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-24  md:flex-row md:py-6">
      <div className="mt-20 flex items-center justify-center md:mt-0">
        <Image
          src={ChocolateImage}
          alt="Summer Fruit Chocolate Mousse"
          width={327}
          height={245}
          className="block md:hidden"
        />
        <Image
          src={ChocolateImageTablet}
          alt="Summer Fruit Chocolate Mousse"
          width={128}
          height={96}
          className="hidden md:block"
        />
      </div>
      <div className="ml-8  mt-9 flex flex-col items-start md:mt-0">
        <h3 className="w-full text-center text-xl font-bold leading-6 tracking-[-0.25px] text-white  md:text-left">
          Summer Fruit Chocolate Mousse
        </h3>
        <p className="mt-2 max-w-[340px]  text-center text-[16px] leading-[26px] text-white md:max-w-sm md:text-left">
          Creamy mousse combined with summer fruits and dark chocolate shavings.
        </p>
      </div>
    </div>
  );
};
