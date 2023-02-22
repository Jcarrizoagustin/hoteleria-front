export function Header(props){
  let {username,password,authenticated}=props
  const template = document.querySelector("#header").content
  const fragment = document.createDocumentFragment()
  
  const clone = template.cloneNode(true)
  fragment.appendChild(clone)

  return fragment
}