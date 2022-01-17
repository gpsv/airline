import axios from 'axios'
import { config}  from "../config";
import { types } from "../types/types";

export const getCities = () => {
  return ( dispatch ) => {
    dispatch(startLoading())
    const url = `${config.APIURL}${config.Cities}?key=${config.APIKEY}&codeIso2Country=MX`;
      return axios
        .get(url)
        .then(({ data }) => {
          dispatch(setCities(data));
          dispatch(finishLoading());
        })
        .catch(( error ) => {
          console.log(error);
          dispatch(finishLoading());
          throw error;
        });
    };
};

export const getAllCities = () => {
  return ( dispatch ) => {
    dispatch(startLoading());
    const url = `${config.APIURL}${config.Cities}?key=${config.APIKEY}`;
      return axios
        .get(url)
        .then(({ data }) => {
          dispatch(setAllCities(data));
          dispatch(finishLoading());
        })
        .catch(( error ) => {
          console.log(error);
          dispatch(finishLoading());
          throw error;
        });
    };
};

export const getAirports = () => {
  return ( dispatch ) => {
    dispatch(startLoading())
    const url = `${config.APIURL}${config.Airports}?key=${config.APIKEY}&codeIso2Country=MX`;
      return axios
        .get(url)
        .then( async ({ data } ) => {
          await dispatch( setAirports( data ) )
          dispatch(finishLoading())
        })
        .catch((error) => {
          console.log(error);
          dispatch(finishLoading())
          throw error;
        });
    };
};

export const getSchedules = ( iataCode ) => {
  return ( dispatch ) => {
    dispatch(startLoading())
    const url = `${config.APIURL}${config.Schedules}?key=${config.APIKEY}&iataCode=${iataCode}&type=departure`;
      return axios
        .get(url)
        .then(({ data }) => {
          dispatch( setSchedules( data ));
          dispatch(finishLoading());
        })
        .catch(( error ) => {
          console.log(error);
          dispatch(finishLoading());
          throw error;
        });
    };
};

export const setBooking = ( booking ) => ({
  type: types.setBooking,
  payload: booking
});

export const resetBooking = () => ({
  type: types.setBooking,
  payload: {
    departure: {},
    arrival: {},
    schedule: {},
    persons: 0,
    price: 0
  }
});

export const setSearchCity = ( city ) => ({
  type: types.setSearchCity,
  payload: {
    city
  }
});

export const setSchedules = ( schedules ) => ({
  type: types.setSchedules,
  payload: {
    info: 'List schedules',
    data: schedules
  }
});

export const setAirports = ( airports ) => ({
  type: types.setAirports,
  payload: {
    info: 'List airports',
    data: airports
  }
});

export const setCities = (cities) => ({
  type: types.setCities,
  payload: {
    info: 'List city',
    data: cities
  }
});

export const setAllCities = (cities) => ({
  type: types.setAllCities,
  payload: {
    info: 'List city',
    data: cities
  }
});

export const startLoading = () => ({
  type: types.flightStartLoading
})

export const finishLoading = () => ({
  type: types.flightFinishLoading
})