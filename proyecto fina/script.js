let confirmar = confirm("Desea realizar una compra");

//Declaro variables de matematicas,sociales y fisica.
let m = 2000;
let s = 5000;
let f = 4000;

// Inicio del programa

if (confirmar  ){
   //Delaro nombre
let nombre = prompt("Ingrese su Nombre?");
console.log("Nombre= "+ nombre);
   //Declaro ID
let ID= parseInt(prompt("Ingrese su ID"));
//console.log("ID= " + ID)
   //Declaro tipo de cliente
let tipoCliente= parseInt(prompt("¿Qué tipo de cliente es ?"));
//console.log("Tipo de Cliente= " + tipoCliente);
   //Declaro matematicas
let mate = parseInt(prompt("Cantidad de libros de Matematicas"));
console.log("Libros de Matematicas= " + mate);
   //Declaro fisica
let fisica = parseInt(prompt("Cantidad de libros de Fisica"));
console.log("Libros de Fisica= " + fisica);
   //Declaro sociales
let sociales = parseInt(prompt("Cantidad de libros de Sociales"));
console.log("Libros de Sociales = " + sociales);

   tipoCliente = parseInt(tipoCliente);
    switch (tipoCliente){
      case 1:
        cliente = 0.30 ;
      break;
      case 2:
        cliente = 0.20 ;
      break;
      case 3:
        cliente = 0.10 ;
      break;
      case 4  :
        cliente = 0 ; 
   }

let totalMate = m * mate;
let totalFisica = f * fisica;
let totalSociales = s * sociales;

let totalmd = totalMate * cliente;
//console.log (totalmd);

let totalsd= totalSociales * cliente;
//console.log (totalsd);

let totalfd = totalFisica * cliente;
//console.log (totalfd);


let subTotal = totalMate + totalFisica + totalSociales;
console.log("Subtotal sin descuento = " + subTotal + " Colones");

let descuento = subTotal * cliente;
console.log("Descuento = " + descuento + " Colones");

let totalp = subTotal- descuento;
console.log("Total = " + totalp + " Colones");



     }else {
    console.log("Gracias por visitarnos");
}


let pregunta = prompt("¿Desea realizar otra compra? de lo contrario dijite  q ");
//console.log("compra nueva ")
if(pregunta!= "q" && pregunta!= "Q"){
  let replace = location.replace("index.html");
  
}else{
  (pregunta=="q" || pregunta=="Q")
  console.log("Gracias por preferirnos");

}
  
//let pregunta = confirm("desea realizar otra compra?");
//if (pregunta){
  
  
//}else{
 // console.log("gracias por preferirnos");
//}

//*********************************** */
//empieza no
//let descuento = subTotal * cliente;
//console.log("Descuento de = " +  descuento);

//let total = totalmd + totalsd + totalfd;
//console.log("Total a pagar = " + total);
//termina no
//******************************************* */