import React from 'react'
import { useDispatch } from 'react-redux';
import { showModal } from '../../actions/modal';
import { ModalList } from './ModalList'

export const FormSearch = () => {
  const dispatch = useDispatch()
  const actionShowModal = () => {
    dispatch(showModal())
  };
  return (
    <>
      <div className="app-container">
        <form className="app-form animate__animated animate__slideInLeft">
          <div className="app-cardForm">
            <div className="app-card"
              onClick={actionShowModal}
            >
              <label>Ciudad</label> 
              <p>Origen</p>
            </div>
            <div className="app-card">
              <label>Ciudad</label> 
              <p>Destino</p>
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
        <ModalList />
      </div>
    </>
  )
}
