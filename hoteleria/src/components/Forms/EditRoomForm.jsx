import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useToken } from '../../hooks/useToken'
import PropTypes from 'prop-types'
import './NewRoomForm.css'

function EditRoomForm({ id }) {
	const initialValues = {
		nombre: '',
		precio: '',
		cantidadCamas: '',
		capacidad: '',
		urlImg: '',
	}
	const { token } = useToken()
	const [room, setRoom] = useState(initialValues)
	const getData = async () => {
		try {
			const response = await fetch(
				`http://localhost:8080/api/v1/habitaciones/${id}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Basic ' + token,
					},
				}
			)
			const data = await response.json()
			if (!response.ok) {
				throw new Error(data.message)
			} else {
				setRoom(data)
			}
		} catch (err) {
			console.error(err)
		}
	}
	useEffect(() => {
		getData()
	}, [])

	const editRoom = async values => {
		try {
			const response = await fetch(
				`http://localhost:8080/api/v1/habitaciones/${id}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Basic ' + token,
					},
					body: JSON.stringify(values),
				}
			)
			const data = await response.json()
			if (!response.ok) {
				throw new Error(data.message)
			} else {
				console.log(data)
			}
		} catch (err) {
			console.error(err)
		}
	}

	const processData = value => {
		const { nombre, urlImg, precio, capacidad, cantidadCamas } = value
		const objeto = {
			nombre,
			urlImg,
			precio: parseFloat(precio),
			capacidad,
			cantidadCamas,
		}
		editRoom(objeto)
	}

	const formik = useFormik({
		initialValues: {
			nombre: room.nombre,
			urlImg: room.urlImg,
			precio: room.precio,
			capacidad: room.capacidad,
			cantidadCamas: room.cantidadCamas,
			wifi: true,
			mar: false,
			servicio: false,
		},
		onSubmit: values => {
			processData(values)
			console.log(JSON.stringify(values, null, 2))
		},
	})

	return (
		<form onSubmit={formik.handleSubmit} className='new-room-container'>
			<h3 className='new-room-title'>Edicion habitación</h3>
			<div className='new-room-content'>
				<div className='input'>
					<label htmlFor='nombre' className='label'>
						Nombre
					</label>
					<input
						type='text'
						id='nombre'
						className='data-input'
						name='nombre'
						value={formik.values.nombre}
						onChange={formik.handleChange}
					/>
				</div>
				<div className='input'>
					<label htmlFor='url' className='label'>
						Url Imagen
					</label>
					<input
						type='text'
						id='url'
						className='data-input'
						name='urlImg'
						value={formik.values.urlImg}
						onChange={formik.handleChange}
					/>
				</div>
				<div className='input'>
					<label htmlFor='precio' className='label'>
						Precio
					</label>
					<input
						type='text'
						id='precio'
						className='data-input'
						name='precio'
						value={formik.values.precio}
						onChange={formik.handleChange}
					/>
				</div>
				<div className='input'>
					<label htmlFor='capacidad' className='label'>
						Capacidad
					</label>
					<input
						type='number'
						id='capacidad'
						className='data-input'
						name='capacidad'
						min='2'
						max='5'
						value={formik.values.capacidad}
						onChange={formik.handleChange}
					/>
				</div>
				<div className='input'>
					<label htmlFor='cantidadCamas' className='label'>
						Cantidad Camas
					</label>
					<input
						type='number'
						id='cantidadCamas'
						className='data-input'
						name='cantidadCamas'
						min='1'
						max='5'
						value={formik.values.cantidadCamas}
						onChange={formik.handleChange}
					/>
				</div>
				<div className='input'>
					<label htmlFor='wifi' className='label'>
						Wifi
					</label>
					<input
						type='checkbox'
						id='wifi'
						className='data-input'
						name='wifi'
						value={formik.values.wifi}
						onChange={formik.handleChange}
					/>
				</div>
				<div className='input'>
					<label htmlFor='servicio' className='label'>
						Servicio al cuarto
					</label>
					<input
						type='checkbox'
						id='servicio'
						className='data-input'
						name='servicio'
						value={formik.values.servicio}
						onChange={formik.handleChange}
					/>
				</div>
				<div className='input'>
					<label htmlFor='mar' className='label'>
						Vista al mar
					</label>
					<input
						type='checkbox'
						id='mar'
						className='data-input'
						name='mar'
						value={formik.values.mar}
						onChange={formik.handleChange}
					/>
				</div>
				<div className='btn-submit'>
					<button type='submit' className='submit'>
						Registrar
					</button>
				</div>
			</div>
		</form>
	)
}
EditRoomForm.propTypes = {
	id: PropTypes.number,
}

export default EditRoomForm
