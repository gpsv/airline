import { types } from "../types/types";
const initialState = {
  show: false
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.showModal:
      return {
        show: true
      }
    case types.hideModal:
      return {
        show: false
      }
    default:
      return state
  }
};
