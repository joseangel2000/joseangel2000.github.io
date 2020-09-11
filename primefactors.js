function myFunction3() {
 	

 	var x = document.getElementById("number3").value;

    var numero = x;
    var factores_primos = [];
    var factor_mas_chico = 2;
    while(numero > 1){
        if(numero % factor_mas_chico === 0){
            factores_primos.push(factor_mas_chico);
            while(numero % factor_mas_chico === 0){
                numero /= factor_mas_chico;
            }
        }
        factor_mas_chico += 1;
    }

	document.getElementById("demo3").innerHTML = " sus factores primos son " + factores_primos ;
    	
	
}