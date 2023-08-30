import React, { useEffect, useState } from 'react'
import { useToken } from '../hooks/useToken'
import './DashboardClients.css'

function DashboardClients() {
  const { token } = useToken()
  const [clients, setClients] = useState([])

  const getData = async () => {
    const tokenAsync = sessionStorage.getItem('token')
    try {
      const response = await fetch('http://localhost:8080/api/v1/clientes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + tokenAsync,
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message)
      } else {
        setClients(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const deleteUser = async id => {
    const tokenAsync = sessionStorage.getItem('token')
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/clientes/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Basic ' + tokenAsync,
          },
        }
      )
      const json = await response.json()
      if (!response.ok) {
        throw new Error(json.message)
      } else {
        alert('Usuario eliminado con exito')
      }
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    console.warn(token)
    getData()
  }, [])

  return (
    <div className='dashboard-client-container'>
      {clients.length > 0 ? (
        clients.map(el => {
          return (
            <div className='dashboard-client-card' key={el.id}>
              <div className='dashboard-client-card-data'>
                <h4>Nombre: {el.nombre}</h4>
                <h4>Email: {el.email}</h4>
                <h4>Telefono: {el.telefono}</h4>
              </div>
              <button
                className='client-delete-btn'
                onClick={() => {
                  const option = confirm(
                    'Seguro que desea eliminar al cliente ' + el.nombre + ' ?'
                  )
                  if (option) {
                    deleteUser(el.id)
                  }
                }}
              >
                Eliminar
              </button>
            </div>
          )
        })
      ) : (
        <h3>No hay resultados</h3>
      )}
    </div>
  )
}

export default DashboardClients
