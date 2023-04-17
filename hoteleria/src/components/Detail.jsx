import PropTypes from 'prop-types'
import { BsWifi, BsCupStraw } from 'react-icons/bs'
import { FaUmbrellaBeach } from 'react-icons/fa'
import './Detail.css'
function Detail({ element }) {
	return (
		<div className='list-item'>
			{element.detalle === 'Wifi' ? (
				<BsWifi className='icon icono' />
			) : element.detalle === 'Vista al mar' ? (
				<FaUmbrellaBeach className='icon icono' />
			) : (
				<BsCupStraw className='icon icono' />
			)}
			<li className='habitacion-content-list-item'>{element.detalle}</li>
		</div>
	)
}

Detail.propTypes = {
	element: PropTypes.object,
}
export default Detail
