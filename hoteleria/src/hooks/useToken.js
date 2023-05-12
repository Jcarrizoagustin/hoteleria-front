import { useState,useEffect } from "react"

export const useToken = () => {
  const [token,setToken] = useState('')

  useEffect(() => {
    const tokenVar = window.sessionStorage.getItem('token')
    setToken(tokenVar)

  },[])
  const changeToken = (value) => {
    window.sessionStorage.setItem('token',value)
  }

  return {
    token,
    changeToken
  }
}