'use strict'

//Argumentos que se obtienen desde la terminal
var args = process.argv.slice(2)

//Parseamos los strings a float
var operando1 = parseFloat(args[0])
var operando2 = parseFloat(args[2])
//El signo no se parsea
var operando = args[1]

var resultado = "Resultado: "
if(args.length == 3){
    switch (operando){
        case "+":
            resultado += parseFloat(operando1 + operando2)
            break;
        case "-":
            resultado += parseFloat(operando1 - operando2)
            break;
        case "*":
            resultado += parseFloat(operando1 * operando2)
            break;
        case "/":
            resultado += parseFloat(operando1 / operando2)
            break;
    }
}

console.log(resultado)