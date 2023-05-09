import { userContext } from './userContext'
import { useState, useEffect } from 'react'

function userContextProvider({ children }) {
	const userInitial = {
		nombre: '',
		apellido: '',
		email: '',
		telefono: '',
		role: '',
	}
	const [userLogued, setUserLogued] = useState(userInitial)
	const [userIsAdmin, setUserIsAdmin] = useState(false)

	useEffect(() => {
		if (userLogued.role === 'admin') {
			setUserIsAdmin(true)
		}
	}, [])

	function changeUser(value) {
		setUserLogued(value)
	}

	return (
		<userContext.Provider
			value={{
				userLogued,
				userIsAdmin,
				changeUser,
			}}
		>
			{children}
		</userContext.Provider>
	)
}

export default userContextProvider
