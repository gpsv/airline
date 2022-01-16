import React, { useEffect } from 'react'
import { FormSearch } from './FormSearch'
import { useDispatch } from 'react-redux'
import { getCities, getAirports, getAllCities } from '../../actions/flight'

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCities());
    dispatch(getAirports());
    dispatch(getAllCities());
  });
  return (
    <>
      <h1 className='animate__animated animate__zoomInDown'>Buscando un destino</h1>
      <FormSearch
        
      />
    </>
  )
}
