import React from 'react'

export const ModalList = () => {
 
  return (
    <div className="modal display-block">
       <section className="modal-main">
        <input 
          type="text"
          placeholder="Email"
          name="email"
          className="app-input"
          autoComplete="off"
        />
        <button type="button" >
          Close
        </button>
      </section>
    </div>
  )
}
