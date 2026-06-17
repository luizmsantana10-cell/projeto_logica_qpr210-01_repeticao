// estrutura repetição for
const divFor = document.querySelector('#div-for')

for(let i = 0; i < 10; i++){
    console.log(i, 'Amor')
    divFor.innerHTML += `${i} - Amor <br>`
}


// contador acumulador
const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContAcum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0

btnNum.addEventListener('click', ()=>{

    let numDigitado = Number(inputNum.value)

    cont++
    acum += numDigitado

    divContAcum.innerHTML = `
    TOTAL DE NÚMEROS DIGITADOS: ${cont} <br>
    A SOMA DOS NÚMEROS É: ${acum}
    `

    inputNum.value = ''

})


// repetir frase usando for
const inputFrase = document.querySelector('#frase')
const inputNumRepeticao = document.querySelector('#num-repeticao')
const btnFrase = document.querySelector('#btn-frase')
const divFrase = document.querySelector('#div-frase')


btnFrase.addEventListener('click', ()=>{

    let frase = inputFrase.value
    let quantidade = Number(inputNumRepeticao.value)

    divFrase.innerHTML = ''

    for(let i = 1; i <= quantidade; i++){

        divFrase.innerHTML += `${i} - ${frase}<br>`

    }

})