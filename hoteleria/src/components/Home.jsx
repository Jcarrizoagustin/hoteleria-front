import './Home.css'
function Home() {
	return (
		<div className='home-container'>
			<div className='home-card'>
				<div className='home-card-img'>
					<img
						src='https://static4.depositphotos.com/1005730/373/i/450/depositphotos_3735885-stock-photo-hotel-lobby.jpg'
						alt=''
					/>
				</div>
				<div className='home-card-description'>
					<h3 className='home-card-description-title'>
						Confort, Confianza, Seguridad.
					</h3>
					<p className='home-card-description-text'>
						Tenemos la responsabilidad de hacer que tu estadia sea la mejor, por
						eso nos enfocamos en todos los detalles.
					</p>
				</div>
			</div>

			<div className='home-card'>
				<div className='home-card-description'>
					<h3 className='home-card-description-title'>
						Encontrá la habitación ideal para vos
					</h3>
					<p className='home-card-description-text'>
						En <span style={{ fontFamily: 'Lobster' }}>Drak</span> nos
						aseguramos de implementar los mejores servicios del mercado para que
						vos y tu familia pasen unas estadias de maravilla
					</p>
				</div>
				<div className='home-card-img'>
					<img
						src='https://img.freepik.com/fotos-premium/minsk-bielorrusia-agosto-2017-columnas-recepcion-salon-habitacion-hotel-lujo-moderno_97694-6573.jpg?w=2000'
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
						Nuestros servicios premium poseen excursiones privadas que no vas a
						poder olvidar.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Home
