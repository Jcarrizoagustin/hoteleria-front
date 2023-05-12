import './Dashboard.css'
import DashboardHeader from './DashboardHeader'
import NewRoomForm from './Forms/NewRoomForm'
import { Outlet } from 'react-router-dom'
function Dashboard() {
	return (
		<div className='dashboard-container'>
			<DashboardHeader />
			<div className='dashboard-content'>
				<Outlet />
			</div>
		</div>
	)
}

export default Dashboard
