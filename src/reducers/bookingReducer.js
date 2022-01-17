import { types } from "../types/types";
const initialState = {
  bookingSelected: {},
  userBooking: [],
  status: null
};

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addBooking:
      return {
        ...state,
        userBooking: action.payload
      }
    case types.removeBooking:
      return {
        ...state,
        userBooking: action.payload
      }
    case types.setBookingSelected:
      return {
        ...state,
        bookingSelected: action.payload
      }
    case types.removeBookingSelected:
      return {
        ...state,
        bookingSelected: {}
      }
    default:
      return state
  }
};
