import { useState, useEffect } from 'react'

export const useUser = () => {
  const initialValues = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    role: '',
  }
  const [user, setUser] = useState(initialValues)
  const [isAdmin, setIsAdmin] = useState(false)
  useEffect(() => {
    const storage = window.sessionStorage.getItem('userLogued')
    if (storage) {
      const value = JSON.parse(storage)
      if (value.role === 'admin') {
        setIsAdmin(true)
      }
      setUser(value)
    }
  }, [])

  const actualizarUser = value => {
    window.sessionStorage.setItem('userLogued', JSON.stringify(value))
    if (value.role === 'admin') {
      setIsAdmin(true)
    }
    setUser(value)
  }

  const eliminarUser = () => {
    window.sessionStorage.setItem('userLogued', '')
    setIsAdmin(false)
    setUser(initialValues)
  }

  return {
    user,
    actualizarUser,
    isAdmin,
    eliminarUser,
  }
}
