import PropTypes from 'prop-types'
import './RoomCardButton.css'
function RoomCardButton({ handleClick, text }) {
  return (
    <button
      onClick={handleClick}
      className={
        text === 'Reservar'
          ? 'habitacion-content-button alquilar'
          : 'habitacion-content-button quitar'
      }
    >
      {text}
    </button>
  )
}

RoomCardButton.propTypes = {
  handleClick: PropTypes.func,
  text: PropTypes.string,
}

export default RoomCardButton
