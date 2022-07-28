// alert("Bienvenidos a la calculadora de promedios ponderados")
// debugger
// let cantMaterias=parseInt(prompt("Ingrese la cantidad de materias: "))

// let creditosTotales=0;
// let suma=0;
// let promedioPonderado=0;
// for (let i=1; i<=cantMaterias;i++){
//     let nota=[];
//     let creditos=[];
//     let ponderada=[];

//     nota[i]=parseFloat(prompt("Ingrese la nota de la materia "+ i))
//     creditos[i]=parseInt(prompt("Ingrese el número de créditos de la materia "+ i))
//     ponderada[i]=nota[i]*creditos[i]
//     creditosTotales=creditosTotales+creditos[i]
//     suma=suma+ponderada[i]
//     console.log(ponderada[i])
// }   
// promedioPonderado=suma/creditosTotales
// alert("Su promedio ponderado es: "+ promedioPonderado)

alert("Bienvenidos a la calculadora de promedios ponderados")
let cantMaterias=parseInt(prompt("Ingrese la cantidad de materias: "))

let nota=null;
let creditos=null;
let creditosTotales=null;
let suma=null;

function promedio(parametro1, parametro2){
    let ponderada=parametro1*parametro2
    console.log(ponderada)
    suma += ponderada
    creditosTotales += parametro2
}

for (let i=1; i<=cantMaterias;i++){
    nota=parseFloat(prompt("Ingrese la nota de la materia "+ i))
    creditos=parseInt(prompt("Ingrese el número de créditos de la materia "+ i))
    promedio(nota,creditos);
}

let promedioPonderado=suma/creditosTotales
alert("Su promedio ponderado es: "+ promedioPonderado)