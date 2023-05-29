let miNombre = "Elizabeth";
let miApellido = "Perez";
let miEdad = 35;
let miMascota = "perro"
let edadMascota = 7;
let nombreCompleto = (miNombre) + " " + (miApellido);
let textoPresentacion = (`Soy ${nombreCompleto} tengo ${miEdad} años y un ${miMascota} al que amo locamente, tiene ${edadMascota} años.`)
let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad * edadMascota;
let divisionEdades = miEdad / edadMascota;
//Objeto
let alumno = {
    nombre: "Juan",
    apellido: "Garcia",
    edad: 26,
    estudiante: true,
    curso: "Html",
}
console.table(alumno);
console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.edad);
console.log(alumno.estudiante);
console.log(alumno.curso);
let mascota = {
    nombre : "Milo",
    apellido: "Perez",
    edad: 7,
    raza: "Pinsher",
    colorDePelo: "Marron"
}
console.table(mascota);
console.log(mascota.nombre);
console.log(mascota.apellido);
console.log(mascota.edad);
console.log(mascota.raza);
console.log(mascota.colorDePelo);

//Array
let frutas = ["Naranja","Pera","Mandarina","Fresas","Ciruela"];
console.log(frutas);

let numeros = [2,4,6,8,10];

let familia = [
    { 
    padre:"Oscar", hijos:5, mascotas:1, tios: true,madre:"Rosa"}
]
console.log(familia);
console.log(familia[0].padre);
console.log(familia[0].hijos);
console.log(familia[0].mascotas);
console.log(familia[0].tios);
console.log(familia[0].madre);

let textoAleatorio =  (`Mi fruta favorita es ${frutas[1]} tengo ${numeros[3]} en la nevera que se las regalare a ${(familia[0].madre)}`);
console.log(textoAleatorio);


