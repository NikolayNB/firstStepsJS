//Operadores de comparacion

const valorPasaje = 1000;

if(valorPasaje === 1000){
    console.log('El pasaje vale 1000');
}

const ciudadDestino = "Bogotá";
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");

//Palabra reservada if
//Evalua una condicion


//Operadores Logicos
// || - &&  - !

let edadPasajero = 19;
let estaAcompanado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);
if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18 || estaAcompanado)) {
        console.log('Pasaje disponible para venta');
    } else {
        console.log('Ciudad no disponible para viajar o pasajero no cumple las condiciones');
}
