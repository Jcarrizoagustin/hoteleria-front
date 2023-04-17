import PropTypes from 'prop-types'
import { BsFillPersonFill } from 'react-icons/bs'
import Detail from './Detail'
import { AiFillStar } from 'react-icons/ai'
import './RoomCard.css'
function RoomCard({ title, imgSrc, price, capacity, details, rating }) {
	function getRatingStars() {
		switch (rating) {
			case 1:
				return <AiFillStar />
			case 2:
				return (
					<>
						<AiFillStar />
						<AiFillStar />
					</>
				)
			case 3:
				return (
					<>
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</>
				)
			case 4:
				return (
					<>
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</>
				)
			case 5:
				return (
					<>
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</>
				)
		}
	}
	return (
		<div className='habitacion-container'>
			<div className='habitacion-img'>
				<img src={imgSrc} alt='Imagen' />
			</div>
			<div className='habitacion-content'>
				<div className='habitacion-content-header'>
					<h2>{title}</h2>
					<h3 className='capacity'>
						{capacity}
						<BsFillPersonFill className='icon' />
					</h3>
					<div className='stars'>{getRatingStars()}</div>
				</div>
				<div className='habitacion-content-list'>
					<ul>
						{details.map((e, index) => {
							return <Detail element={e} key={index} />
						})}
					</ul>
				</div>
				<div className='habitacion-footer'>
					<h4 className='price-bg-light'>
						$<span className='price'>{price}</span>
					</h4>
					<span className='price-description'>por noche</span>
					<button className='habitacion-content-button'>Alquilar</button>
				</div>
			</div>
		</div>
	)
}

RoomCard.propTypes = {
	title: PropTypes.string,
	imgSrc: PropTypes.string,
	price: PropTypes.string,
	capacity: PropTypes.number,
	details: PropTypes.array,
	rating: PropTypes.number,
}

export default RoomCard
