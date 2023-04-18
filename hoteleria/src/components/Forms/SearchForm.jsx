import './SearchForm.css'
import { useFormik } from 'formik'
function SearchForm() {
	const formik = useFormik({
		initialValues: {
			fechaEntrada: '',
			fechaSalida: '',
			precioMax: '',
			personas: '',
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
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
						className='input entrada'
					/>
				</div>
				<div className='input-date'>
					<input
						type='date'
						id='salida'
						className='input salida'
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

export default SearchForm
