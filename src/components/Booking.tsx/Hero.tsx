import React from "react";
import Logo from "../../../public/assets/logo.svg";
import Image from "next/image";
import BookingForm from "./BookingForm";

function Hero() {
  return (
    <div className="container relative mx-auto  w-full max-w-8xl">
      <div className="h-[600px] w-full bg-red-500 bg-booking-hero bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-center justify-center pt-14">
          <Image src={Logo} alt="Logo" />

          <div className="mt-11 px-6 text-center">
            <h1 className="font-light text-white">Reservations</h1>

            <p className="mt-3 text-[16px] font-normal leading-6 text-white">
              We can’t wait to host you. If you have any special requirements
              please feel free to call on the phone number below. We’ll be happy
              to accommodate you.
            </p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="btn  py-6 text-[17px] font-semibold  tracking-[2.5px]"
            >
              RESERVE PLACE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
