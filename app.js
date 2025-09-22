// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo () {
  const texto = document.getElementById('amigo')
  const contenedor = document.getElementById('listaAmigos')
  if (texto.value === '') {
    alert("Por favor escribe un nombre válido")

    return
  }

  const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
  if (!soloLetras.test(texto.value)) {
    alert("Solo se permiten letras y espacios, sin números ni caracteres especiales")
    texto.value = ''
    return
  }

  if (amigos.includes(texto.value)) {
  alert("Ese nombre ya está en la lista")
  texto.value = ''
  return
}
  const li = document.createElement('li')
  li.textContent = texto.value

  contenedor.appendChild(li)
  amigos.push(texto.value)
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

  contenedor.textContent = "El amigo secreto es: " + amigos[ganador];
}

function reiniciarSorteo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
}




