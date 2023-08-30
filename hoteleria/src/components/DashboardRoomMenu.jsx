import React from 'react'
import './DashboardRoomMenu.css'
import DashboardButton from './Dashboard/DashboardButton'

function DashboardRoomMenu() {
  return (
    <nav>
      <ul className='dashboard-room-menu'>
        <DashboardButton
          to={'/dashboard/habitaciones/registro'}
          title={'Nueva Habitacion'}
        />
        <DashboardButton
          to={'/dashboard/habitaciones/listado'}
          title={'Listado'}
        />
      </ul>
    </nav>
  )
}

export default DashboardRoomMenu
