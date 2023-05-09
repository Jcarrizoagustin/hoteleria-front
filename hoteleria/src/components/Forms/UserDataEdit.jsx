import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import { useToken } from '../../hooks/useToken'

function UserDataEdit({ user }) {
	const { token } = useToken()

	const updateInfo = async data => {
		try {
			const response = await fetch('http://localhost:8080/api/v1/clientes', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Basic ' + token,
				},
				body: JSON.stringify(data),
			})
			if (!response.ok) {
				const json = await response.json()
				throw new Error(json.message)
			} else {
				const json = await response.json()
				console.log(json)
			}
		} catch (err) {
			console.error(err)
		}
	}

	const formik = useFormik({
		initialValues: {
			nombre: user.nombre,
			apellido: user.apellido,
			email: user.email,
			telefono: user.telefono,
			password: '',
		},
		onSubmit: values => {
			updateInfo(values)
		},
	})
	return (
		<div>
			<form style={{ textAlign: 'center' }} onSubmit={formik.handleSubmit}>
				<h2 className='registro-text'>Mis Datos</h2>
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
						name='password'
						id='password'
						className='data-input'
						onChange={formik.handleChange}
						value={formik.values.password}
					/>
				</div>
				<div className='btn-submit'>
					<button type='submit' className='submit'>
						Actualizar
					</button>
				</div>
			</form>
		</div>
	)
}

UserDataEdit.propTypes = {
	user: PropTypes.object,
}
export default UserDataEdit
