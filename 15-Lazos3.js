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

const presupuestoDisponible = 400;


//while 0 o mas veces
//do while 1 o mas veces
/*while(i < datos.length && datos[i].precio > presupuestoDisponible){
    i++;
}*/

let ciudadSeleccionada = "";
for (let i = 0; i < datos.length && ciudadSeleccionada ==""; i++) {
    if(datos[i].precio <= presupuestoDisponible){
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
    
}

if (ciudadSeleccionada == "")
    console.log(`No tenemos pasajes disponibles`);
else
    console.log(`Puedes comprar pasaje para ` + ciudadSeleccionada)