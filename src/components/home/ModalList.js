import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../actions/modal";
import { ItemList } from "./ItemList";

export const ModalList = () => {
  const { show } = useSelector( state => state.modal )
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const dispatch = useDispatch()

  const actionHideModal = () => {
    dispatch(hideModal())
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div>
          <span className="app-button-close"
            onClick={actionHideModal}
          >X</span>
        </div>
        <div className="app-row app-text-center">
          <input
            type="text"
            placeholder="Aeropuerto de salida"
            name="email"
            className="app-input card"
            autoComplete="off"
          />
        </div>
        <div className="app-row app-text-center app-div-list">
          <ItemList />
        </div>
      </section>
    </div>
  );
};
