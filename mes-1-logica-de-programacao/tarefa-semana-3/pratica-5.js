

function listaDeSéries (lista,série) {
  for(let i = 0; i < lista.length; i++) 
  if (lista[i] === série) {
    return i
  }
    return undefined

} 
   let lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
   console.log(listaDeSéries(lista,"Friends"))