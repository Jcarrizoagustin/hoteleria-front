import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import RoomContainer from './components/RoomContainer'
import Footer from './components/Footer'
import RegisterForm from './components/Forms/RegisterForm'
import LoginForm from './components/Forms/LoginForm'
import RentContainer from './components/RentContainer'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import { useUser } from './hooks/useUser'
function App() {
	const { user, isAdmin, actualizarUser, eliminarUser } = useUser()

	return (
		<div className='App'>
			<BrowserRouter>
				<Header user={user} logout={eliminarUser} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/habitaciones' element={<RoomContainer user={user} />} />
					<Route path='/registro' element={<RegisterForm />} />
					<Route
						path='/login'
						element={<LoginForm updateUser={actualizarUser} />}
					/>
					<Route path='/reservas' element={<RentContainer />} />
					<Route
						path='/dashboard'
						element={
							isAdmin ? (
								<Dashboard />
							) : (
								<LoginForm updateUser={actualizarUser} />
							)
						}
					/>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App
