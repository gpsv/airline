import { types } from "../types/types";

const initialState = {
  airports: null,
  allCities: null,
  booking: {
    departure: {},
    arrival: {},
    schedule: {},
    persons: 0,
    price: 0
  },
  cities: null,
  loading: false,
  schedules: null,
  searchCity: { city: ''}
}

export const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.flightStartLoading:
      return {
        ...state,
        loading: true
      }
    case types.flightFinishLoading:
      return {
        ...state,
        loading: false
      }
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