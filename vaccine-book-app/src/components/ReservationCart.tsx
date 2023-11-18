"use client"
import { removeReservation } from "@/redux/features/bookSlice"
import { useAppSelector } from "@/redux/store"
import { AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function ReservationCart() {
     const hospitalItems = useAppSelector((state) => state.bookSlice.hospitalItems)
     const dispatch = useDispatch<AppDispatch>()
     return (
        <>
        {
            hospitalItems.map((BookingItem)=> (
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={BookingItem.location}>
                    <div className="text-xl">{BookingItem.location}</div>
                    <div className="text-sm">Name: {BookingItem.firstName} {BookingItem.lastName}</div>
                    <div className="text-sm">Booking Date: {BookingItem.reserveDate}</div>
                    <button
                        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                        shadow-sm text-white" onClick={()=>dispatch(removeReservation(BookingItem))}
                    >
                        Remove
                    </button>
                </div>

            ))
        }
        </>
     )

}