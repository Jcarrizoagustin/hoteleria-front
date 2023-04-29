import './Rent.css'
import RoomCard from './RoomCard'
import PropTypes from 'prop-types'

function Rent({ obj }) {
	const handleCancelRent = async () => {
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
			if (!response.ok) {
				const error = await response.json()
				throw new Error(error.message)
			}
		} catch (e) {
			console.error(e.toString())
		}
	}

	return (
		<div className='rent'>
			<div>
				<h5>Habitaciones</h5>
				{obj.habitaciones.map(el => (
					<RoomCard key={el.id} {...el} />
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
			<h5>Total: {obj.precioTotal}</h5>
			<button onClick={handleCancelRent} className='btn-cancelar'>
				Cancelar
			</button>
		</div>
	)
}

Rent.propTypes = {
	obj: PropTypes.object,
}

export default Rent
