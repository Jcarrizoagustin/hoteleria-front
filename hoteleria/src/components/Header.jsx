import { Link } from 'react-router-dom'
import './Header.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import PropTypes from 'prop-types'
import { useRef } from 'react'

function Header({ authenticated, login }) {
	// TODO: mostrar menu
	const refMenu = useRef()

	const handleClickMenu = () => {
		refMenu.current.classList.toggle('show')
	}
	return (
		<header className='header'>
			<div className='logo'>
				<h2 className='logo-text'>Drak</h2>
			</div>
			<nav ref={refMenu} className='nav'>
				<Link to='/inicio' style={{ textDecoration: 'none' }}>
					<li className='nav-link'>Inicio</li>
				</Link>
				<Link to='/inicio' style={{ textDecoration: 'none' }}>
					<li className='nav-link'>Habitaciones</li>
				</Link>
				<Link to='/inicio' style={{ textDecoration: 'none' }}>
					<li className='nav-link'>Reservas</li>
				</Link>
				<Link to='/inicio' style={{ textDecoration: 'none' }}>
					<li className='nav-link'>Contacto</li>
				</Link>
				{authenticated ? (
					<Link to='/inicio' style={{ textDecoration: 'none' }}>
						<li className='nav-link'>Mi cuenta</li>
					</Link>
				) : (
					<>
						<Link to='/inicio' style={{ textDecoration: 'none' }}>
							<li className='nav-link'>Iniciar Sesion</li>
						</Link>
						<Link to='/inicio' style={{ textDecoration: 'none' }}>
							<li className='nav-link'>Registrarme</li>
						</Link>
					</>
				)}
			</nav>
			<div onClick={handleClickMenu} className='menu'>
				<RxHamburgerMenu className='menu-icon' />
			</div>
		</header>
	)
}
Header.propTypes = {
	authenticated: PropTypes.bool,
	login: PropTypes.func,
}
export default Header
