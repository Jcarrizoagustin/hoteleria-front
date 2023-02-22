import api from "./helpers/back_api.js"
import { ajax } from "./helpers/ajax.js"
import { Header } from "./components/Header.js"

export function App(){
  
  const root = document.getElementById("root")
  root.appendChild(Header({}))
  
}