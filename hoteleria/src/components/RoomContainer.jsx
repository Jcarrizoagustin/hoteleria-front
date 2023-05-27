import RoomCard from './RoomCard'
import './RoomContainer.css'
import SearchForm from './Forms/SearchForm'
import { useEffect, useState } from 'react'
import NuevaReserva from './NuevaReserva'
import { useToken } from '../hooks/useToken'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function RoomContainer({ user }) {
	const [habitaciones, setHabitaciones] = useState([])
	const [showPanel, setShowPanel] = useState(false)
	const [habitacionesReserva, setHabitacionesReserva] = useState([])
	const [fechas, setFechas] = useState({ fechaEntrada: '', fechaSalida: '' })
	const { token } = useToken()
	const redirect = useNavigate()

	const handleConfirm = async () => {
		const habitacionesId = []
		habitacionesReserva.forEach(el => habitacionesId.push(el.id))
		const bodyFetch = {
			idHabitaciones: habitacionesId,
			fechaIngreso: fechas.fechaIngreso,
			fechaSalida: fechas.fechaSalida,
		}
		try {
			const data = await fetch('http://localhost:8080/api/v1/reservas', {
				method: 'POST',
				headers: {
					Authorization: 'Basic ' + token,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(bodyFetch),
			})
			const json = await data.json()
			if (data.ok) {
				setHabitacionesReserva([])
				toast.success('Reserva realizada con éxito')
				console.log(json)
			} else {
				throw new Error(json.message)
			}
		} catch (error) {
			toast.error('Ocurrio un error')
		}
	}
	const asignarFechas = values => {
		setFechas(values)
	}

	const changeReservaPanel = () => {
		setShowPanel(!showPanel)
	}

	const eliminarHabitacion = id => {
		console.log(id)
		const nuevaLista = habitacionesReserva.filter(e => e.id !== id)
		setHabitacionesReserva(nuevaLista)
	}

	const checkRoomInReserva = room => {
		let flag = false
		if (habitacionesReserva.length === 0) {
			return false
		}
		habitacionesReserva.forEach(el => {
			if (room.id === el.id) {
				flag = true
			}
		})
		return flag
	}

	const agregarHabitacion = room => {
		console.log(room)
		if (!checkRoomInReserva(room)) {
			setHabitacionesReserva([...habitacionesReserva, room])
		} else {
			console.log('Habitacion ya esta agregada')
		}
	}

	const getHabitacionesAsync = async () => {
		try {
			const data = await fetch('http://localhost:8080/api/v1/habitaciones')
			if (!data.ok) {
				const errorMsg = await data.json()
				throw new Error(errorMsg)
			} else {
				const dataJson = await data.json()
				setHabitaciones(dataJson)
			}
		} catch (err) {
			console.error(err.message)
		}
	}
	useEffect(() => {
		getHabitacionesAsync()
	}, [])

	function updateHabitaciones(data) {
		setHabitaciones(data)
	}

	return (
		<div className='home'>
			<SearchForm update={updateHabitaciones} fechas={asignarFechas} />
			{habitaciones.length > 0 ? (
				habitaciones.map(info => (
					<RoomCard
						{...info}
						tipo={'reservar'}
						showButton={true}
						key={info.id}
						handleButtonClick={() => {
							if (user.email) {
								agregarHabitacion(info)
								changeReservaPanel()
							} else {
								redirect('/login')
							}
						}}
					/>
				))
			) : (
				<h3>No hay resultados</h3>
			)}
			{showPanel && (
				<NuevaReserva
					show={showPanel}
					changeShow={changeReservaPanel}
					habitaciones={habitacionesReserva}
					handleClickButton={eliminarHabitacion}
					confirm={handleConfirm}
					fechas={fechas}
				/>
			)}
		</div>
	)
}
RoomContainer.propTypes = {
	user: PropTypes.object,
}
export default RoomContainer
