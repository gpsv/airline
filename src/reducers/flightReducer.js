import { types } from "../types/types";

const initialState = {
  loading: false,
  cities: null
}

export const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getCities:
      return {
        cityId: action.payload.cityId,
        codeIso2Country: action.payload.codeIso2Country,
        latitudeCity:  action.payload.latitudeCity,
        longitudeCity: action.payload.longitudeCity,
        nameCity:  action.payload.nameCity,
        timezone:  action.payload.timezone
      }  
    default:
      return state
  }
}