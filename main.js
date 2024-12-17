alert("Bienvenido al comercio Baratin");
alert("¡Compra tus productos aquí!");

//Carrito
const carritoCompra = [];

//Menu de compras:

let opcion;
let controlMenu = true;

while (controlMenu) {
    opcion = parseInt(prompt("Seleccione una seccion:\n1. Remeras.\n2. Pantalones.\n3. Abrigos\n4. Salir."));
    switch (parseInt(opcion)) {
        case 1:
            stockRemeras(carritoCompra);
            break;
        case 2:
            stockPantalones(carritoCompra);
            break;
        case 3:
            stockAbrigos(carritoCompra);
            break;    
        case 4:
            controlMenu = false;
            alert("Redirigiendo a pagar..");
            break;    
        default:
            alert("Ingrese una opcion valida!");
            break;
    }  

}



//Funciones stock:

function stockRemeras(carrito) {
    const remeras = [
        {nombre:"Remera regular", precio: 12000},
        {nombre:"Remera musculosa", precio: 10000},
        {nombre:"Remera manga larga", precio: 18000},
        {nombre:"Chomba", precio: 17000},
        {nombre:"Camisa formal", precio: 28000},
    ]
    //Variables
    let seguirComprando = true;
    let opcionMenu;
    let bandera;
    
    //Sin utilidad por el momento, no me sirvio en el prompt para que se vea todo junto.
    // for (let i = 0; i < remeras.length; i++) {
    //     alert((i+1) +". "+ remeras[i].nombre +": $"+ remeras[i].precio);
    // } 

    while (seguirComprando) {
        opcionMenu = parseInt(prompt("Remeras disponibles: (Seleccione la opcion que desee)"+
            "\n1. "+ remeras[0].nombre +": $"+ remeras[0].precio +
            "\n2. "+ remeras[1].nombre +": $"+ remeras[1].precio +
            "\n3. "+ remeras[2].nombre +": $"+ remeras[2].precio +
            "\n4. "+ remeras[3].nombre +": $"+ remeras[3].precio +
            "\n5. "+ remeras[4].nombre +": $"+ remeras[4].precio +
            "\n6. Atras" +
            "\nEliga el producto que quiera comprar:"
        ));
        switch (parseInt(opcionMenu)) {
            case 1:
                carrito.push(remeras[0]);
                break;
            case 2:
                carrito.push(remeras[1]);
                break;
            case 3:
                carrito.push(remeras[2]);
                break;
            case 4:
                carrito.push(remeras[3]);
                break;
            case 5:
                carrito.push(remeras[4]);
                break;
            case 6: 
                alert("Volviendo atras..."); 
                break;
            default:
                alert("Ingrese una opcion correcta");
                break;
        }
        do {
        bandera = prompt("Desea salir?\n1.Si\n2.No");
        bandera = parseInt(bandera);
        }while (bandera <1 || bandera > 2);
        
        if (bandera === 1) {
            seguirComprando = false;
            alert("Volviendo al menu principal..."); 
        }       
    }
    return carrito;
}


function stockPantalones(carrito) {
    const pantalones = [
        {nombre:"Pantalon jogging", precio: 14000},
        {nombre:"Jeans Mom", precio: 26000},
        {nombre:"Bermuda de jean", precio: 22000},
        {nombre:"Pantalon cargo", precio: 24000},
        {nombre:"Pantalon deportivo", precio: 26000},
    ]
    
    //Variables
    let seguirComprando = true;
    let opcionMenu;
    let bandera;
    
    
    //Sin utilidad por el momento, no me sirvio en el prompt para que se vea todo junto.
    // for (let i = 0; i < pantalones.length; i++) {
    //     alert((i+1) +". "+ pantalones[i].nombre +": $"+ pantalones[i].precio);
    // }

    while (seguirComprando) {
        opcionMenu = parseInt(prompt("Pantalones disponibles: (Seleccione la opcion que desee)"+
            "\n1. "+ pantalones[0].nombre +": $"+ pantalones[0].precio +
            "\n2. "+ pantalones[1].nombre +": $"+ pantalones[1].precio +
            "\n3. "+ pantalones[2].nombre +": $"+ pantalones[2].precio +
            "\n4. "+ pantalones[3].nombre +": $"+ pantalones[3].precio +
            "\n5. "+ pantalones[4].nombre +": $"+ pantalones[4].precio +
            "\n6. Atras" +
            "\nEliga el producto que quiera comprar:"
        ));
        switch (parseInt(opcionMenu)) {
            case 1:
                carrito.push(pantalones[0]);
                break;
            case 2:
                carrito.push(pantalones[1]);
                break;
            case 3:
                carrito.push(pantalones[2]);
                break;
            case 4:
                carrito.push(pantalones[3]);
                break;
            case 5:
                carrito.push(pantalones[4]);
                break;
            case 6: 
                alert("Volviendo atras..."); 
                break;
            default:
                alert("Ingrese una opcion correcta");
                break;
        }
        do {
        bandera = prompt("Desea salir?\n1.Si\n2.No");
        bandera = parseInt(bandera);
        }while (bandera <1 || bandera > 2);
        
        if (bandera === 1) {
            seguirComprando = false;
            alert("Volviendo al menu principal..."); 
        }       
    }
    return carrito;
}


function stockAbrigos(carrito) {
    const abrigos = [
        {nombre:"Campera basica", precio: 24000},
        {nombre:"Buzo con estampado", precio: 36000},
        {nombre:"Sweater de lana", precio: 26000},
        {nombre:"Camperon deportivo", precio: 45000},
        {nombre:"Buzo canguro", precio: 38000},
    ]
    
    //Variables
    let seguirComprando = true;
    let opcionMenu;
    let bandera;
    
    
    //Sin utilidad por el momento, no me sirvio en el prompt para que se vea todo junto.
    // for (let i = 0; i < Abrigos.length; i++) {
    //     alert((i+1) +". "+ Abrigos[i].nombre +": $"+ Abrigos[i].precio);
    // }

    while (seguirComprando) {
        
        opcionMenu = parseInt(prompt("Abrigos disponibles: (Seleccione la opcion que desee)"+
            "\n1. "+ abrigos[0].nombre +": $"+ abrigos[0].precio +
            "\n2. "+ abrigos[1].nombre +": $"+ abrigos[1].precio +
            "\n3. "+ abrigos[2].nombre +": $"+ abrigos[2].precio +
            "\n4. "+ abrigos[3].nombre +": $"+ abrigos[3].precio +
            "\n5. "+ abrigos[4].nombre +": $"+ abrigos[4].precio +
            "\n6. Atras" +
            "\nEliga el producto que quiera comprar:"
        ));
        switch (parseInt(opcionMenu)) {
            case 1:
                carrito.push(abrigos[0]);
                break;
            case 2:
                carrito.push(abrigos[1]);
                break;
            case 3:
                carrito.push(abrigos[2]);
                break;
            case 4:
                carrito.push(abrigos[3]);
                break;
            case 5:
                carrito.push(abrigos[4]);
                break;
            case 6: 
                alert("Volviendo atras..."); 
                break;
            default:
                alert("Ingrese una opcion correcta");
                break;
        }
        do {
        bandera = prompt("Desea salir?\n1.Si\n2.No");
        bandera = parseInt(bandera);
        }while (bandera <1 || bandera > 2);
        
        if (bandera === 1) {
            seguirComprando = false;
            alert("Volviendo al menu principal..."); 
        }       
    }
    return carrito;
}

//Funcion: mostrar lo que se lleva.
function mostrarProductos (carrito){
    const carritoMuestra = [];
    for (let i = 0; i < carrito.length; i++) {
        carritoMuestra[i]= carrito[i].nombre;
    }

    alert("Su carrito: \n"+carritoMuestra.join(" - "));1
};

//Funcion: cobrar todos los productos:
function cobrarProductos (carrito){
    let precio = 0;
    let resultado = 0;
    for (let i = 0; i < carrito.length; i++) {
        precio = parseInt(carrito[i].precio);
        resultado += precio;
    }

    return resultado;
};

mostrarProductos(carritoCompra);

let pagoFinal = cobrarProductos(carritoCompra);
let dineroCliente;
let vuelto;
let continuar = true;

//Pago
while (continuar) {
    dineroCliente = parseInt(prompt("El monto a pagar es:\n $"+pagoFinal));
if (dineroCliente > pagoFinal) {
    vuelto = (dineroCliente - pagoFinal);
    alert("Gracias por comprar en Baratin, su vuelto es: " + vuelto);
    continuar = false;
} else if (dineroCliente == pagoFinal){
    alert("Gracias por comprar en Baratin");
    continuar = false;
}else{
    alert("Monto insuficiente, por favor ingrese el monto correcto.")
}

}


//Factura:
console.log("FACTURA - CONSUMIDOR FINAL:");
for (let i = 0; i < carritoCompra.length; i++) {
    console.log((i+1) +". "+ carritoCompra[i].nombre +": $"+ carritoCompra[i].precio);
}

console.log("TOTAL: $"+pagoFinal);


