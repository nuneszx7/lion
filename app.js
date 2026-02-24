'use strict'

const cards = document.querySelectorAll('.card')
const btnSair = document.querySelector('.btn-sair')

const selecionarCurso = (evento) => {
    const curso = evento.currentTarget.classList.contains('ds') ? 'ds' : 'redes'
    localStorage.setItem('curso', curso)
}

const sair = () => {
    window.location.href = './index.html'
}

cards.forEach(card => card.addEventListener('click', selecionarCurso))
btnSair.addEventListener('click', sair)
