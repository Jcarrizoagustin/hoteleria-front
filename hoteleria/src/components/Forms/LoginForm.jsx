import './RegisterForm.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import { useToken } from '../../hooks/useToken'
import { toast, ToastContainer } from 'react-toastify'
function LoginForm({ updateUser }) {
	const redirect = useNavigate()
	const { changeToken } = useToken()

	function sucess(obj, data) {
		// Obj representa el ususario logueado en la respuesta del backend

		updateUser(obj)
		const ep = data.email + ':' + data.password
		changeToken(btoa(ep))
		redirect('/')
	}

	async function handleLogin(data) {
		try {
			const fetchData = await fetch('http://localhost:8080/api/v1/login', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const finalData = await fetchData.json()
			if (fetchData.ok) {
				sucess(finalData, data)
				toast.success('🦄 Inicio de sesion !', {
					position: 'top-right',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'light',
					containerId: 'HOME',
				})
			} else {
				throw new Error(finalData.message)
			}
		} catch (error) {
			toast.error('Ocurrió un error!', {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
				progress: undefined,
				theme: 'light',
				containerId: 'LOGIN',
			})
		}
	}

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: values => {
			handleLogin(values)
		},
	})
	return (
		<form className='form-container' onSubmit={formik.handleSubmit}>
			<h2 className='registro-text'>Login</h2>
			<div className='input'>
				<label htmlFor='email' className='label'>
					Email
				</label>
				<input
					type='text'
					id='email'
					className='data-input'
					name='email'
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
			</div>
			<div className='input'>
				<label htmlFor='password' className='label'>
					Contraseña
				</label>
				<input
					type='password'
					name='password'
					id='password'
					className='data-input'
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
			</div>
			<div className='btn-submit'>
				<button type='submit' className='submit'>
					Iniciar sesion
				</button>
				<Link to='/registro'>
					<h5 className='inicia-sesion'>No tienes cuenta ? Registrate</h5>
				</Link>
			</div>
			<ToastContainer
				enableMultiContainer={true}
				containerId={'LOGIN'}
				position={toast.POSITION.TOP_RIGHT}
			/>
		</form>
	)
}
LoginForm.propTypes = {
	updateUser: PropTypes.func,
}
export default LoginForm
