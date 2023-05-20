import React from 'react'
import './DashboardRentItem.css'
import PropTypes from 'prop-types'
import Rent from './Rent'

function DashboardRentItem({ rent, func }) {
	return (
		<div className='dashboard-rent-item'>
			<div className='user'>
				<h3 className='user-title'>Cliente</h3>
				<div className='user-data'>
					<h4>Nombre: {rent.nombreCliente}</h4>
					<h4>Email: {rent.emailCliente}</h4>
					<h4>Telefono: {rent.telefonoCliente}</h4>
				</div>
			</div>
			<Rent obj={rent} updateRent={func} />
		</div>
	)
}
DashboardRentItem.propTypes = {
	rent: PropTypes.object,
	func: PropTypes.func,
}
export default DashboardRentItem
