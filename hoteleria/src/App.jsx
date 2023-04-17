import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(true)
	function login() {
		setIsAuthenticated(true)
	}
	return (
		<div className='App'>
			<BrowserRouter>
				<Header login={login} authenticated={isAuthenticated} />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
