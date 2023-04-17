import RoomCard from './RoomCard'
import './Home.css'

function Home() {
	const info = {
		title: 'Suite Pro',
		imgSrc:
			'https://img.freepik.com/foto-gratis/pequeno-interior-habitacion-hotel-cama-doble-bano_1262-12489.jpg',
		price: '18500',
		capacity: 2,
		details: [{ detalle: 'Wifi' }],
		rating: 5,
	}
	const info2 = {
		title: 'Suite Plus',
		imgSrc:
			'https://q-xx.bstatic.com/xdata/images/hotel/840x460/188608725.jpg?k=a2da6cbd229671fdf59a11fcaf6352c3b97f2fc1c7099af6665dbeb6f6230579&o=',
		price: '23500',
		capacity: 4,
		details: [{ detalle: 'Wifi' }, { detalle: 'Servicio al cuarto' }],
		priceVariant: 'price-bg-green',
		rating: 4,
	}
	const info3 = {
		title: 'Suite Premium',
		imgSrc:
			'https://legacy-hotel-at-img-academy-bradenton.booked.mx/data/Photos/OriginalPhoto/11563/1156356/1156356747/Legacy-Hotel-At-Img-Academy-Bradenton-Exterior.JPEG',
		price: '35000',
		capacity: 5,
		details: [
			{ detalle: 'Wifi' },
			{ detalle: 'Servicio al cuarto' },
			{ detalle: 'Vista al mar' },
		],
		rating: 3,
	}
	const info4 = {
		title: 'Space Double',
		imgSrc:
			'https://www.stanzahotel.com/wp-content/uploads/2020/07/2020_stanza_hotel_habitacion_sencilla_01.jpg',
		price: '27000',
		capacity: 2,
		details: [{ detalle: 'Wifi' }, { detalle: 'Servicio al cuarto' }],
		rating: 5,
	}
	const info5 = {
		title: 'Atmosphere',
		imgSrc:
			'https://www.estelarcartagenadeindias.com/cache/84/de/84dec6dbaad46333fab841791c1a0469.jpg',
		price: '25999',
		capacity: 2,
		details: [{ detalle: 'Wifi' }, { detalle: 'Vista al mar' }],
		rating: 5,
	}
	const info6 = {
		title: 'Full Clasic',
		imgSrc:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/habitacion-hotel-revolve2-1546271048.jpeg',
		price: '39000',
		capacity: 5,
		details: [{ detalle: 'Wifi' }, { detalle: 'Servicio al cuarto' }],
		rating: 2,
	}
	const info7 = {
		title: 'Legacy',
		imgSrc:
			'https://legacy-hotel-at-img-academy-bradenton.booked.mx/data/Photos/OriginalPhoto/11563/1156356/1156356747/Legacy-Hotel-At-Img-Academy-Bradenton-Exterior.JPEG',
		price: '38000',
		capacity: 5,
		details: [
			{ detalle: 'Wifi' },
			{ detalle: 'Servicio al cuarto' },
			{ detalle: 'Vista al mar' },
		],
		rating: 4,
	}
	const info8 = {
		title: 'Festive',
		imgSrc:
			'https://www.stanzahotel.com/wp-content/uploads/2020/07/2020_stanza_hotel_habitacion_sencilla_01.jpg',
		price: '30000',
		capacity: 4,
		details: [{ detalle: 'Wifi' }, { detalle: 'Servicio al cuarto' }],
		rating: 3,
	}
	const info9 = {
		title: 'Deluxe II',
		imgSrc:
			'https://www.cosemarozono.com/wp-content/uploads/2017/02/eliminar-olores-en-habitaciones-de-hotel-con-ozono.jpg',
		price: '29500',
		capacity: 2,
		details: [{ detalle: 'Wifi' }, { detalle: 'Servicio al cuarto' }],
		rating: 5,
	}
	const info10 = {
		title: 'Modern',
		imgSrc:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/habitacion-hotel-revolve2-1546271048.jpeg',
		price: '32000',
		capacity: 4,
		details: [{ detalle: 'Wifi' }, { detalle: 'Servicio al cuarto' }],
		rating: 3,
	}
	return (
		<div className='home'>
			<RoomCard {...info} />
			<RoomCard {...info2} />
			<RoomCard {...info3} />
			<RoomCard {...info4} />
			<RoomCard {...info5} />
			<RoomCard {...info6} />
			<RoomCard {...info7} />
			<RoomCard {...info8} />
			<RoomCard {...info9} />
			<RoomCard {...info10} />
		</div>
	)
}

export default Home
