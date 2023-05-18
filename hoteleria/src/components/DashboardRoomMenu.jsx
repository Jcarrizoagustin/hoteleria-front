import React from 'react'
import { Link } from 'react-router-dom'
import './DashboardRoomMenu.css'

function DashboardRoomMenu() {
	return (
		<nav>
			<ul className='dashboard-room-menu'>
				<Link
					to={'/dashboard/habitaciones/registro'}
					style={{ textDecoration: 'none' }}
				>
					<li className='dashboard-room-menu-link'>Nueva Habitacion</li>
				</Link>
				<Link
					to={'/dashboard/habitaciones/listado'}
					style={{ textDecoration: 'none' }}
				>
					<li className='dashboard-room-menu-link'>Listado</li>
				</Link>
			</ul>
		</nav>
	)
}

export default DashboardRoomMenu
