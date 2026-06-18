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
    let numRepeti = Number(inputNumRepeticao.value)

    divFrase.innerHTML = ''

    for(let i = 1; i <= numRepeti; i++){

        divFrase.innerHTML += `${i} - ${frase}<br>`

    }

})


// coleção de dados - array
const presentes = [
    'Bicicleta',
    'celular',
    'Camisa do Mengao',
    'Doleira',
    'Tenis adidas'
]

const divArray = document.querySelector('#div-array')

for(let i = 0; i < presentes.length; i++){
    divArray.innerHTML += `${presentes[i]} <br>`
}


// FOR IN
const divForIn = document.querySelector('#div-forin')

for(let posicao in presentes){
    divForIn.innerHTML += `${presentes[posicao]} <br>`
}


// array de objetos
const pessoas = [
    {nome:'SGT Sequelado', idade:22, renda:18500},
    {nome:'Joemyson Pinto', idade:18, renda:1800},
    {nome:'Gleidson Flor', idade:19, renda:2000},
    {nome:'Jefao Kauan', idade:67, renda:6767},
    {nome:'Jhonatas Mecanico', idade:42, renda:10},
]

//MANIPULANDO ARRAY
//ADICIONAR ELEMENTOS NO ARRAY
pessoas.push({nome:'Magnólia', idade:32, renda: 35000})
pessoas.unshift({nome: 'Joerdison', idade: 36, renda: 100000})

//SLPICE add sem excluir
pessoas.splice(3,0,{nome: 'Extraterrestre', idade: 250, renda: 0.50})

//SPLICE ADD EXCLUINDO MAIS DOIS ELEMENTOS
pessoas.splice(3,2,{nome: 'Extraterrestre', idade: 250, renda: 0.50})

//SPLICE EXCLUI UMA POSICAO E EXCLUI APENAS O ELEMENTO DA POSICAO INDICE

pessoas.splice(1,0)

//EXCLUI DOIS ELEMENTOS A PARTIR DA POSIÇAO DO INDICE
pessoas.splice(2,2)

// FOR OF
const divForOf = document.querySelector('#div-forof')

for(let elemento of pessoas){
    divForOf.innerHTML += `${elemento.nome} <br>`
}


// FOREACH
const divForeach = document.querySelector('#div-foreach')

presentes.forEach((elemento, i)=>{

    divForeach.innerHTML += `${i + 1} - ${elemento} <br>`

})


// Lista objeto literal FOR
const divListaObjFor = document.querySelector('#div-listaobj-for')

for(let i = 0; i < pessoas.length; i++){

    divListaObjFor.innerHTML += `
    ${i + 1} - ${pessoas[i].nome}, 
    ${pessoas[i].idade} anos,
    R$ ${pessoas[i].renda.toFixed(2).replace('.', ',')}
    <br>
    `

}


// Lista objeto literal FOR IN
const divListaObjForIn = document.querySelector('#div-listaobj-forin')

for(let indice in pessoas){

    divListaObjForIn.innerHTML += `
    ${Number(indice) + 1} - 
    ${pessoas[indice].nome},
    ${pessoas[indice].idade} anos,
    R$ ${pessoas[indice].renda.toFixed(2).replace('.', ',')}
    <br>
    `

}


// Lista objeto literal FOR OF
const divListaObjForOf = document.querySelector('#div-listaobj-forof')

let contForOf = 1

for(let elem of pessoas){

    divListaObjForOf.innerHTML += `
    ${contForOf} -
    ${elem.nome},
    ${elem.idade} anos,
    R$ ${elem.renda.toFixed(2).replace('.', ',')}
    <br>
    `

    contForOf++

}


// Lista objeto literal FOREACH
const divListaObjForeach = document.querySelector('#div-listaobj-foreach')

pessoas.forEach((elem, i)=>{

    divListaObjForeach.innerHTML += `
    ${i + 1} -
    ${elem.nome},
    ${elem.idade} anos,
    R$ ${elem.renda.toFixed(2).replace('.', ',')}
    <br>
    `

})