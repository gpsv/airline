import React from 'react';
import { useSelector } from 'react-redux';

export const ItemList = () => {
  const { userBooking } = useSelector(state => state.booking);
  return (
    <>
      <ul className="app-list">
        {
          userBooking.length > 0
          &&
          userBooking.map( (item, index ) => (
            <li 
              key={ index }
            >
              <div className="col-8 app-list-city">{ item.nameCity }</div>
              <div className="col-2 app-list-code">{ city?.codeIataCity }</div>
            </li>
          ))
        }
      </ul>
    </>

  )
};
