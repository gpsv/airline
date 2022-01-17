import React from 'react'

export const Flight = ({ flight }) => {
  return (
    <>
    <h2 className='animate__animated animate__zoomInDown'>Vuelo</h2>
    <div>
      <p>Numero de vuelo: { flight }</p>
    </div>
    </>
  )
}
