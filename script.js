const flores = ["Tulipan", "Rosa", "Amapola", "Magnolia"]; 

function deseaContinuar() {
    let respuesta = prompt("¿Desea elegir otra planta?").toLowerCase();
    return respuesta === "si";
}

function mostrarCatalogo(lista) {
    console.log("Catálogo de flores:");
    for (let i = 0; i < lista.length; i++) {
        console.log("- " + lista[i]);
    }
}

function sumarPlanta(nombre, lista) {
    lista.push(nombre);
    alert("Has agregado: " + nombre);
    console.log(lista);
}

function validarFlor(nombre, lista) {
    return lista.includes(nombre);
}

let continuar = true;
let catalogo = prompt("¿Desea ver el catálogo de flores?").toLowerCase();

while (continuar) {
    if (catalogo === "si") {
        mostrarCatalogo(flores);
        let nuevaFlor = prompt("¿Qué flor querés agregar?");
        
        if (validarFlor(nuevaFlor, flores)) {
            alert(`${nuevaFlor} ya está en el catálogo. No se agregará.`);
        } else {
            sumarPlanta(nuevaFlor, flores);
        }
        
    } else {
        alert("Invalido, escriba 'si'.");
    }
    continuar = deseaContinuar();
      if (!continuar) {
        alert("¡Muchas gracias por usar el catálogo de flores!");
    }
}


