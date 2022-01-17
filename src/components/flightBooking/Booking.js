import React from 'react'
import { useSelector } from 'react-redux';
import { FormBooking } from './FormBooking'
import { ItemList } from './ItemList'

export const Booking = () => {
  const { status } = useSelector(state => state.booking);
  return (
    <>
      <div className="app-row-item app-text-center">
      {
        !status
        ?
        <ItemList />
        :
        <FormBooking />
      }
      </div>
    </>
  )
}
