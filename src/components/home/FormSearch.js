import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { showModal } from '../../actions/modal';
import { ModalList } from './ModalList'
import { removeErrorForm, setErrorForm } from '../../actions/forms.js';
import { addBooking, removeBookingSelected, setBookingSelected } from '../../actions/booking';
import { resetBooking } from '../../actions/flight';

export const FormSearch = () => {
  const dispatch = useDispatch()
  const { booking, schedules, loading } = useSelector( state => state.home );
  const { bookingSelected, userBooking } = useSelector(state => state.booking);
  const { msgError } = useSelector( state => state.form )
  const [source, setSource] = useState('departure');
  const [date, setDate] = useState('');
  const [person, setPerson] = useState(0);
  const [price, setPrice] = useState(0)
  const [priceToday, setPriceTopday] = useState(Math.floor(Math.random() * (1500 - 300 )));
  
  const actionShowModal = ( source ) => {
    setSource(source)
    dispatch(showModal())
  };
  
  const selectedDate = ({ target }) => {
    setDate(target.value);
    dispatch(setBookingSelected(schedules.data[target.value]));
    setPriceTopday(Math.floor(Math.random() * (1500 - 300 )))
  };

  const isFormValid = () => {
    if (!booking.departure.nameCity) {
      dispatch(setErrorForm('Selecciona un origen'));
      return false;
    } else if (!booking.arrival.nameCity) {
      dispatch(setErrorForm('Selecciona un destino'));
      return false;
    } else if ( date === '' || date === 'Selleciona una fecha' || date === 'No hay horarios' || !bookingSelected?.status) {
      dispatch(setErrorForm('Selecciona una fecha'));
      return false;
    } else if (person === 0) {
      dispatch(setErrorForm('Agregue a una persona por lo menos'));
      return false;
    }
    dispatch(removeErrorForm());
    return true
  };
  
  const resetForm = () => {
    setPerson(0);
    dispatch(resetBooking());
    dispatch(removeBookingSelected());
  }

  const handlePerson = ({ target }) => {
    setPerson(target.value)
    setPrice(Number.parseFloat(target.value * priceToday).toFixed(2));
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if ( isFormValid() ) {
      const finalItem = bookingSelected;
      finalItem.persons = person;
      finalItem.price = price;
      finalItem.schedule = booking;
      const itemCart = [...userBooking, finalItem]
      dispatch(addBooking(itemCart))
      resetForm()
    }
  };
  
  return (
    <>
      <div className="app-container ">
        <form 
          className="app-form animate__animated animate__slideInLeft" 
          onSubmit={handleBooking}
        >
        <h1 className='animate__animated animate__zoomInDown'>Buscando un destino</h1>
          {
            loading
            && (<span className='animate__animated animate__fadeInDown'>Procesando...</span>)
          }
          <div className="app-cardForm">
            <div className="app-item-row">
              <div className="app-card col-s-6"
                onClick={() => actionShowModal('departure')}
              >
                <label>{ booking?.departure?.nameCity  || 'Ciudad' }</label> 
                <p>Origen</p>
              </div>
              <div className="app-card col-s-6"
                onClick={() => actionShowModal('arrival')}
              >
                <label>{ booking?.arrival?.nameCity  || 'Ciudad' }</label>
                <p>
                  { 
                    schedules?.data.length 
                    ? 'Destino' 
                    : 'Sin destino' 
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="app-cardForm">
          <div className="app-item-row">
            <div className="app-card col-s-6 col-12">
              <select className="app-select"
                onChange={selectedDate}
              >
                <option key="ItemInf0">
                  {
                    schedules?.data.length > 0 
                    ? 'Selleciona una fecha' 
                    : 'No hay horarios'
                  }
                </option>
                {
                  schedules?.data.length > 0
                  &&
                  schedules?.data.map( function ( schedule, index ) {
                    if( booking?.departure.codeIataCity === schedule?.departure.iataCode
                      && 
                      booking?.arrival.codeIataCity === schedule?.arrival.iataCode
                      ){
                      return (<option value={ index } key={ index }>{ moment(schedule.arrival.scheduledTime).format('DD-MMM-YY HH:mm:ss') }</option>)
                    }
                  })
                }
              </select>
              <p className="app-parrafo">Horario</p>
            </div>
            <div className="app-card col-s-6 col-12">
              <div className="app-row app-text-center">
                <input
                  type="number"
                  placeholder="Numero de personas"
                  name="city"
                  className="app-input card"
                  autoComplete="off"
                  value={person}
                  onChange={handlePerson}
                />
              </div>
                <p>Precio ${ person > 0 && price }</p>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-success btn-block"
          >
            Agregar
          </button>
          {   
            msgError &&
            (
              <span  className="animate__animated animate__fadeInDown app-alert-error">
                  { msgError }
              </span>
            )
          }
        </form>
        <ModalList source={ source }/>
      </div>
    </>
  )
}
