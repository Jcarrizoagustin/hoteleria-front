import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EditRoomForm from './Forms/EditRoomForm'

function EditRoom() {
	const { id } = useParams()
	const initialValuess = {
		nombre: '',
		precio: '',
		cantidadCamas: '',
		capacidad: '',
		urlImg: '',
	}
	const [room, setRoom] = useState(initialValuess)
	const getData = async () => {
		try {
			const response = await fetch(
				`http://localhost:8080/api/v1/habitaciones/${parseInt(id)}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			const data = await response.json()
			if (!response.ok) {
				throw new Error(data.message)
			} else {
				console.log(data)
				setRoom(data)
			}
		} catch (err) {
			console.error(err)
		}
	}
	useEffect(() => {
		getData()
	}, [])

	return <div>{room.nombre && <EditRoomForm room={room} />}</div>
}

export default EditRoom
