import { types } from "../types/types";

export const setErrorForm = (err) => ({
  type: types.error,
  payload: err
});

export const removeErrorForm = () => ({
  type: types.removeError
});

export const startLoadingForm = () => ({
  type: types.startLoading
});

export const finishLoadingForm = () => ({
  type: types.finishLoading
});