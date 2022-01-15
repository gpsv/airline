import React from 'react';
import { useSelector } from 'react-redux';

export const ItemList = () => {
  const { cities } = useSelector( state => state.home)
  console.log(cities.data)
  return (
    <ul className="app-list">
      {
        cities.data.map(city => (
          <li key={ city.cityId }>
            <div className="col-8 app-list-city">{ city.nameCity }</div>
            <div className="col-2 app-list-code">{ city.codeIataCity }</div>
          </li>
        ))
      }
     </ul>
  )
};
