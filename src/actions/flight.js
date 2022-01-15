import axios from 'axios'
import { config}  from "../config";
import { types } from "../types/types";

export const getCities = () => {
 return (dispatch) => {
  const url = `${config.APIURL}${config.Cities}?key=${config.APIKEY}`;
  return axios
   .get(url)
   .then((response) => {
    console.log(response);
   })
   .catch((error) => {
     console.log(error);
    throw error;
   });
 };
};
