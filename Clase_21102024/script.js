//Funcion Flecha
////1
function mifuncion(a, b){
    return a + b;

}

//2
console.log (mifuncion (2, 3));

//estructura de función flecha
let salu2 = () => {};
/***************************** */
//3
let saludo = (nombre) => {
    return "Saludos " + nombre;
}

console.log(saludo ("EL ZAS"));

//************************* */
//4
let saludar = nombre => "Saludos " + nombre;
console.log (saludar ("Esteban"));

/***************** */
//5 pasar parametros

let suma =(a, b) => a + b;
console.log(suma (5, 8));

//6 *** crear objeto en funcion flecha

let obj = () => ({nombre: "Ramires", edad: 20})

//llamamos al objeto y accedemos a la propiedad

//let persona = obj().nombre;
console.log(obj().nombre);

//07  ***** arreglos ******
let arrFunc = () => [1,2,3,4,5];

//todo el array
console.log(arrFunc());

//aceder al arreglo
console.log(arrFunc()[4]);



