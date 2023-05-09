import './NuevaReserva.css'
import { AiOutlineClose } from 'react-icons/ai'
import RoomCard from './RoomCard'
import PropTypes from 'prop-types'
const data = {
	id: 1,
	nombre: 'Deluxe',
	urlImg:
		'https://www.cataloniahotels.com/es/blog/wp-content/uploads/2016/05/habitaci%C3%B3n-doble-catalonia-620x412.jpg',
	precio: 15200.0,
	capacidad: 2,
	descripciones: [{ detalle: 'Vista al mar' }, { detalle: 'Wifi' }],
	cantidadCamas: 1,
	alquilar: false,
}
const data2 = {
	id: 2,
	nombre: 'Premium',
	urlImg:
		'https://www.estelarcartagenadeindias.com/cache/84/de/84dec6dbaad46333fab841791c1a0469.jpg',
	precio: 23000.0,
	capacidad: 2,
	descripciones: [
		{ detalle: 'Vista al mar' },
		{ detalle: 'Wifi' },
		{ detalle: 'Servicio al cuarto' },
	],
	cantidadCamas: 1,
	alquilar: false,
}

function NuevaReserva({
	changeShow,
	habitaciones,
	handleClickButton,
	confirm,
}) {
	return (
		<div className={'reserva-container'}>
			<AiOutlineClose onClick={changeShow} className='icon-close' />
			<div className='reserva-fechas'>
				<h2 className='reserva-fecha'>
					Fecha entrada: <span className='fecha'>28/04/2023</span>
				</h2>
				<h2 className='reserva-fecha'>
					Fecha salida: <span className='fecha'>05/05/2023</span>
				</h2>
			</div>
			<div className='reserva-habitaciones'>
				{habitaciones.map(el => (
					<div key={el.id} className='reserva-habitacion'>
						<RoomCard
							{...el}
							handleButtonClick={() => handleClickButton(el.id)}
						/>
					</div>
				))}
			</div>
			<div className='reserva-footer'>
				<h4 className='reserva-footer-total'>
					Total: {data.precio + data2.precio}
				</h4>
				<button onClick={confirm} className='reserva-btn confirmar'>
					Confirmar
				</button>
			</div>
		</div>
	)
}
NuevaReserva.propTypes = {
	changeShow: PropTypes.func,
	habitaciones: PropTypes.array,
	handleClickButton: PropTypes.func,
	confirm: PropTypes.func,
}

export default NuevaReserva
