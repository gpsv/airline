import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSchedules, setBooking } from '../../actions/flight';
import { hideModal } from '../../actions/modal';

export const ItemList = ( { source = 'departure' }) => {
  const { cities, searchCity, booking, schedules, allCities } = useSelector( state => state.home)
  const [arrivalCity, setArrivalCity] = useState([])
  const dispatch = useDispatch()
  const userBooking = booking;
  const handleCity = ( selectedCity ) => {
    if ( source === 'departure') {
      userBooking.departure = selectedCity;
    } else {
      userBooking.arrival = selectedCity;
    }
    dispatch( setBooking(userBooking) )
    dispatch ( getSchedules( selectedCity.codeIataCity ) )
    dispatch( hideModal() )
  }

  const setArrivalCities = async () => {
    const filteredArray = schedules?.data?.map( schedule => (
          allCities?.data.find( city => schedule.arrival.iataCode === city.codeIataCity)
        ))
    let hash = {};
    const finalFilter = filteredArray.filter(city => hash[city?.codeIataCity] ? false : hash[city?.codeIataCity] = true);
    setArrivalCity(finalFilter)
  }

  useEffect(() => {
    if ( schedules?.data.length ) {
      setArrivalCities();
    }
  }, [schedules])
  return (
    <>
      <ul className="app-list">
        {
          source === 'departure'
          ?
          cities?.data.map( city => (
            city?.nameCity.toLowerCase().indexOf( searchCity.city ) >= 0
              &&
              <li 
                key={ city.cityId }
                onClick={ () => handleCity(city) }
              >
                <div className="col-8 app-list-city">{ city.nameCity }</div>
                <div className="col-2 app-list-code">{ city.codeIataCity }</div>
              </li>
          ))
          :
          arrivalCity.length > 0
          &&
          arrivalCity?.map( city => (
            city?.nameCity.toLowerCase().indexOf( searchCity.city ) >= 0
              &&
              <li 
                key={ city.cityId }
                onClick={ () => handleCity(city) }
              >
                <div className="col-8 app-list-city">{ city.nameCity }</div>
                <div className="col-2 app-list-code">{ city.codeIataCity }</div>
              </li>
          ))
        }
      </ul>
    </>

  )
};
