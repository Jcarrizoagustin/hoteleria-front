import './DashboardHeader.css'
import DashboardButton from './Dashboard/DashboardButton'

function DashboardHeader() {
	return (
		<div className='dashboard-header'>
			<h2 className='dashboard-title'>Dashboard</h2>
			<div>
				<ul className='dashboard-menu'>
					<DashboardButton to={'/dashboard/clientes'} title={'Clientes'} />
					<DashboardButton
						to={'/dashboard/habitaciones'}
						title={'Habitaciones'}
					/>
					<DashboardButton to={'/dashboard/reservas'} title={'Reservas'} />
					<DashboardButton to={'/'} title={'Home'} />
				</ul>
			</div>
		</div>
	)
}

export default DashboardHeader
