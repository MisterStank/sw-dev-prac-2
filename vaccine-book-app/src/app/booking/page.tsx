"use client"
import LocationDateReserve from "@/components/LocationDateReserve";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { useSearchParams } from "next/navigation";
import { useState } from "react"
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addReservation } from "@/redux/features/bookSlice";
import { BookingItem } from "../../../interfaces";

function Booking() {

  const urlParams = useSearchParams()
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationalID, setNationalID] = useState('');  
  const dispatch =  useDispatch<AppDispatch>()
  const makeReservation = () => {
    if (firstName && lastName && reserveDate && location && nationalID) {
      const item: BookingItem = {
        firstName: firstName,
        lastName: lastName,
        nationalID: nationalID,
        reserveDate: dayjs(reserveDate).format("YYYY/MM/DD"),
        location: location
      };
      dispatch(addReservation(item));
    }
  };
  

  const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)
  const [location, setLocation] = useState('') 

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-xl text-gray-600 mt-5 mb-5 font-bold">
        New Reservation
      </div>
      <div className="w-fit space-y-2">
        <div className="w-[100%] flex flex-row">
          <div className="text-md text-left text-gray-600">Name</div>
          <input
            type="text"
            id="name"
            placeholder="your name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="ml-5 mr-5 rounded ring-1 ring-inset ring-gray-600
              text-md leading-6 indent-2 placeholder:text-gray-400
              focus:outline-none focus:ring-sky-800 focus:placeholder:text-sky-800"
          />
          <div className="text-md text-left text-gray-600">Lastname</div>
          <input
            type="text"
            id="lastName"
            placeholder="your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="ml-5 mr-5 rounded ring-1 ring-inset ring-gray-600
              text-md leading-6 indent-2 placeholder:text-gray-400
              focus:outline-none focus:ring-sky-800 focus:placeholder:text-sky-800"
          />
          </div>
        <div className="w-[100%] flex flex-row">
          <div className="text-md text-left text-gray-600">National ID No.</div>
          <input
            type="text"
            id="NationalIDNo"
            placeholder="National ID No"
            value={nationalID}
            onChange={(e) => setNationalID(e.target.value)}
            className="ml-5 mr-5 rounded ring-1 ring-inset ring-gray-600
              text-md leading-6 indent-2 placeholder:text-gray-400
              focus:outline-none focus:ring-sky-800 focus:placeholder:text-sky-800"
          />
        </div>
        <div className="text-md text-left text-gray-600">
          Choose Date and Location
        </div>
        <LocationDateReserve onDateChange={(value:Dayjs)=>{setReserveDate(value)}}
          onLocationChange={(value:string)=>setLocation(value)}
        />
      </div>
      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
        shadow-sm text-white" onClick={makeReservation}
      >
        submit
      </button>
    </main>
  );
}

export default Booking;
