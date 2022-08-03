function tocaSom(idAudio) {
    const elemento = document.querySelector(idAudio)

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play()
    } else {
        alert('Elemento não encontrado ou Seletor inválido')        
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador] //console.log(tecla)
    const barulho = tecla.classList[1] //console.log(barulho)
    const audio = `#som_${barulho}` //console.log(audio)

    tecla.onclick = function () {
        tocaSom(audio)
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}