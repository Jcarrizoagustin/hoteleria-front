import './RegisterForm.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import ClientePost from '../../model/ClientePost'
import { toast, ToastContainer } from 'react-toastify'

function RegisterForm() {
	const redirect = useNavigate()
	const URL = 'http://localhost:8080/api/v1/clientes'
	const postFetchAsync = async info => {
		const response = await fetch(URL, {
			method: 'POST',
			body: JSON.stringify(info),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		if (!response.ok) {
			const error = await response.json()
			throw new Error(error.message)
		}
		const jsonData = await response.json()
		toast.success('Usuario creado con éxito. Bienvenido/a')
		console.log(jsonData)
		redirect('/login')
	}

	function enviarDatos(values) {
		if (values.contraseña !== values.contraseña2) {
			alert('Las contraseñas no coinciden')
			return
		}
		const cliente = new ClientePost(
			values.nombre,
			values.apellido,
			values.email,
			values.telefono,
			values.contraseña
		)
		postFetchAsync(cliente)
		console.log(JSON.stringify(cliente, null, 2))
	}
	const formik = useFormik({
		initialValues: {
			nombre: '',
			apellido: '',
			email: '',
			telefono: '',
			contraseña: '',
			contraseña2: '',
		},
		onSubmit: values => {
			enviarDatos(values)
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
				<label htmlFor='telefono' className='label'>
					Teléfono
				</label>
				<input
					type='text'
					id='telefono'
					className='data-input'
					name='telefono'
					onChange={formik.handleChange}
					value={formik.values.telefono}
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
			<ToastContainer />
		</form>
	)
}

export default RegisterForm
