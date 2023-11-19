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
            const existingReservation = state.hospitalItems.find(
                (item) =>
                    item.location === action.payload.location 
            );

            if (!existingReservation) {
                state.hospitalItems.push(action.payload);
            } else {
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
