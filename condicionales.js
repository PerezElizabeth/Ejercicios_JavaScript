//Ejercicio 1
let num1 = 5;
let num2 = 2;

 
if( num1 > num2){
    console.log('num1 es el numero mayor')
}else{
    console.log('no es mayor que num2')
}

//Ejercicio 2
let numero1 = 5;
let numero2 = 6;
if(numero1 === numero2){
    console.log('los numeros son iguales')
}else{
    console.log('los numeros son diferentes')
}

//Ejercicio 3
let numUno = 3;
let numDos = 3;
if( numUno > numDos){
    console.log('numUno es el numero mayor')
}else{
    console.log('ambos numeros son iguales')
}

//Ejercicio 4
let nume1 = 1;
let nume2 = 2;
let nume3 = 3;
if( nume1 < nume2 && nume1 < nume3){
    console.log('nume1 es el menor')
}else{
    console.log('nume1 no es el menor')
}

//Ejercicio 5
let persona1 = {
    nombre:"Elizabeth",
    edad: 35,
    altura: 1.55
}
let persona2 = {
    nombre: "Johanna",
    edad:38,
    altura: 1.62
}

if(persona1.altura > persona2.altura && persona1.edad > persona2.edad){
    console.log('persona1 es mas alta y de mayor edad')

}else{
    console.log('persona2 es mas alta y de mayor edad')
}

//Ejercicio 6
  let nombreIngresad = prompt('Ingrese su nombre')
let edadIngresada = prompt('Ingrese su edad')
let alturaIngresada = prompt('Ingrese su altura')
let visionIngresada = prompt('Ingrese su vision')
if( edadIngresada >= 18 && alturaIngresada >= 1.50 && visionIngresada >= 8){
    console.log('Estas capacitado para conducir')
}else{
    console.log('No estas capacitado para conducir');
} 

//Ejercicio 7
 let nombreIngresado = prompt('Ingrese su nombre')
 if(nombreIngresado ==='Elizabeth'){
    alert('Bienvenido')
}else{
    alert('No puede ingresar')
}  

let paseVipONormal = prompt('¿Posee Pase?')
 if(paseVipONormal === "si"){
    alert('Bienvenido')
 }else{
    alert('No puede ingresar')
 }
 
 let entrada = prompt('¿Posee Entrada?')
 
 if(entrada === 'si'){
    alert('Utilice su entrada')
 }else{
    alert('No puede ingresar, debe tener entrada')
 }
 let utilizarEntrada = prompt('¿Desea Utilizarla?')
 if(utilizarEntrada === "si"){
    alert('Bienvenido')
 }else{
    alert('No puede Ingresar')
 }
 
 let comprarEntrada = prompt('¿Desea comprar entrada?')
 if(comprarEntrada === 'si'){
    alert('Compre su entrada')
 }else{
    alert('No puede ingresar sin entrada')
 }
 let dineroDisponible = prompt('Dinero Disponible')
 if(dineroDisponible >= 1000){
    alert('Compra realizada, Bienvenido')
 }else{
    alert('No puede ingresar, Adios!')
 }

 //Ejercicio 8

 let numeroIncognito = 8
 let numeroIngresado = prompt('Ingrese numero del 1 al 10')
 if(numeroIngresado <8){
    alert('el numero ingresado es menor, vuelve a intentarlo,tienes 2 intentos')
}if(numeroIngresado >8){
    alert('el numero ingresado es mayor, vuelve a intentarlo,tienes 2 intentos')
}else if(numeroIngresado == 8){
    alert('Ganaste, has adivinado el numero')
}

let numeroIngresado2 = prompt('Ingrese numero del 1 al 10')
 if(numeroIngresado2 >8){
    alert('el numero ingresado es mayor, vuelve a intentarlo,tienes 1 intentos')
}if(numeroIngresado2 <8){
    alert('el numero ingresado es menor, vuelve a intentarlo,tienes 1 intentos')
}else if(numeroIngresado2 == 8){
    alert('Ganaste, has adivinado el numero') 
} 
 
let numeroIngresado3 = prompt('Ingrese numero del 1 al 10')  
if(numeroIngresado3 <8){
    alert('Ha Perdido')
}if(numeroIngresado3 >8){
    alert('Ha Perdido')
}else if(numeroIngresado3 == 8){
    alert('Ganaste, has adivinado el numero')
}   

//Ejercicio 9

 let edadInfante = prompt('Ingresa tu edad')
if(edadInfante <=12  ){
    console.log('Eres un infante')
}
 let edadAdolescente = prompt('Ingresa tu edad')
if(edadAdolescente >12 && edadAdolescente <19){
   console.log('Eres un adolescente')

}
 let edadMayorJoven = prompt('Ingresa tu edad')
if(edadMayorJoven > 18 && edadMayorJoven <46 ){
    console.log('Eres un mayor joven')

}
let edadAnciano = prompt('Ingresa tu edad')
if(edadAnciano > 46 && edadAnciano <100){
    console.log('Eres un anciano')
   
}else if(edadAnciano >100){
    console.log('¿tienes esa edad?')

}  

//Ejercicio 10
 let color = prompt('Ingrese color')
switch( color){
    case 'blanco':
        alert('Falta de color')
        break;
    case 'negro' :
        alert('Falta de color')
        break;
    case 'azul' :
        alert('El color del agua')
        break;
    case 'amarillo' :
        alert('El color del sol')
        break;
    case 'rojo' :
        alert('El color del fuego')
        break;
    case 'marron' :
        alert('El color de la tierra')
        break;
    default:
        alert('Excelente eleccion, no lo teniamos pensado')                    

}

//Ejercicio 11
let numero = 4
let numeroDos = 2
let numeroCero = 0
let operacion = prompt('Ingrese una operacion')
switch( operacion){
    case 'sumar' :
        alert('Resultado')
        alert( numero + numeroDos)
        break;
    case 'restar' :
        alert('Resultado')
        alert(numero - numeroDos) 
        break;
    case 'multiplicar' :
        alert('Resultado')
        alert(numero * numeroDos)
        break;
    case 'division' :
        alert('Resultado')
        alert(numero / numeroDos) 
        break;
    default:
        alert('Error')
        alert(numeroCero)
              

}



 

 

 


    










    
