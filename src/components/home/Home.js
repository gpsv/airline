import React, { useEffect } from 'react'
import { FormSearch } from './FormSearch'
import { useDispatch, useSelector } from 'react-redux'
import { getCities, getAirports, getAllCities } from '../../actions/flight'
import { Airline } from './Airline'
import { Flight } from './Flight'

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCities());
    dispatch(getAirports());
    dispatch(getAllCities());
  });

  const { bookingSelected } = useSelector(state => state.booking);
  return (
    <>
      <div className="app-row">
        <div className='col-8 col-s-12'>
          <FormSearch />
        </div>
        <div className="col-4 col-s-12">
        {
          bookingSelected?.status
          &&
          <div className="app-detail-airline animate__animated animate__slideInRight">
            <div>
              <Flight flight={ bookingSelected?.flight?.number }/>
              <Airline airline={ bookingSelected?.airline?.name}/>
            </div>
          </div>
        }
        </div>
      </div>
    </>
  )
}
