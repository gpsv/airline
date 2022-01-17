import { types } from "../types/types";

export const setBookingSelected = ( booking ) => ({
  type: types.setBookingSelected,
  payload: booking
});

export const removeBookingSelected = () => ({
  type: types.removeBookingSelected
});

export const addBooking = ( booking ) => ({
  type: types.addBooking,
  payload: booking
});