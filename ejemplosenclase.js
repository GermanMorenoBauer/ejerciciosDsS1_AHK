var miSaludo;
miSaludo = "Hola Mundo!";
var otroSaludo = "Hola mundo 2!";
console.log(miSaludo, typeof(miSaludo));

miSaludo = "Hola Ger!";
console.log(miSaludo, typeof(miSaludo));

miSaludo = 2
console.log(miSaludo, typeof(miSaludo));

var unNumero = 2;
var otroNumero = 4;
var resultado = unNumero + otroNumero;

console.log(resultado);

var edad = 18;
var esMayorDeEdad = edad >= 18;

console.log(esMayorDeEdad, typeof(esMayorDeEdad));

var signodejuan = "libra";
var esDeLibra = signodejuan == "libra";
var esDeLibraMayor = esMayorDeEdad && esDeLibra;

console.log(esDeLibra, typeof(esDeLibra));

var esDeLibraOmayorDeEdad= esMayorDeEdad || esDeLibra;

/*determinar en una variable si el alumno aprobo la cursada,para 
poder aprobar el alumno debe aprobar ambos parciales
El alumno aprueba si la nota>=6*/

var parcial1 = 7;
var parcial2= 2;
var CursadaAprobada;

CursadaAprobada = parcial1 >= 6 && parcial2 >= 6;

console.log(CursadaAprobada);

/*determinar en una variable si el alumno aprobo la cursada,para 
poder aprobar el alumno debe aprobar ambos parciales en cualquiera de sus instancias
El alumno aprueba si la nota>=6*/

var parcial1 = 7;
var recuperatorioparcial1;
var parcial2 = 2;
var recuperatorioParcial2 = 3;
var CursadaAprobada;

CursadaAprobada = (parcial1 >= 6 || recuperatorioParcial1 >= 6) && (parcial2 >= 6 || recuperatorioParcial2 >= 6);

console.log(CursadaAprobada);

if (CursadaAprobada == true){
    console.log("Felicitaciones pichon estas aprobado!")
}else {
    console.log("Lamentablemente no aprobaste,ponete a estudiar man!");
}


function apuebaParcial(parcial1,parcial2, notaMin){
return parcial1 >= notaMin || parcial2 >= notaMin;
}

if(apuebaParcial(2,4,6)){
    console.log("Felicitaciones pichon estas aprobado!")
}
else {
    console.log("Lamentablemente no aprobaste,ponete a estudiar man!");
}

function apruebaCursada(nota1,notarecu1,nota2,notarecu2,notaMin){
return apuebaParcial(nota1,notarecu1, notaMin) >= apuebaParcial(nota2,notarecu2, notaMin);
}

if(apruebaCursada(2,4,6,6,6)){
    console.log("Felicitaciones pichon estas aprobado!")
}
else {
    console.log("Lamentablemente no aprobaste,ponete a estudiar man!");
}

/*Desarrollar una función que, dado dos números, nos diga si son múltiplos.*/

function esMultiplo(num1,num2){  
  return num1%num2 == 0 || num2%num1==0;
}

if (esMultiplo(2,4))
{
    console.log("Son multiplos")
}
else{
    console.log("No son multiplos")
}

/*Se ingresa un número con el formato YYYYMMDD. A partir de ese número mostrar el año (YYYY), el mes (MM)
y el día (DD).*/

var fecha = 20021005;

function extraerFecha(fecha) {
 
    var anio = numero / 10000 | 0;
    var mes = (numero / 100) % 100 | 0;
    var dia = numero % 100;

    return {
        anio: anio,
        mes: mes,
        dia: dia
    };
}




/*Dadas dos fechas en formato AAAAMMDD, informar cual es la más reciente.
*/

var fecha1 = 20021005; 
var fecha2 = 20100505;

if(fecha1 > fecha2){
    console.log("La fecha 1 es mas reciente")
}
if(fecha1 < fecha2){
    console.log("La fecha 2 es mas reciente")
}
else{
    console.log("Son la misma fecha")
}


/*11. Desarrollar una función que calcule el máximo común divisor (MCD) entre dos números unNumero
otroNumero, teniendo en cuenta el siguiente algoritmo:
a. Dividir unNumero por otroNumero, y calcular el resto sabiendo que éste siempre cumple con:
0<R<otroNumero
b. Si R==0 entonces el MCD es otroNumero; sino seguir a paso C
c. Reemplazar unNumero por otroNumero, otroNumero por R y volver al paso A*/
function MCD(unNumero,otroNumero){
    var R = unNumero % otroNumero;
    var maximoComunDivisor;
    if(R==0){
        maximoComunDivisor = otroNumero;
        return maximoComunDivisor;
    }
    else return MCD(otroNumero,R)
    
}
console.log(MCD(7,3));

function mayorDeDosNumeros()
{
 var primerNumero = prompt("Ingrese un numero");   
 var segundoNumero = prompt("Ingrese un numero");
 
 if(primerNumero >= segundoNumero){
    return primerNumero;
 }
 else return segundoNumero;
}

function mayorDeDosNumerosMejorada(){
    const primerNumero = prompt("Ingrese un numero");   
    const segundoNumero = prompt("Ingrese un numero");

    var numeroMayor;

    if(primerNumero >= segundoNumero){
        numeroMayor = primerNumero;
    }
    else {
        numeroMayor = segundoNumero;
    }
return numeroMayor;
}

function mayorDe10NumerosPedidosAlUsusario(){
    var mayorNumero = -999999;

    for(var i = 0;i < 10;i ++){
        const numeroIngresado = prompt("Ingrese un numero");

        if(numeroIngresado >= mayorNumero){
            mayorNumero = numeroIngresado;
        }
    }
    return mayorNumero
}
 function mayorDeLosNumerosPedidosAlUsusario(){
    const cantnumerosAIngresar = prompt("Indique la cant. de numeros a comparar")
    var mayorNumero = -999999;

    for(var i = 0;i < cantnumerosAIngresar;i ++){
        const numeroIngresado = prompt("Ingrese un numero");

        if(numeroIngresado >= mayorNumero){
            mayorNumero = numeroIngresado;
        }
    }
    return mayorNumero
 }

 const conjuntoDeNumero = [1,2,3,4,5,6,7,8,9,10];
 const valorDeLaQuintaPosicion = conjuntoDeNumero[4];
 
 function mayorDelConjuntoDeNumeros(numeros){
    var mayorNumero = -999999;

    for(var i = 0;i < numeros.lenght;i ++){//numero.lenght me devuelve la cantidad de posiciones del vector numeros
        const numeroDeLaPosicion = numeros[1];

        if(numeroDeLaPosicion >= mayorNumero){
            mayorNumero = numeroDeLaPosicion;
        }
 }
}

const otroConjuntoDeNumeros =[100,500,650,150,-90,900,1500];

function mayorDelConjuntoHastaPrimerNegativo(numeros){
    var mayorNumero = -9999999;
    var i = 0;
    while(i < numeros.lenght && numeros[i] >= 0){
        const numeroDeLaPosicion = numeros[1];

        if(numeroDeLaPosicion >= mayorNumero){
            mayorNumero = numeroDeLaPosicion;
        }
        i++;
    }
}

//EJERCICIO 2

function arrayDeNumeros(conjuntoDeNumeros){

var mayoresDe100 = 0;
var sumaMayores100 = 0;
var sumaMenoresDeMenosDiez = 0;
var promedioMayoresde100 = 0;


    for(var i=0;i < conjuntoDeNumeros.length;i++){
    var n = conjuntoDeNumeros[i];

    if(n>100){
        mayoresDe100++;
        sumaMayores100 = sumaMayores100 + n;
    }
    if(n<-10){
        sumaMenoresDeMenosDiez = sumaMenoresDeMenosDiez + n;
    }
    }

    promedioMayoresde100 = sumaMayores100 / mayoresDe100;

console.log("El promedio de mayores de 100 de " + promedioMayoresde100 + " y la suma total de los menores de -10 es " + sumaMenoresDeMenosDiez )
}

arrayDeNumeros([20, 150, 200, -20, -40])


//EJERCICIO 12 y 13 HACER

/*Crear una funcion que reciba un array como parametro y devuelva otro array sin elementos duplicados
var array1=[];

function arraySinElemDuplicados(array1){
    var array2=[];
    var arrayElemDuplicados=[];
    var elemento;
    array1[i]= elemento;
    array1.push(elemento);
    for(var i=1;i<array1.length;i++){

        if(array1[i-1] == lecturaDeArray(array2) || lecturaDeArray(array2) == array1[i]){
            arrayElemDuplicados.push(i);
            i++;
        }else
        
}
}
function lecturaDeArray(arrayElemDuplicados)
{
    for(i;0;i<arrayElemDuplicados.length;i++){
        array1
    
    }
}


//Crear una funcion que reciba una cadena(string) como parametro y devuelva el string invertido//
function stringInvertido(cadena){
    var string = "";
    for(i=cadena.length -1;i>=0;i--){
        string+=cadena[i];

}
return string;
}
console.log(stringInvertido("german"));



//Crear una funcion que reciba un string como parametro y que cuente la cantidad de vocales que contiene//


function vocalesString(cadena){
    var cantVocales=0;
    for(i=0;i<cadena.length;i++){
        
        if(cadena[i] === "a"  || cadena[i] === "e" || cadena[i] === "i"  || cadena[i] ===  "o"  || cadena[i] ===  "u"  || cadena[i] === "A" || cadena[i] === "E"  || cadena[i] === "I"  || cadena[i] ===  "O" || cadena[i] === "U") {
        
            cantVocales++;

}

}
return cantVocales
}
console.log(vocalesString("german"));*/

//Que nos diga si una palabra es palindromo

function esPalindromoONo(palabra){
    var palindromo = false;
    for(var i=0;i<palabra.length;i++){
        for(var l=palabra.length -1;l>=0;il--){
            if(palabra[i]==palabra[l]){    
    palindromo = true;
}else{
    palindromo = false;
}

    }


}
return palindromo

}

console.log(esPalindromoONo(ana))

function esPalindromoONo2(palabra){
return palabra == stringInvertido(palabra);
}

//dado un numero calcule su factorial

function factorial(numero){
    var resultado; 
    for(var i=0;i<=numero;i++){
        resultado += (i * numero);
     }
     return resultado;
}
console.log(factorial(10));