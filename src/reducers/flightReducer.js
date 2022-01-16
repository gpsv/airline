import { types } from "../types/types";

const initialState = {
  loading: false,
  cities: null,
  allCities: null,
  airports: null,
  schedules: null,
  searchCity: { city: ''},
  booking: {
    departure: {},
    arrival: {},
    schedule: {},
    persons: 0,
    price: 0
  }
}

export const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setCities:
      return {
        ...state,
        cities: action.payload
      }
    case types.setAllCities:
      return {
        ...state,
        allCities: action.payload
      }
    case types.setAirports:
      return {
        ...state,
        airports: action.payload
      }
    case types.setSchedules:
      return {
        ...state,
        schedules: action.payload
      }
    case types.setSearchCity:
      return {
        ...state,
        searchCity: action.payload
      }
    case types.setBooking:
      return {
        ...state,
        booking: action.payload
      }
    default:
      return state
  }
}