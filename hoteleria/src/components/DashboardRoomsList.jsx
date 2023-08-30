import React, { useEffect, useState } from 'react'
import './DashboardRoomsList.css'
import RoomCard from './RoomCard'
import { useToken } from '../hooks/useToken'
import { GiSightDisabled } from 'react-icons/gi'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import BtnActionRoom from './Dashboard/BtnActionRoom'

function DashboardRoomsList() {
  const [rooms, setRooms] = useState([])
  const { token } = useToken()
  const redirect = useNavigate()

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/habitaciones')
      const data = await response.json()
      if (!response.ok) {
        console.log('Ocurrio un error')
        throw new Error(data.message)
      } else {
        console.log('Todo ok')
        setRooms(data)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleClickEdit = el => {
    const value = confirm(
      'Desea editar la habitacion ' + el.id + ': ' + el.nombre + ' ?'
    )
    if (value) {
      redirect(`/dashboard/habitaciones/edit/${el.id}`)
    }
  }

  const handleClickDelete = async el => {
    const option = confirm(
      'Desea eliminar la habitacion ' +
        el.nombre +
        ' ? Todas las reservas con esta habitacion tambien seran eliminadas.'
    )
    if (option) {
      try {
        const res = await fetch(
          `http://localhost:8080/api/v1/habitaciones/${el.id}`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Basic ' + token,
            },
          }
        )

        if (!res.ok) {
          const resJson = await res.json()
          throw new Error(resJson.message)
        } else {
          console.log('Habitacion eliminada')
          getData()
        }
      } catch (err) {
        console.error(err)
      }
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='dashboard-room-list'>
      {rooms.map(el => (
        <div key={el.id} className='room-list'>
          <RoomCard {...el} />
          <div className='buttons'>
            <BtnActionRoom
              text={'Editar'}
              handleClick={() => handleClickEdit(el)}
            >
              <BiEdit />
            </BtnActionRoom>
            <BtnActionRoom
              text={'Eliminar'}
              handleClick={() => handleClickDelete(el)}
            >
              <AiOutlineDelete />
            </BtnActionRoom>
            <BtnActionRoom
              text={'Ocultar'}
              handleClick={() =>
                alert('Desea desactivar la habitacion ?' + el.id + el.nombre)
              }
            >
              <GiSightDisabled size={'1.5rem'} />
            </BtnActionRoom>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DashboardRoomsList
