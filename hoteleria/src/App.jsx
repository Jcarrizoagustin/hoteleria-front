import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import RoomContainer from './components/RoomContainer'
import Footer from './components/Footer'
import RegisterForm from './components/Forms/RegisterForm'
import LoginForm from './components/Forms/LoginForm'
import { useEffect, useState } from 'react'
import RentContainer from './components/RentContainer'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
function App() {
	const initialValues = {
		nombre: '',
		apellido: '',
		email: '',
		telefono: '',
		role: '',
	}
	const [userLogued, setUserLogued] = useState(initialValues)

	useEffect(() => {
		const obj = window.sessionStorage.getItem('userLogued')
		if (obj) {
			setUserLogued(JSON.parse(obj))
		}
	}, [])

	function changeUserEmail() {
		const obj = JSON.parse(window.sessionStorage.getItem('userLogued'))
		setUserLogued(obj)
	}

	function handleLogout() {
		setUserLogued(initialValues)
	}

	return (
		<div className='App'>
			<BrowserRouter>
				<Header user={userLogued} logout={handleLogout} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/habitaciones' element={<RoomContainer />} />
					<Route path='/registro' element={<RegisterForm />} />
					<Route
						path='/login'
						element={<LoginForm changeUser={changeUserEmail} />}
					/>
					<Route path='/reservas' element={<RentContainer />} />
					<Route
						path='/dashboard'
						element={
							userLogued.role === 'admin' ? (
								<Dashboard />
							) : (
								<LoginForm changeUser={changeUserEmail} />
							)
						}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
