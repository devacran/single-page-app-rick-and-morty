//para obtener el hash //el slice es para eliminar un elemento
//el split para quitar los / y el [1] para que agarre la posicion 1
const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;
