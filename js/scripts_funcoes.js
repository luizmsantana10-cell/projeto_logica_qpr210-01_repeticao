import { calculoPercentual } from "./scripts_calculos.js"

function mensagem(){
    console.log('Uma mensagem')
}

mensagem()

function mensagemLinda(txt){
    console.log(txt)
}

mensagemLinda('Brasil vai da um pau no Haiti')

function somaNumeros(num1, num2){
    return num1 + num2
}

console.log('As soma dos numeros ', somaNumeros(10, 58))

const multiplicacao = function(num1,num2){
    return num1 * num2
}

console.log(multiplicacao(64, 5))

console.log('--------> ARROW FUNCTION <-----------')

const msgArrow = () => {
    console.log('Outra mensagem na arrow function')
}

msgArrow()

const divisaoNum = (valor1, valor2) => {

    let reposta
    if ((valor1 > 0) && (valor2 > 0)){
        return valor1 / valor2
    } else{
        reposta = ('NÃO É POSSIVEL DIVISÃO POR ZERO')
    }

    return reposta
}

console.log(divisaoNum(10,8000))

console.log('O número sorteado ====>',parseInt(Math.random() * 100))


setTimeout(()=>{
    console.log('Executou após5s')
}, 5000)

/*let cont = 0

const intervalo = setInterval(()=>{
    cont++
    console.log(cont, 'Repetição da setInterval')

    if(cont == 5){
        clearInterval()
    }

}, 3000)
*/
/*

const divNumSorteio = document.querySelector('#div-num-sorteio')

let contVolta = 0, numSorteado = 0, contPar = 0, contImpar = 0

const sorteio = setInterval(() => {
    contVolta++

    numSorteado = parseInt(Math.random() * 60)

    console.log(`${contVolta}º número sorteado ${numSorteado}`)

    if (numSorteado % 2 == 0) {
        contPar++
    } else {
        contImpar++
    }

    divNumSorteio.innerHTML += `${contVolta}º número gerado ${numSorteado} - ${numSorteado % 2 == 0 ? 'PAR' : 'ÍMPAR'} <br>`

    if (numSorteado == 6) {
        console.log('-------> SORTEIO ENCERRADO <-------')

        divNumSorteio.innerHTML += `
        -------> SORTEIO ENCERRADO <-------<br>
        <br>
        TOTAL DE NÚMEROS GERADOS: ${contVolta} <br>
        TOTAL DE NÚMEROS PAR: ${contPar} <br>
        TOTAL DE NÚMEROS ÍMPAR: ${contImpar}
        `

        clearInterval(sorteio)

        contVolta = 0
        numSorteado = 0
    }

}, 2000)

*/

//CHAMADO A FUNÇAO DE OUTRO ARQUIVO
console.log('CALCULO DA FUNÇAO calculopercentual DO ARQUIVO scripts_calculos. js ---> ', calculoPercentual(750))