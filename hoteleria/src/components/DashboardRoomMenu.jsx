import React from 'react'
import { Link } from 'react-router-dom'

function DashboardRoomMenu() {
	return (
		<div>
			<div>
				<ul className='dashboard-menu'>
					<Link to={'/dashboard/habitaciones/registro'}>
						<li>Nueva Habitacion</li>
					</Link>
					<Link to={'/dashboard/habitaciones/listado'}>
						<li>Listado</li>
					</Link>
				</ul>
			</div>
		</div>
	)
}

export default DashboardRoomMenu
