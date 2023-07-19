const datos = [
    {
    'ciudad': 'Bogota',
    'precio': '500'
    },
    {
    'ciudad': 'Lima',
    'precio': '400'
    },
    {
    'ciudad': 'Santiago',
    'precio': '380'
    },
    {
    'ciudad': 'Montevideo',
    'precio': '200'
    },
];

presupuestoDisponible = 200;

let ciudadSeleccionada = '';

for(let i = 0; i < datos.length && ciudadSeleccionada == ''; i++){
    if(datos[i].precio <= presupuestoDisponible){
        ciudadSeleccionada = datos[i].ciudad;
        break
    }
}

if(ciudadSeleccionada == ''){
    console.log("NO tenemos pasajes disponibles");
}else{
    console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);
}