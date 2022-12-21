import React from "react";
import Image from "next/image";
import CTAImage from "../../public/assets/homepage/ready-bg-mobile@2x.jpg";

function CTA() {
  return (
    <div className="relative mt-[124px] h-[328px] w-full">
      <Image
        src={CTAImage}
        alt="CTA"
        fill={true}
        className="object-cover object-center"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-[250px]">
          <h4 className="text-center text-[32px] font-bold leading-10 tracking-[-0.4px] text-white">
            Ready to make a reservation?
          </h4>

          <div className="mt-7 flex w-full justify-center">
            <button className="w-[245px] border border-white py-6 text-[17px] font-semibold uppercase leading-4 tracking-[2.5px] text-white">
              Book a table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
