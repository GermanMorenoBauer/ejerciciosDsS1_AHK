/*12. Dado un número entero que representa una suma de dinero, desarrollar un programa que indique qué
cantidades de billetes de $1000, $500, $200, $100, $50, $20, $10 y monedas de $5, $2, $1 se deben utilizar
para alcanzar dicho monto, dando prioridad a los billetes de mayor valor.*/
var monto;
function calculadora(monto){
    
    var listaCantBilletesYMonedas=[0,0,0,0,0,0,0,0,0,0];
    var billetes;
    for(i=0,i<listaCantBilletesYMonedas.length())
    if (monto >= 1000) {
        billetes = monto / 1000;
        listaCantBilletesYMonedas.push({ "billete": 1000, "cantidad": billetes });
        monto %= 1000;
    }


    if (monto >= 500) {
        billetes = monto / 500;
        listaCantBilletesYMonedas.push({ "billete": 500, "cantidad": billetes });
        monto %= 500;
    }

    
    if (monto >= 200) {
        billetes = monto / 200;
        listaCantBilletesYMonedas.push({ "billete": 200, "cantidad": billetes });
        monto %= 200;
    }

    if (monto >= 100) {
        billetes = monto / 100;
        listaCantBilletesYMonedas.push({ "billete": 100, "cantidad": billetes });
        monto %= 100;
    }

    
    if (monto >= 50) {
        billetes = monto / 50;
        listaCantBilletesYMonedas.push({ "billete": 50, "cantidad": billetes });
        monto %= 50;
    }

    
    if (monto >= 20) {
        billetes = monto / 20;
        listaCantBilletesYMonedas.push({ "billete": 20, "cantidad": billetes });
        monto %= 20;
    }

    
    if (monto >= 10) {
        billetes = monto / 10;
        listaCantBilletesYMonedas.push({ "billete": 10, "cantidad": billetes });
        monto %= 10;
    }

    
    if (monto >= 5) {
        billetes = monto / 5;
        listaCantBilletesYMonedas.push({ "moneda": 5, "cantidad": billetes });
        monto %= 5;
    }

    
    if (monto >= 2) {
        billetes = monto / 2;
        listaCantBilletesYMonedas.push({ "moneda": 2, "cantidad": billetes });
        monto %= 2;
    }

    
    if (monto >= 1) {
        billetes = monto / 1;
        listaCantBilletesYMonedas.push({ "moneda": 1, "cantidad": billetes });
        monto %= 1;
    }

    return listaCantBilletesYMonedas;
}
console.log("Se necesitan la siguiente cantidad de billetes y moneda para llegar al monto determinado");
console.log(calculadora(2555));


function calculadora(monto){
    for(i=0;i<{
    var listaCantBilletesYMonedas=[];
    var billetes;
    
    if (monto >= 1000) {
        billetes = monto / 1000;
        listaCantBilletesYMonedas.push({ "billete": 1000, "cantidad": billetes });
        monto %= 1000;
    }


    if (monto >= 500) {
        billetes = monto / 500;
        listaCantBilletesYMonedas.push({ "billete": 500, "cantidad": billetes });
        monto %= 500;
    }

    
    if (monto >= 200) {
        billetes = monto / 200;
        listaCantBilletesYMonedas.push({ "billete": 200, "cantidad": billetes });
        monto %= 200;
    }

    if (monto >= 100) {
        billetes = monto / 100;
        listaCantBilletesYMonedas.push({ "billete": 100, "cantidad": billetes });
        monto %= 100;
    }

    
    if (monto >= 50) {
        billetes = monto / 50;
        listaCantBilletesYMonedas.push({ "billete": 50, "cantidad": billetes });
        monto %= 50;
    }

    
    if (monto >= 20) {
        billetes = monto / 20;
        listaCantBilletesYMonedas.push({ "billete": 20, "cantidad": billetes });
        monto %= 20;
    }

    
    if (monto >= 10) {
        billetes = monto / 10;
        listaCantBilletesYMonedas.push({ "billete": 10, "cantidad": billetes });
        monto %= 10;
    }

    
    if (monto >= 5) {
        billetes = monto / 5;
        listaCantBilletesYMonedas.push({ "moneda": 5, "cantidad": billetes });
        monto %= 5;
    }

    
    if (monto >= 2) {
        billetes = monto / 2;
        listaCantBilletesYMonedas.push({ "moneda": 2, "cantidad": billetes });
        monto %= 2;
    }

    
    if (monto >= 1) {
        billetes = monto / 1;
        listaCantBilletesYMonedas.push({ "moneda": 1, "cantidad": billetes });
        monto %= 1;
    }
}
    return listaCantBilletesYMonedas;
}