import axios from 'axios'
import { config}  from "../config";
import { types } from "../types/types";

export const getCities = () => {
  return (dispatch) => {
    const url = `${config.APIURL}${config.Cities}?key=${config.APIKEY}`;
      return axios
        .get(url)
        .then(({data}) => {
          dispatch(setCities(data))
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });
    };
};

export const setCities = (cities) => ({
  type: types.setCities,
  payload: {
    info: 'List city',
    data: cities
  }
})