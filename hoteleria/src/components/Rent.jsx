import './Rent.css'
import RoomCard from './RoomCard'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

function Rent({ obj, updateRent }) {
  const handleCancelRent = async () => {
    const dato = confirm('Desea cancelar la reserva ?')
    if (dato) {
      try {
        const token = window.sessionStorage.getItem('token')
        const response = await fetch(
          `http://localhost:8080/api/v1/reservas/${obj.id}`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Basic ' + token,
            },
          }
        )
        if (response.ok) {
          updateRent()
          toast.success('Reserva eliminada con éxito', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'light',
          })
        } else {
          const error = await response.json()
          throw new Error(error.message)
        }
      } catch (e) {
        console.error(e.toString())
      }
    }
  }

  return (
    <div className='rent'>
      <div className='rent-room-container'>
        <h5 className='habitaciones-text'>Habitacion/es</h5>
        {obj.habitaciones.map(el => (
          <RoomCard key={el.id} {...el} showButton={false} />
        ))}
      </div>
      <div className='fechas'>
        <h3>Fecha Ingreso</h3>
        <h4>{obj.fechaIngreso}</h4>
      </div>
      <div className='fechas'>
        <h3>Fecha Salida</h3>
        <h4>{obj.fechaSalida}</h4>
      </div>
      <h5 className='total-title'>
        Total:{' '}
        <span className='total-price'>
          {new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
          }).format(obj.precioTotal)}
        </span>
      </h5>
      <button onClick={handleCancelRent} className='btn-cancelar'>
        Cancelar
      </button>
    </div>
  )
}

Rent.propTypes = {
  obj: PropTypes.object,
  updateRent: PropTypes.func,
}

export default Rent
