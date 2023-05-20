import React, { useEffect, useState } from 'react'
import { useToken } from '../hooks/useToken'
import './DashboardRent.css'
import DashboardRentItem from './DashboardRentItem'

function DashboardRent() {
	const [reservas, setReservas] = useState([])

	const getReservas = async () => {
		const token = window.sessionStorage.getItem('token')
		try {
			const response = await fetch('http://localhost:8080/api/v1/reservas', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Basic ' + token,
				},
			})
			const data = await response.json()
			if (!response.ok) {
				throw new Error(data.message)
			} else {
				setReservas(data)
			}
		} catch (error) {}
	}

	useEffect(() => {
		getReservas()
	}, [])

	return (
		<div className='dashboard-rent'>
			{reservas.length > 0 ? (
				reservas.map(el => (
					<DashboardRentItem key={el.id} rent={el} func={getReservas} />
				))
			) : (
				<h2>No hay resultados</h2>
			)}
		</div>
	)
}

export default DashboardRent
