import {useState,useEffect} from 'react'

export function useFetch({url,method,headers,dataBody}) {
  const [data,setData] = useState([])


  const fetchData = async () => {
    try{
      const response = await fetch(url,{
        method,
        headers
      })
      const json = await response.json()
      if(!response.ok){
        throw new Error(json.message)
      }else{
        setData(json)
      }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  return {data}
}