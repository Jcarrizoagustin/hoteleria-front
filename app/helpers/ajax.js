export function ajax(props){
  let {url,method,headers,body,cbSuccess} = props

  fetch(url,{
    method:method,
    headers:headers
    //body:JSON.stringify(body)
  }).then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err => {
      let message = err.statusText || "Ocurrio un error"

      document.getElementById("root").innerHTML = 
      `<div class="bg-danger">
        <h2>${message}:${err.status}</h2>
      </div>`
    })
}