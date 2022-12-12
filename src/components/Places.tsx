import React from "react";
import Image from "next/image";
import PlacesImage from "../../public/assets/homepage/enjoyable-place-mobile@2x.jpg";

function Places() {
  return (
    <div className="w-full px-6">
      <div className="relative flex items-center justify-center">
        <Image
          src={PlacesImage}
          alt="Places"
          width={327}
          height={400}
          // put the image in the center
          className="relative top-[120px] -translate-y-1/2 transform  shadow-xl shadow-black/50"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex items-center justify-center space-x-4">
          <div className="h-4 w-4 rounded-full border-2 border-[#9E7F66]"></div>
          <hr className="w-16 border-[1px] border-[#9E7F66] bg-[#9E7F66]" />
        </div>

        <div className="mt-9 mb-[100px] flex flex-col items-center justify-center text-center">
          <h2 className="max-w-[230px] text-3xl font-bold leading-10 tracking-[-0.4px] text-primaryCodGray">
            Enjoyable place for all the family
          </h2>

          <p className="mt-3 text-center text-[16px] leading-6 text-ebonyClay">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Places;
