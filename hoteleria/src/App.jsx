import './App.css'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Header from './components/Header'
import RoomContainer from './components/RoomContainer'
import Footer from './components/Footer'
import RegisterForm from './components/Forms/RegisterForm'
import LoginForm from './components/Forms/LoginForm'
import RentContainer from './components/RentContainer'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import { useUser } from './hooks/useUser'
import UserDataEdit from './components/Forms/UserDataEdit'
import DashboardClients from './components/DashboardClients'
import NewRoomForm from './components/Forms/NewRoomForm'
import DashboardRoom from './components/DashboardRoom'
import DashboardRoomsList from './components/DashboardRoomsList'
import EditRoomForm from './components/Forms/EditRoomForm'
function App() {
	const { user, isAdmin, actualizarUser, eliminarUser } = useUser()
	const { id } = useParams()

	return (
		<div className='App'>
			<BrowserRouter>
				<Header user={user} logout={eliminarUser} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/habitaciones' element={<RoomContainer user={user} />} />
					<Route path='/registro' element={<RegisterForm />} />
					<Route path='/mi-cuenta' element={<UserDataEdit user={user} />} />
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
					>
						<Route path='clientes' element={<DashboardClients />} />

						<Route path='habitaciones' element={<DashboardRoom />}>
							<Route path='registro' element={<NewRoomForm />} />
							<Route path='listado' element={<DashboardRoomsList />}>
								<Route path='edit/:id' element={<EditRoomForm id={id} />} />
							</Route>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App
