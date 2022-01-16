import { types } from "../types/types";
const initialState = {
  userBooking: {},
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
    default:
      return state
  }
};
