import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchCity } from "../../actions/flight";
import { hideModal } from "../../actions/modal";
import { ItemList } from "./ItemList";

export const ModalList = ( { source } ) => {
  const { show } = useSelector( state => state.modal )
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [{ city }, setCity] = useState({ city : ''})
  const textInput = useRef();

  const dispatch = useDispatch()

  const handleHideModal = () => {
    dispatch(hideModal())
  };

  const handleInputChange = ( { target }) => {
    dispatch( setSearchCity( target.value ))
    setCity({
      [ target.name ]: target.value
    });
  }

  useEffect(() => {
    textInput.current.focus();
  }, [show]);

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div>
          <span className="app-button-close"
            onClick={handleHideModal}
          >X</span>
        </div>
        <div className="app-row-item app-text-center app-container-card">
          <input
            type="text"
            placeholder="Buscar..."
            name="city"
            className="app-input card"
            autoComplete="off"
            ref={textInput}
            value={city}
            onChange={handleInputChange}
          />
        </div>
        <div className="app-row-item app-text-center app-div-list">
          <ItemList source= { source } setCity= { setCity }/>
        </div>
      </section>
    </div>
  );
};
