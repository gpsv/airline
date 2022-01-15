import { types } from "../types/types";

const initialState = {
  loading: false,
  cities: null
}

export const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setCities:
      return {
        cities: action.payload
      }  
    default:
      return state
  }
}