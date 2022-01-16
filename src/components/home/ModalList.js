import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchCity } from "../../actions/flight";
import { hideModal } from "../../actions/modal";
import { ItemList } from "./ItemList";

export const ModalList = ( { source } ) => {
  const { show } = useSelector( state => state.modal )
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [{ city }, setCity] = useState({ city : ''})
  
  const dispatch = useDispatch()

  const handleHideModal = () => {
    dispatch(hideModal())
  };

  const handleInputChange = ( { target }) => {
    setCity({
      [ target.name ]: target.value
    });
    dispatch( setSearchCity( city ))
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div>
          <span className="app-button-close"
            onClick={handleHideModal}
          >X</span>
        </div>
        <div className="app-row app-text-center">
          <input
            type="text"
            placeholder="Ciudad"
            name="city"
            className="app-input card"
            autoComplete="off"
            value={city}
            onChange={handleInputChange}
          />
        </div>
        <div className="app-row app-text-center app-div-list">
          <ItemList source= { source } />
        </div>
      </section>
    </div>
  );
};
