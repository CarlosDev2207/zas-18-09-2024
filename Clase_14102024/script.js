
//funciones                         01
/*
function hello(){
    console.log('hola');
    console.log('hola zas');
    console.log('hola xd');
}

hello();
*/
//retorno de una funcion            02

/*
function hello(){

    return "hola Js";
}

const result = hello();
console.log(result);
hello();
*/
//retorna objeto vacio              03
/*
function hello(){
    return {};
}

//const result = hello();
console.log(hello());
//hello();
*/
//                                  04

/*
function hello(){
    return {
        nombre: 'Raúl'
    }
}
console.log(hello())
*/
//funcion que retorna otra funcion  05
/*
function hello(){
    return function (){
        return 'hola js'
    }
}
console.log(hello()())
*/

// USO DE PARAMETROS EN FUNCIONES  06
/*
function hellpconjs(name){
    return "hello" + name
}
console.log("Carlos")
*/

//pasar mas de un parametro a la funcion 07
/*
function hellpconjs(x, y){
    return x + y
}
console.log(hellpconjs(10, 20));
console.log(hellpconjs(10));
*/

//control de errores en parametros  08
/*
function hellpconjs(x, y = 0){
    return x + y
}
console.log(hellpconjs(10));
*/

// OBJETOS

const user = {
    x : "Carlos",
    apellidoM : "Mendoza",
    edad: 17,
    edoCivil: "Indomable",
    domicilio : {
        ciudad: "CDMX",
        calle : "ZAS",
        numero: 123456
    },
    amigos: ["Agustin", "Iturbide"],
    activo: false,
    sendMensaje: function(){
        return "enviando mensaje"
    }
}
//alert ciudad calle numero...
//consola, los amigos
//alert (Activo o dado de baja)
//consola nombre, apellidos, estado civil...!!
//aler (Estado del mensaje)

alert (user.domicilio.ciudad + "" + user.domicilio.calle + "" + user.domicilio.numero);
console.log(user.amigos);
alert (user.activo);
console.log(user.x + " " + user.apellidoM + " " + user.edoCivil);
alert(user.sendMensaje());