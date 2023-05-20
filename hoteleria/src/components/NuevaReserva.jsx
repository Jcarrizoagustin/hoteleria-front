import './NuevaReserva.css'
import { AiOutlineClose } from 'react-icons/ai'
import RoomCard from './RoomCard'
import PropTypes from 'prop-types'
function NuevaReserva({
	changeShow,
	habitaciones,
	handleClickButton,
	confirm,
	fechas,
}) {
	const calcularTotal = () => {
		const divisor = 1000 * 60 * 60 * 24
		const date1 = new Date(fechas.fechaIngreso)
		const date2 = new Date(fechas.fechaSalida)
		const days = (date2.getTime() - date1.getTime()) / divisor
		let total = 0.0
		if (habitaciones.length === 0) {
			return new Intl.NumberFormat('es-AR', {
				style: 'currency',
				currency: 'ARS',
			}).format(0)
		}
		if (habitaciones.length === 1) {
			return new Intl.NumberFormat('es-AR', {
				style: 'currency',
				currency: 'ARS',
			}).format(habitaciones[0].precio * days)
		}
		habitaciones.forEach(el => {
			total += parseFloat(el.precio)
		})
		return new Intl.NumberFormat('es-AR', {
			style: 'currency',
			currency: 'ARS',
		}).format(total * days)
	}

	return (
		<div className={'reserva-container'}>
			<AiOutlineClose onClick={changeShow} className='icon-close' />
			<div className='reserva-fechas'>
				<h2 className='reserva-fecha'>
					Fecha entrada: <span className='fecha'>{fechas.fechaIngreso}</span>
				</h2>
				<h2 className='reserva-fecha'>
					Fecha salida: <span className='fecha'>{fechas.fechaSalida}</span>
				</h2>
			</div>
			<div className='reserva-habitaciones'>
				{habitaciones.map(el => (
					<div key={el.id} className='reserva-habitacion'>
						<RoomCard
							{...el}
							handleButtonClick={() => handleClickButton(el.id)}
							showButton={true}
						/>
					</div>
				))}
			</div>
			<div className='reserva-footer'>
				<h4 className='reserva-footer-total'>Total: {calcularTotal()}</h4>
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
	fechas: PropTypes.object,
}

export default NuevaReserva
