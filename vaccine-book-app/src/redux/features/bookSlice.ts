// bookSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookState = {
    hospitalItems: BookingItem[];
};

const initialState: BookState = { hospitalItems: [] };

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<BookingItem>) => {
            // ตรวจสอบว่ามีข้อมูลการจองอยู่แล้วหรือไม่
            const existingReservation = state.hospitalItems.find(
                (item) =>
                    item.location === action.payload.location 
            );

            // หากไม่มีข้อมูลการจองอยู่แล้วให้เพิ่มข้อมูล
            if (!existingReservation) {
                state.hospitalItems.push(action.payload);
            } else {
                // หากมีข้อมูลการจองอยู่แล้วให้ทำการแทนที่
                state.hospitalItems = [
                    ...state.hospitalItems.filter(
                        (item) =>
                            item.location !== action.payload.location 
                    ),
                    action.payload,
                ];
            }
        },
        removeReservation: (state, action: PayloadAction<BookingItem>) => {
            // ให้ทำการลบข้อมูลการจองตาม location และ reserveDate ที่ระบุ
            state.hospitalItems = state.hospitalItems.filter(
                (item) =>
                    item.location !== action.payload.location ||
                    item.reserveDate !== action.payload.reserveDate
            );
        },
    },
});

export const { addReservation, removeReservation } = bookSlice.actions;
export default bookSlice.reducer;
