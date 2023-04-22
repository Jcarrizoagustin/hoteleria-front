import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import RegisterForm from './components/Forms/RegisterForm'
import LoginForm from './components/Forms/LoginForm'
import Rent from './components/Rent'
import { useEffect, useState } from 'react'
function App() {
	const [userEmail, setUserEmail] = useState('')

	useEffect(() => {
		const obj = window.sessionStorage.getItem('userLogued')
		if (obj) {
			setUserEmail(JSON.parse(obj).email)
		}
	}, [])

	function changeUserEmail() {
		const obj = JSON.parse(window.sessionStorage.getItem('userLogued'))
		setUserEmail(obj.email)
	}

	function handleLogout() {
		setUserEmail('')
	}

	return (
		<div className='App'>
			<BrowserRouter>
				<Header email={userEmail} logout={handleLogout} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/habitaciones' element={<Home />} />
					<Route path='/registro' element={<RegisterForm />} />
					<Route
						path='/login'
						element={<LoginForm changeUser={changeUserEmail} />}
					/>
					<Route path='/reservas' element={<Rent />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
