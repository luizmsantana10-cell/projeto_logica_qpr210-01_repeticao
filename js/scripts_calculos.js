/*
valor for ate 100 calculo seja 10%;
valor for de 101 ate 1000 seja 15%;
acima de 1000 o calculo seja 20%
*/

const calculoPercentual = (valor) => {
    let valorCalculado = 0.0

    if (valor <= 100){
        valorCalculado = valor * 0.10
    } else if (valor <= 1000){
        valorCalculado = valor * 0.15
    } else {
        valorCalculado = valor * 0.20
    }

    return valorCalculado
}

export{calculoPercentual}