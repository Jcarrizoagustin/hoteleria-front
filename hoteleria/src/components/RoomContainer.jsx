import RoomCard from './RoomCard'
import './RoomContainer.css'
import SearchForm from './Forms/SearchForm'
import { useEffect, useState } from 'react'

function RoomContainer() {
	const [habitaciones, setHabitaciones] = useState([])

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
			<SearchForm update={updateHabitaciones} />
			{habitaciones.length > 0 ? (
				habitaciones.map(info => (
					<RoomCard {...info} alquilar={true} key={info.id} />
				))
			) : (
				<h3>No hay resultados</h3>
			)}
		</div>
	)
}

export default RoomContainer
