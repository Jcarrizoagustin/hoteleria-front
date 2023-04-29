import PropTypes from 'prop-types'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaBed } from 'react-icons/fa'
import Detail from './Detail'
import './RoomCard.css'
function RoomCard({
	nombre,
	urlImg,
	precio,
	capacidad,
	descripciones,
	cantidadCamas,
	alquilar,
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
						$<span className='price'>{precio}</span>
					</h4>
					<span className='price-description'>por noche</span>
					{alquilar && (
						<button className='habitacion-content-button'>Reservar</button>
					)}
				</div>
			</div>
		</div>
	)
}

RoomCard.propTypes = {
	nombre: PropTypes.string,
	urlImg: PropTypes.string,
	precio: PropTypes.string,
	capacidad: PropTypes.number,
	descripciones: PropTypes.array,
	cantidadCamas: PropTypes.number,
	alquilar: PropTypes.bool,
}

export default RoomCard
