const datos = [
    {
        "ciudad" : "Bogotá",
        "precio" : 500
    },
    {
        "ciudad" : "Lima",
        "precio" : 400
    },
    {
        "ciudad" : "Santiago",
        "precio" : 300
    },
    {
        "ciudad" : "Montevideo",
        "precio" : 200
    }
]

const presupuestoDisponible = 700;

let i = 0
//while 0 o mas veces
//do while 1 o mas veces
/*while(i < datos.length && datos[i].precio > presupuestoDisponible){
    i++;
}*/

let ciudadSeleccionada = "";

do{
    if(datos[i].precio < presupuestoDisponible){
        ciudadSeleccionada = datos[i].ciudad;
    }
    i++;
} while (i < datos.length && ciudadSeleccionada == "")

if (ciudadSeleccionada == "")
    console.log(`No tenemos pasajes disponibles`);
else
    console.log(`Puedes comprar pasaje para ` + ciudadSeleccionada)