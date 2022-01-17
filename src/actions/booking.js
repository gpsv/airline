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
})
export const statusBooking = ( status ) => ({
  type: types.statusBooking,
  payload: status
});

export const sendBooking = () => ({
  type: types.sendBooking,
  payload: []
});
