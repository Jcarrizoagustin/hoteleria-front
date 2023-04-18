import './RegisterForm.css'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

function RegisterForm() {
	const formik = useFormik({
		initialValues: {
			nombre: '',
			apellido: '',
			email: '',
			contraseña: '',
			contraseña2: '',
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
		},
	})
	return (
		<form className='form-container' onSubmit={formik.handleSubmit}>
			<h2 className='registro-text'>Registro</h2>
			<div className='input'>
				<label htmlFor='nombre' className='label'>
					Nombre
				</label>
				<input
					type='text'
					id='nombre'
					className='data-input'
					name='nombre'
					onChange={formik.handleChange}
					value={formik.values.nombre}
				/>
			</div>
			<div className='input'>
				<label htmlFor='apellido' className='label'>
					Apellido
				</label>
				<input
					type='text'
					id='apellido'
					className='data-input'
					name='apellido'
					onChange={formik.handleChange}
					value={formik.values.apellido}
				/>
			</div>
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
			<div className='input'>
				<label htmlFor='c2' className='label'>
					Repetir contraseña
				</label>
				<input
					type='password'
					name='contraseña2'
					id='c2'
					className='data-input'
					onChange={formik.handleChange}
					value={formik.values.contraseña2}
				/>
			</div>
			<div className='btn-submit'>
				<button type='submit' className='submit'>
					Registrarme
				</button>
				<Link to='/login'>
					<h5 className='inicia-sesion'>Ya tienes cuenta ? Inicia sesion</h5>
				</Link>
			</div>
		</form>
	)
}

export default RegisterForm
