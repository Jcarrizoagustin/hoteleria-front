import './DashboardHeader.css'
import { Link } from 'react-router-dom'

function DashboardHeader() {
	return (
		<div className='dashboard-header'>
			<h2 className='dashboard-title'>Dashboard</h2>
			<div>
				<ul className='dashboard-menu'>
					<Link to={'/dashboard/clientes'}>
						<li>Clientes</li>
					</Link>
					<Link to={'/dashboard/habitaciones'}>
						<li>Habitaciones</li>
					</Link>
					<Link>
						<li>Reservas</li>
					</Link>
				</ul>
			</div>
		</div>
	)
}

export default DashboardHeader
