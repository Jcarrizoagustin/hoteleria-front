import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { useToken } from '../hooks/useToken'

function Header({ user, logout }) {
	const redirect = useNavigate()
	const refMenu = useRef()
	const { changeToken } = useToken()

	const handleClickMenu = () => {
		refMenu.current.classList.toggle('show')
	}

	const handleCloseSession = () => {
		const response = confirm('Seguro que desea cerrar sesion?')
		if (response) {
			changeToken('')
			redirect('/login')
			handleClickMenu()
			logout()
		}
	}

	return (
		<div className='bg-header'>
			<header className='header'>
				<div className='logo'>
					<h2 className='logo-text'>Drak</h2>
				</div>
				<nav ref={refMenu} className='nav'>
					<Link
						to='/'
						onClick={handleClickMenu}
						style={{ textDecoration: 'none' }}
					>
						<li className='nav-link'>Inicio</li>
					</Link>
					<Link
						to='/habitaciones'
						onClick={handleClickMenu}
						style={{ textDecoration: 'none' }}
					>
						<li className='nav-link'>Habitaciones</li>
					</Link>
					{user.role === 'admin' ? (
						<Link
							to='/dashboard'
							onClick={handleClickMenu}
							style={{ textDecoration: 'none' }}
						>
							<li className='nav-link'>Dashboard</li>
						</Link>
					) : (
						<Link
							to='/reservas'
							onClick={handleClickMenu}
							style={{ textDecoration: 'none' }}
						>
							<li className='nav-link'>Reservas</li>
						</Link>
					)}
					{user.email ? (
						<>
							<Link
								to='/mi-cuenta'
								onClick={handleClickMenu}
								style={{ textDecoration: 'none' }}
							>
								<li className='nav-link'>{user.email}</li>
							</Link>

							<li
								className='nav-link'
								onClick={handleCloseSession}
								style={{ textDecoration: 'none' }}
							>
								cerrar sesion
							</li>
						</>
					) : (
						<>
							<Link
								to='/login'
								onClick={handleClickMenu}
								style={{ textDecoration: 'none' }}
							>
								<li className='nav-link'>Iniciar Sesion</li>
							</Link>
							<Link
								to='/registro'
								onClick={handleClickMenu}
								style={{ textDecoration: 'none' }}
							>
								<li className='nav-link'>Registrarme</li>
							</Link>
						</>
					)}
				</nav>
				<div onClick={handleClickMenu} className='menu'>
					<RxHamburgerMenu className='menu-icon' />
				</div>
			</header>
		</div>
	)
}
Header.propTypes = {
	user: PropTypes.object,
	logout: PropTypes.func,
}
export default Header
