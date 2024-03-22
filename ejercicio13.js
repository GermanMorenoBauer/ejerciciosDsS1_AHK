/*
13.  Hacer un programa que, en primer lugar, le pida al usuario que ingrese un número, y que luego le muestre las 
siguientes opciones: 
 
a) Aplicar suma: si selecciona esta opción, se le deberá pedir que ingrese otro número y mostrar el resultado. 
Al mostrar el resultado, se le deberá preguntar si quiere  seguir sumando: si  responde  que  sí, se  deberá 
sumar el valor que se especifique; si responde que no, se deberá volver al menú principal. 

b) Aplicar resta: si selecciona esta opción, se le deberá pedir que ingrese otro número y mostrar el resultado.

c) Transformar  a  número  romano:  si  selecciona  esta  opción,  se  le  deberá  mostrar  el  número  romano 
equivalente. 

d) Potenciar: si selecciona esta opción, se le deberá pedir que ingrese otro número que será el exponente al 
que se debe elevar el número inicial. 

Se deberá tener en cuenta que, en todos los casos, siempre se debe volver al menú principal luego de ejecutar 
la opción seleccionada. 

Además,  deberá  agregarse  una  opción  de  salir:  cuando  se  seleccione  esta  opción,  se  deberá  mostrar  por 
pantalla todas las operaciones que realizó el usuario
*/

function mostrarMenu() {
    var opcion;
    var operaciones = [];

    do {
        console.log("OPCIONES DISPONIBLES");
        console.log("a) Sumar");
        console.log("b) Restar");
        console.log("c) Convertir a numero romano");
        console.log("d) Potenciar");
        console.log("e) Salir");

        opcion = prompt("Ingrese una opción (a, b, c, d, e): ");

        switch (opcion) {
            case "a":
                var num1 = prompt("Ingrese el primer numero: ");
                var num2 = prompt("Ingrese el segundo numero: ");
                var suma = num1 + num2;
                console.log("El resultado de la suma es: " + suma);
                operaciones.push("Suma: " + num1 + " + " + num2 + " = " + suma);
                break;

            case "b":
                var num1 = prompt("Ingrese el primer numero: ");
                var num2 = prompt("Ingrese el segundo numero: ");
                var resta = num1 - num2;
                console.log("El resultado de la resta es: " + resta);
                operaciones.push("Resta: " + num1 + " - " + num2 + " = " + resta);
                break;

            /*case "c":
                var num = prompt("Ingrese el numero a convertir a romano: "));
                var resultadoRomano = convertirARomano(num);
                console.log("El numero romano equivalente es: " + resultadoRomano);
                operaciones.push("Numero romano: " + num + " = " + resultadoRomano);
                break;*/

            case "d":
                var base = prompt("Ingrese la base: ");
                var exponente = prompt("Ingrese el exponente: ");
                var potencia = pow(base, exponente);
                console.log("El resultado de la potencia es: " + potencia);
                operaciones.push("Potencia: " + base + " ^ " + exponente + " = " + potencia);
                break;

            case "e":
                console.log("Operaciones que realizaste:");
                for (var i = 0; i < operaciones.length; i++) {
                    console.log(operaciones[i]);
                }
                break;

            default:
                console.log("Opcion incorrecta. Ingresar una de las opciones disponibles.");
        }
    } while (opcion !== "e");
}

/*function convertirARomano(num) {
}*/
mostrarMenu();