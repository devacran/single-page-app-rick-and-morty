import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import getHash from '../util/getHash'
import resolveRoutes from '../util/resolveRoutes'

const routes = {
  '/': Home,
  '/id:': Character,
  '/contact': 'Contact',
}

const router = async () => {
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')
  header.innerHTML = await Header()
  let hash = getHash() //Aqui guardo el hash
  //aqui en route se guarda la ruta resuelta segun el hash que se metio
  console.log(hash)
  let route = await resolveRoutes(hash)
  //bracket notation
  //aqui meto la ruta como indice para que me devuelva su valor del objeto routes
  //'Si la ruta en el objeto existe me la devuelve si no devuelve error 404
  let render = routes[route]? routes[route] : Error404
  console.log(route)
  content.innerHTML = await render()
}

export default router
