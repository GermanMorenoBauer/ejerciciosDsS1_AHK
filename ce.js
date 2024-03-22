function calculadora(monto) {
    
    var listaCantBilletesYMonedas = [];
    var billetes;
    var moneda;
    
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
        listaCantBilletesYMonedas.push({ "billete": 5, "cantidad": billetes });
        monto %= 5;
    }

    
    if (monto >= 2) {
        billetes = monto / 2;
        listaCantBilletesYMonedas.push({ "billete": 2, "cantidad": billetes });
        monto %= 2;
    }

    
    if (monto >= 1) {
        billetes = monto / 1;
        listaCantBilletesYMonedas.push({ "billete": 1, "cantidad": billetes });
        monto %= 1;
    }

    return listaCantBilletesYMonedas;
}

console.log(calculadora(2555));