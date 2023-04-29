import './SearchForm.css'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
function SearchForm({ update }) {
	const URL = 'http://localhost:8080/api/v1/habitaciones'
	function getData(values) {
		fetch(
			URL +
				`/?fechaIngreso=${values.fechaEntrada}&fechaSalida=${values.fechaSalida}`
		)
			.then(response => response.json())
			.then(data =>
				update(
					data.filter(e => {
						if (values.precioMax) {
							return (
								e.precio <= Number(values.precioMax) &&
								e.capacidad >= Number(values.personas)
							)
						} else {
							return true
						}
					})
				)
			)
	}
	const formik = useFormik({
		initialValues: {
			fechaEntrada: '',
			fechaSalida: '',
			precioMax: '',
			personas: '',
		},
		onSubmit: values => {
			getData(values)
			console.log(JSON.stringify(values, null, 2))
		},
	})
	return (
		<form onSubmit={formik.handleSubmit} className='search-form-container'>
			<h3 className='fecha-text'>Fechas</h3>
			<div className='fechas'>
				<div className='input-date'>
					<input
						type='date'
						id='entrada'
						name='fechaEntrada'
						value={formik.values.fechaEntrada}
						onChange={formik.handleChange}
						className='entrada'
					/>
				</div>
				<div className='input-date'>
					<input
						type='date'
						id='salida'
						className='salida'
						name='fechaSalida'
						value={formik.values.fechaSalida}
						onChange={formik.handleChange}
					/>
				</div>
			</div>
			<div className='filtros'>
				<div className='input-filter'>
					<label htmlFor='price' className='text'>
						Precio max
					</label>
					<input
						type='text'
						id='price'
						className='input-filter'
						name='precioMax'
						value={formik.values.precioMax}
						onChange={formik.handleChange}
						placeholder='$'
					/>
				</div>
				<div className='input-filter'>
					<label htmlFor='cantidad' className='text'>
						Cantidad personas
					</label>
					<input
						type='number'
						min={0}
						max={5}
						id='cantidad'
						name='personas'
						value={formik.values.personas}
						onChange={formik.handleChange}
						className='input-filter'
					/>
				</div>
			</div>
			<button className='search-button' type='submit'>
				Buscar
			</button>
		</form>
	)
}

SearchForm.propTypes = {
	update: PropTypes.func,
}

export default SearchForm
