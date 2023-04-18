import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import RegisterForm from './components/Forms/RegisterForm'
import LoginForm from './components/Forms/LoginForm'
import Rent from './components/Rent'
function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	function login() {
		setIsAuthenticated(true)
	}
	return (
		<div className='App'>
			<BrowserRouter>
				<Header login={login} authenticated={isAuthenticated} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/habitaciones' element={<Home />} />
					<Route path='/registro' element={<RegisterForm />} />
					<Route path='/login' element={<LoginForm />} />
					<Route path='/reservas' element={<Rent />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
