import React, { useState } from "react";
import Image from "next/image";
import FamilyImage from "../../public/assets/homepage/family-gathering-mobile@2x.jpg";
import FamilyImageTablet from "../../public/assets/homepage/family-gathering-tablet@2x.jpg";

interface Props {
  title: string;
  index: number;
  selectedIndex: number;
  handleClick: (index: number) => void;
}

function Events() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="container mx-auto w-full max-w-8xl pt-20">
      <div className="flex flex-col items-center justify-center px-6">
        <Image
          src={FamilyImage}
          alt="family gathering"
          width={326}
          height={400}
          className="block shadow-xl shadow-black/50 md:hidden"
        />
        <Image
          src={FamilyImageTablet}
          alt="family gathering"
          width={573}
          height={360}
          className="hidden shadow-xl shadow-black/50 md:block"
        />

        <div className="mt-12 flex w-full flex-col items-center justify-center md:flex-row md:justify-between md:px-10">
          <Event
            title="Family Gathering"
            index={0}
            selectedIndex={selectedIndex}
            handleClick={handleClick}
          />
          <Event
            title="Special Events"
            index={1}
            selectedIndex={selectedIndex}
            handleClick={handleClick}
          />
          <Event
            title="Social Events"
            index={2}
            selectedIndex={selectedIndex}
            handleClick={handleClick}
          />
        </div>

        <div className="mt-7">
          {selectedIndex === 0 && <FamilyGathering />}
          {selectedIndex === 1 && <SpecialEvents />}
          {selectedIndex === 2 && <SocialEvents />}
        </div>

        <div className="mt-7 flex w-full justify-center md:mt-[60px]">
          <button className="w-[245px] bg-primaryCodGray py-6 text-[17px] font-semibold uppercase leading-4 tracking-[2.5px] text-white">
            Book a table
          </button>
        </div>
      </div>
    </div>
  );
}

export default Events;

export const Event = ({ title, index, selectedIndex, handleClick }: Props) => {
  return (
    <div
      className="mb-4 flex flex-col items-center justify-center  space-y-2 hover:cursor-pointer  md:space-y-0"
      onClick={() => handleClick(index)}
    >
      <span
        className={`${
          selectedIndex === index ? "text-[#4C4C4C]" : "text-[#4C4C4C]/50"
        } text-[17px] font-semibold uppercase leading-7 tracking-[2.5px] `}
      >
        {title}
      </span>
      {selectedIndex === index && (
        <hr className="w-16 border-[1px] border-[#9E7F66] bg-[#9E7F66]" />
      )}
    </div>
  );
};

export const FamilyGathering = () => {
  return (
    <div>
      <h2 className="text-center text-[32px] font-bold leading-10 tracking-[-0.4px] text-ebonyClay md:text-5xl">
        Family Gathering
      </h2>
      <p className="mt-3  max-w-[327px] text-center text-[16px] md:max-w-lg md:text-[20px]">
        We love catering for entire families. So please bring everyone along for
        a special meal with your loved ones. We’ll provide a memorable
        experience for all.
      </p>
    </div>
  );
};

export const SpecialEvents = () => {
  return (
    <div>
      <h2 className="text-center text-[32px] font-bold leading-10 tracking-[-0.4px] text-ebonyClay md:text-5xl">
        Special Events
      </h2>
      <p className="mt-3  max-w-[327px] text-center text-[16px] md:max-w-lg md:text-[20px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
        distinctio optio! Quasi, sed eveniet? Quaerat soluta mollitia quia eum
        illum minus?
      </p>
    </div>
  );
};

export const SocialEvents = () => {
  return (
    <div>
      <h2 className="text-center text-[32px] font-bold leading-10 tracking-[-0.4px] text-ebonyClay md:text-5xl">
        Social Events
      </h2>
      <p className="mt-3  max-w-[327px] text-center text-[16px] md:max-w-lg md:text-[20px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
        distinctio optio! Quasi, sed eveniet? Quaerat soluta mollitia quia eum
        illum minus?
      </p>
    </div>
  );
};
