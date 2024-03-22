/*Desarrollar la función pow que recibe una base y un exponente y retorne la potencia.
*/

function pow(base,exponente){
    
    var base;
    var exponente;
    var potencia=1;
   if(exponente==0){
    potencia = 1;

   }else{
    for(var i=1;i<=exponente;i++){
        
        potencia =  potencia * base;
   
    }}
    return potencia;
}

console.log(pow(5,3));
