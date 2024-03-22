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
 
    var año = numero / 10000 | 0;
    var mes = (numero / 100) % 100 | 0;
    var día = numero % 100;

    return {
        año: año,
        mes: mes,
        día: día
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
        return "El maximo comun divisor entre los dos numero es " + maximoComunDivisor;
    }
    else{
        unNumero = otroNumero;
        otroNumero = R;
        return MCD(unNumero,otroNumero)
    }
}
console.log(MCD(7,3));


