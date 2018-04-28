'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get('/api/:parametro?/:parametro2?/:parametro3?', function(req,res){
    var parametro1 = "SIN PARAMETRO"
    var operando1 = parseFloat(req.params.parametro)
    var operando2 = parseFloat(req.params.parametro3)
    var operando = req.params.parametro2
    if (req.params.parametro) {
        parametro1 = req.params.parametro
    }
    console.log(operando1, operando2, operando)
   var resultado = "Resultado: "
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
    res.status(200).send({
        resultado
})

// res.status(200).send({
//      arreglo: [{objeto_1: 1, objeto_2: 2}, { objeto_1: 2, objeto_2: 3}],
//      ejemplo: "Esto es un ejemplo de respuesta "+parametro1
//  })
})


app.listen(7070, function(){
    console.log('Esto es un ejemplo especial de una API ' )
})