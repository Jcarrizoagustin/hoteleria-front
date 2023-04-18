import './RegisterForm.css'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
function LoginForm() {
	const formik = useFormik({
		initialValues: {
			email: '',
			contraseña: '',
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
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
					name='contraseña'
					id='password'
					className='data-input'
					onChange={formik.handleChange}
					value={formik.values.contraseña}
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
		</form>
	)
}

export default LoginForm
