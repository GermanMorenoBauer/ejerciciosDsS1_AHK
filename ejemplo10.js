/*Desarrollar una función que dado un número nos diga si es primo.*/
var numeroIngresado;
function numeroPrimoONo(numeroIngresado){
    for(i=2;i<=numeroIngresado;i++)
    if(numeroIngresado % 1  == 0 && numeroIngresado % numeroIngresado ==0){
        console.log("El "+ numeroIngresado + " es primo");
    }else{
        console.log("El "+ numeroIngresado + " no es primo");
    }
    return
}

numeroPrimo(77);

function numeroPrimoONoo(numeroIngresado){
var index = 2;
var divisorEncontrado = false;

while(index < (numero/2) && !divisorEncontrado){

    if(numero % i ==0){
        divisorEncontrado= true;
    }
    indexx++;
}
return !divisorEncontrado;
}

/*Si tiene dos divisores es primo*/