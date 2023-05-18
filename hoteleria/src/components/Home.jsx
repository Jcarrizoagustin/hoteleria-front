import './Home.css'
function Home() {
	return (
		<div className='home-container'>
			<div className='home-card'>
				<div className='home-card-img'>
					<img
						src='https://img.freepik.com/fotos-premium/minsk-bielorrusia-agosto-2017-columnas-recepcion-salon-habitacion-hotel-lujo-moderno_97694-6573.jpg?w=2000'
						alt=''
					/>
				</div>
				<div className='home-card-description'>
					<h3 className='home-card-description-title'>
						Confort, Confianza, Seguridad.
					</h3>
					<p className='home-card-description-text'>
						Las mejores habitaciones, un personal disponible las 24hs para lo
						que necesites, y un amplio sistema de seguridad en nuestras
						instalaciones van a hacer sentirte como en casa.
					</p>
				</div>
			</div>

			<div className='home-card'>
				<div className='home-card-description'>
					<h3 className='home-card-description-title'>
						Encontrá la habitación ideal para vos
					</h3>
					<p className='home-card-description-text'>
						En{' '}
						<span style={{ fontFamily: 'Lobster', fontWeight: '400' }}>
							Spark{' '}
							<span style={{ fontSize: '1rem', fontWeight: '200' }}>Hotel</span>
						</span>{' '}
						tenemos una amplia variedad de habitaciones. Encontrá la que más se
						adapte con vos.
					</p>
				</div>
				<div className='home-card-img'>
					<img
						src='https://b7q5h9f5.rocketcdn.me/wp-content/uploads/2021/12/iStock-907621754-e1639556826504-1024x576.jpg'
						alt=''
					/>
				</div>
			</div>

			<div className='home-card'>
				<div className='home-card-img'>
					<img
						src='https://www.ncl.com/sites/default/files/shutterstock_673049683.jpg'
						alt=''
					/>
				</div>
				<div className='home-card-description'>
					<h3 className='home-card-description-title'>Viví la naturaleza</h3>
					<p className='home-card-description-text'>
						Nuestro hotel está en medio de un paisaje único. Ofrecemos a
						nuestros huéspedes un descuento para que puedan disfrutar de todas
						las excursiones.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Home
