import './FormSearchRoom.css'
function FormSearchRoom() {
  return (
    <div className='calendar'>
      <div className='input'>
        <label htmlFor='entrada' className='calendar-text'>
          Fecha Ingreso
        </label>
        <input type='date' id='entrada' className='data-input' />
      </div>
      <div className='input'>
        <label htmlFor='salida' className='calendar-text'>
          Fecha Salida
        </label>
        <input type='date' id='salida' className='data-input' />
      </div>
    </div>
  )
}

export default FormSearchRoom
