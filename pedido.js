// Made by: Mauro Infante- cohorte 15 java
//* Definicion de variables
let name = "Juan";
const city = "Bogotá";
let pro = true < false ? "no afiliado" : "afiliado";

//* variables adicionales
let state = " en proceso de preparacion";
let newState = "en camino";

//~ Definicion de arrays 
let list = ["Hamburguesa", "Pizza", "Empanadas", "Perro Caliente", "Arepa"];

//~ Definicion de objetos
let bill = {
    cliente: name,
    ciudad: city,
    estado: pro,
    productos: list,
    pedido: state,
    nuevoEstado: newState,
};

//! variables numericas
let hamburguesa = 15000;
let pizza = 20000;
let empanadas = 10000;
let perroCaliente = 12000;
let arepa = 8000;
let subtotal = hamburguesa + pizza + empanadas + perroCaliente + arepa;
const domicilio = 3000;
const propina = subtotal * 0.1;
let total = subtotal + domicilio + propina;

//^ Logs 
console.log(`Hola ${name}, tu pedido ha sido enviado a ${city} y tu estado de pro es ${pro}`);
console.log("-----------------------------------------------------------------------------------------");
console.log(`Tu lista tiene  los  productos: ${list}`);
console.log("-----------------------------------------------------------------------------------------");
console.log(`Tu lista tiene como primer producto: ${list[0]}`);
console.log("-----------------------------------------------------------------------------------------");
console.log(`Solictastes agregar Helado a tu lista de productos`);
;list.push("Helado");
console.log("-----------------------------------------------------------------------------------------");
console.log(`Tu lista actualizada ahora es: ${list}`);
console.log("-----------------------------------------------------------------------------------------");
console.log(`Solictastes quitar Helado de tu lista de productos`);
list.pop("Helado");
console.log("-----------------------------------------------------------------------------------------");
console.log(`Tu lista actualizada ahora es: ${list}`);
console.log("-----------------------------------------------------------------------------------------");
console.log(`Tu lista tiene en total: ${list.length} productos`)
console.log("-----------------------------------------------------------------------------------------");
console.log(`
==============================Informacion del pedido ===================================
Cliente: ${bill.cliente}
Ciudad: ${bill.ciudad}
Estado Pro: ${bill.estado}
Productos: ${bill.productos}
Estado del pedido: ${bill.pedido}
=========================================================================================
`);
// imprime  nombre solo desde el pedido
console.log(`Nombre de cliente en recibo: ${bill.cliente}`);
// El pedido avanza: cambia el estado a En camino e imprime el pedido de nuevo
console.log(`Tu pedido cambio de estado de ${bill.pedido} a ${bill.nuevoEstado}` );
console.log("")
console.log("===============================Factura del pedido========================================");
console.log(`Subtotal: ${subtotal}`);
console.log(`Domicilio: ${domicilio}`);
console.log(`Propina: ${propina}`);
console.log(`El total a pagar por tu pedido ${name} es ${total}`);



