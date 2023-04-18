import './Rent.css'
import RoomCard from './RoomCard'

function Rent() {
	const data = {
		id: 1,
		title: 'Suite Pro',
		imgSrc:
			'https://img.freepik.com/foto-gratis/pequeno-interior-habitacion-hotel-cama-doble-bano_1262-12489.jpg',
		price: '18500',
		capacity: 2,
		details: [{ detalle: 'Wifi' }],
		rating: 5,
	}
	return (
		<div className='rent-container'>
			<h2>Alquiler</h2>
			<RoomCard {...data} />
		</div>
	)
}

export default Rent
