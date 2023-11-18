"use client"
import React from "react";
import {useSelector} from "react-redux";
import ReservationCart from "@/components/ReservationCart";
import { RootState } from "@/redux/store";

function MyBooking() {
  const hospitalItems = useSelector((state: RootState) => state.bookSlice.hospitalItems);

  return (
    <main>
      {hospitalItems.length > 0 ? (
        <ReservationCart></ReservationCart>
      ) : (
        <div className="text-xl text-center text-gray-600 mt-5 mb-5 font-bold">
          No Vaccine Booking
        </div>
      )}
    </main>
  );
}

export default MyBooking;