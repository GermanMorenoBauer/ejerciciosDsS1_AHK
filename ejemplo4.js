/*Dado un valor numérico entero m, determinar e imprimir un listado con los m primeros múltiplos de 3 que no
sean múltiplos de 5.*/
var numeroEntero;
function multiplos(numeroEntero){
    var num1;
    console.log("Listado de multiplos de 3 que no son multiplos de 5: ");
for(var i=1;i<=numeroEntero;i++){
    num1= i*3;
    if(num1 % 5!= 0){
    console.log(num1);
}
}
return
}
multiplos(12);