import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Rent from './Rent'
import { ToastContainer } from 'react-toastify'

function RentContainer() {
  const redirect = useNavigate()
  const [reservas, setReservas] = useState([])

  const fetchData = async () => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      try {
        const data = await fetch(
          'http://localhost:8080/api/v1/clientes/reservas',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Basic ' + token,
            },
          }
        )
        if (!data.ok) {
          const errorData = await data.json()
          throw new Error(errorData.message)
        } else {
          if (data.status === 200) {
            const finalData = await data.json()
            setReservas(finalData)
          } else {
            setReservas([])
          }
        }
      } catch (error) {
        console.error(error)
      }
    } else {
      redirect('/login')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem' }}>Mis reservas</h2>
      {reservas.length > 0 ? (
        reservas.map(el => <Rent key={el.id} obj={el} updateRent={fetchData} />)
      ) : (
        <h2>No hay resultados</h2>
      )}
      <ToastContainer />
    </div>
  )
}

export default RentContainer
