const resolveRoutes = (route) => {
  if(route.length <= 3){ //si esta dentro de 1000 porque nadamas hay hasta 1000 elementos
    //if ternario se lee 'route es igual a /? si si, retorna route si no retorna /id'
    let validRoute = route === '/' ? route : '/id:'
    return validRoute
  }
  return `/${route}` //si no es ninguna de nuestro if anterior devuelve la ruta
}

export default resolveRoutes
