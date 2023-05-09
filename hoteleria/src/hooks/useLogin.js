import {useState,useEffect} from 'react'

export function useLogin(credentials) {
  const initialValues = {
    nombre:'',
    apellido:'',
    email:'',
    telefono:'',
    role:''
  }
  const [user,setUser] = useState(initialValues)
  async function getUser(){
    const response = await fetch('http://localhost:8080/api/v1/login',{
      method:'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if(response.ok){
      const data = await response.json()
      setUser(data)
    }
  }

  useEffect(() => {
    getUser()
  },[credentials])

  return user

}