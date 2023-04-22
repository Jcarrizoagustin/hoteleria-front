export default class ClientePost{
  constructor(nombre,apellido, email,telefono,password){
    this.nombre = nombre
    this.apellido = apellido
    this.email = email
    this.telefono = telefono
    this.password = password
    this.roles = [2]
  }
}