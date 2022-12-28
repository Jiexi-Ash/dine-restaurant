import React from "react";
import BookingForm from "../components/Booking.tsx/BookingForm";
import Footer from "../components/Booking.tsx/Footer";
import Reservation from "../components/Booking.tsx/Hero";

function Booking() {
  return (
    <>
      <Reservation />
      <BookingForm />
      <Footer />
    </>
  );
}

export default Booking;
