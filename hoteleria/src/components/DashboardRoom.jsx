import React from 'react'
import DashboardRoomMenu from './DashboardRoomMenu'
import { Outlet } from 'react-router-dom'

function DashboardRoom() {
	return (
		<div>
			<DashboardRoomMenu />
			<Outlet />
		</div>
	)
}

export default DashboardRoom
