import PropTypes from 'prop-types'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaBed } from 'react-icons/fa'
import Detail from './Detail'
import './RoomCard.css'
import RoomCardButton from './RoomCardButton'
function RoomCard({
  id,
  nombre,
  urlImg,
  precio,
  capacidad,
  descripciones,
  cantidadCamas,
  tipo,
  handleButtonClick,
  showButton,
}) {
  return (
    <div className='habitacion-container'>
      <div className='habitacion-img'>
        <img src={urlImg} alt='Imagen' />
      </div>
      <div className='habitacion-content'>
        <div className='habitacion-content-header'>
          <h2>{nombre}</h2>
          <h3 className='capacity'>
            {capacidad}
            <BsFillPersonFill className='icon' />
          </h3>
          <h3 className='capacity'>
            {cantidadCamas}
            <FaBed className='icon' />
          </h3>
        </div>
        <div className='habitacion-content-list'>
          <ul>
            {descripciones.map((e, index) => {
              return <Detail element={e} key={index} />
            })}
          </ul>
        </div>
        <div className='habitacion-footer'>
          <h4 className='price-bg-light'>
            <span className='price'>
              {new Intl.NumberFormat('es-AR', {
                style: 'currency',
                currency: 'ARS',
              }).format(precio)}
            </span>
          </h4>
          <span className='price-description'>por noche</span>
          {showButton ? (
            tipo === 'reservar' ? (
              <RoomCardButton
                text={'Reservar'}
                handleClick={handleButtonClick}
              />
            ) : (
              <RoomCardButton text={'Quitar'} handleClick={handleButtonClick} />
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}

RoomCard.propTypes = {
  id: PropTypes.number,
  nombre: PropTypes.string,
  urlImg: PropTypes.string,
  precio: PropTypes.string,
  capacidad: PropTypes.number,
  descripciones: PropTypes.array,
  cantidadCamas: PropTypes.number,
  tipo: PropTypes.string,
  handleButtonClick: PropTypes.func,
  showButton: PropTypes.bool,
}

export default RoomCard
