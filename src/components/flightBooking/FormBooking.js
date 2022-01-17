import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { useForm } from "../../hooks/useForm";
import { removeErrorForm, setErrorForm } from "../../actions/forms.js";
import { addBooking, sendBooking, statusBooking } from "../../actions/booking";

export const FormBooking = () => {
 const { msgError } = useSelector((state) => state.form);
 const dispatch = useDispatch();
 const [formValues, handleInputChange, reset] = useForm({
  name: "",
  lastName: "",
  email: "",
  address: "",
 });

 const { name, lastName, email, address } = formValues;

 const handleRegister = (e) => {
  e.preventDefault();
  if (isFormValid()) {
   dispatch(sendBooking(name, lastName, email, address));
  }
 };

  const handleBooking = (e) => {
    dispatch(statusBooking(null))
  }

 const isFormValid = () => {
  if (name.trim().length === 0) {
   dispatch(setErrorForm("Nombre es requerido"));
   return false;
  } else if (!validator.isEmail(email)) {
   dispatch(setErrorForm("email no es valido"));
   return false;
  } else if (lastName.trim().length === 0) {
   dispatch(setErrorForm("Apellido requerido"));
   return false;
  } else if (address.trim().length === 0) {
    dispatch(setErrorForm("Dirección requerido"));
    return false;
  }
  dispatch(setErrorForm("Procesando..."));
  setTimeout(() => {
    dispatch(setErrorForm("Registro Exitoso"));
    dispatch(addBooking([]));
    reset();
  }, 3000);
  setTimeout(() => {
    dispatch(statusBooking(null));
  }, 4000);
  return true;
 };

  useEffect(() => {
    return () => {
      dispatch(removeErrorForm());
    }
  }, [])
 return (
  <>
  <h2 className="animate__animated animate__zoomInDown">Confirmar</h2>
     <div className="app-div-form">
      <form
      className="app-form animate__animated animate__slideInLeft"
      onSubmit={handleRegister}
      >
      {msgError && <div className="animate__animated animate__slideInLef">{ msgError }</div>}
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="app-input card"
        autoComplete="off"
        value={name}
        onChange={handleInputChange}
      />

        <input
        type="textr"
        placeholder="Apellidos"
        name="lastName"
        className="app-input card"
        value={lastName}
        onChange={handleInputChange}
      />

      <input
        type="text"
        placeholder="Email"
        name="email"
        className="app-input card"
        autoComplete="off"
        value={email}
        onChange={handleInputChange}
      />

  

      <input
        type="text"
        placeholder="Dirección"
        name="address"
        className="app-input card"
        value={address}
        onChange={handleInputChange}
      />
      <div className="app-form-action">
        <button type="button" className="btn btn-primary btn-block" onClick={handleBooking}>
          cancelar
        </button>
        <button type="submit" className="btn btn-success btn-block">
          Confirmar
        </button>
      </div>
      </form>
    </div>
  </>
 );
};
