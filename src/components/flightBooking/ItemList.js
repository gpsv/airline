import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking, statusBooking } from '../../actions/booking';

export const ItemList = () => {
  const { userBooking } = useSelector(state => state.booking);
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0);
  
  const totalBooking = () => {
    let  myTotal = 0
    userBooking.map(function ( item ) {
      myTotal += parseFloat(item.price * item.persons);
    });
    setTotal(myTotal);
  }

  const handleDeleteBooking = ( indexItem ) => {
    dispatch(addBooking(userBooking.filter( ( item, index ) => index !== indexItem)));
  }

  const handleBooking = () => {
    dispatch(statusBooking('preparing'));
  }

  useEffect(() => {
    if ( userBooking.length > 0 ) {
      totalBooking()
    }
  }, [userBooking])
  
  return (
    <>
    <h2 className='animate__animated animate__zoomInDown'>Mis reservas</h2>
      {
      userBooking.length > 0
      &&
      <table className="app-table animate__animated animate__zoomInDown">
        <thead>
          <tr>
            <th>No. vuelo</th>
            <th>Aereolinea</th>
            <th>Origen</th>
            <th>Destino</th>
            <th>No. personas</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            userBooking.map( (item, index ) => (
              <tr key={ index }>
                <td>{`${item.flight.number}`}</td>
                <td>{`${item.airline.name}`}</td>
                <td>{`${item.schedule?.departure?.nameCity }`}</td>
                <td>{`${item.schedule.arrival.nameCity }`}</td>
                <td>{`${item.persons}`}</td>
                <td className="app-price">{`$ ${parseFloat(item.price * item.persons).toFixed(2)}`}</td>
                <td className='app-table-actions'>
                  <button 
                    className="btn btn-primary btn-block"
                    onClick={() => handleDeleteBooking( index )}
                    >Eliminar
                    </button>
                </td>
              </tr>
            ))
          }
          <tr>
            <th colSpan={5}>
              <button 
                className="btn btn-success btn-block"
                onClick={() => handleBooking()}
                >Reservar
              </button>
            </th>
            <td className="app-price">Total: ${ parseFloat( total ).toFixed(2)}</td>
          </tr>
        </tbody>
        </table>
        }
    </>
  )
};
