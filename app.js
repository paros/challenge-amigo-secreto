// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function normalizarNombre(nombre) {
  return nombre
    .normalize("NFD")                     // separa letras de tildes
    .replace(/[\u0300-\u036f]/g, "")      // elimina tildes
    .trim()                               // elimina espacios inicio/fin
    .replace(/\s+/g, " ")                 // convierte múltiples espacios en uno
    .toUpperCase();                       // pasa todo a mayúsculas
}

function agregarAmigo () {
  const texto = document.getElementById('amigo')
  const contenedor = document.getElementById('listaAmigos')

  // Normalizar el texto ingresado
  let nombre = normalizarNombre(texto.value)

  // Validar que no esté vacío después de normalizar
  if (nombre === '') {
    alert("Por favor escribe un nombre válido")
    return
  }

  // Validar solo letras y espacios (ya en mayúsculas y sin tildes)
  const soloLetras = /^[A-ZÑ\s]+$/
  if (!soloLetras.test(nombre)) {
    alert("Solo se permiten letras y espacios, sin números ni caracteres especiales")
    texto.value = ''
    return
  }

  // Evitar duplicados usando el nombre normalizado
  if (amigos.includes(nombre)) {
    alert("Ese nombre ya está en la lista")
    texto.value = ''
    return
  }

  // Agregar amigo a la lista visible (se muestra limpio pero en mayúsculas)
  const li = document.createElement('li')
  li.textContent = nombre
  contenedor.appendChild(li)

  // Guardar el nombre normalizado
  amigos.push(nombre)
  texto.value = ''
}

function sortearAmigo () {
  const numeroDeAmigos = amigos.length
  const contenedor = document.getElementById('resultado')
  if (numeroDeAmigos < 2) {
    alert('Debes colocar al menos dos amigos')
    return
  }

  const ganador = Math.floor(Math.random() * numeroDeAmigos)
  contenedor.textContent = "El amigo secreto es: " + amigos[ganador]
}

function reiniciarSorteo() {
  amigos = []
  document.getElementById("listaAmigos").innerHTML = ""
  document.getElementById("resultado").innerHTML = ""
  document.getElementById("amigo").value = ""
}





