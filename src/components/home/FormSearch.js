import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../actions/modal';
import { ModalList } from './ModalList'

export const FormSearch = () => {
  const { booking, schedules } = useSelector( state => state.home );
  const dispatch = useDispatch()
  const [source, setSource] = useState('departure')

  const actionShowModal = ( source ) => {
    setSource(source)
    dispatch(showModal())
  };
  
  return (
    <>
      <div className="app-container">
        <form className="app-form animate__animated animate__slideInLeft">
          <div className="app-cardForm">
            <div className="app-card"
              onClick={() => actionShowModal('departure')}
            >
              <label>{ booking.departure.nameCity  || 'Ciudad' }</label> 
              <p>Origen</p>
            </div>
            <div className="app-card"
              onClick={() => actionShowModal('arrival')}
            >
              <label>{ booking.arrival.nameCity  || 'Ciudad' }</label>
              <p>{ schedules?.data.length ? 'Destino' : 'Sin destino' }</p>
            </div>
          </div>
          <div className="app-cardForm">
            <div className="app-card">
              <p>Horario</p>
            </div>
            <div className="app-card">
              <p>Numero de personas</p>
            </div>
          </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
            >
              Buscar
            </button>
        </form>
        <ModalList source={ source }/>
      </div>
    </>
  )
}
