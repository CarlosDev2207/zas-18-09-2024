function appendToDisplay(value) {

    document.getElementById('display').value += value;
    
    }
    //con ctrl f puedes buscar una funcion (aqui), por otro lado, en la pag al darle inspeccionar puedes ver el nombre de la funcion
    //function para definir una funcion y especificamos su nombre de la funcion
    //aqui las funciones hacen que la calculadora funcione
    //la function clearDisplay por ejemplo cuando se llama deja un vacio
function clearDisplay() {
    
    document.getElementById('display').value = '';
    
}
    //esta funcion, aqui se permite que al borrar discrimine al ultimo elemento y lo borre al darle click en dell
function deleteLast() {

    let displayValue = document.getElementById('display').value;
    
    document.getElementById('display').value = displayValue.slice(0, -1);
    
}
    
function calculateResult() {
    //trae el resultado y lo pone en el display, trayendo otra cosa mas
    try {

    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
    
    } catch (error) {
    
    alert('Expresión inválida'); //control de errores da un mensaje de 'Expresión inválida'
    
    }
    
}