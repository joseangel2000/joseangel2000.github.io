function myFunction5() {
 	

 	var x = document.getElementById("number5").value;

    const max_size = x + 1;

    var criba = [];
    for(var i = 0; i < max_size; ++i){
    	criba[i] = true;
    }
    criba[0] = false; 
    criba[1] = false;

    var primos = [];
    var sr = Math.sqrt(max_size - 1);
    for(var i = 2; i <= sr; i++){
    	for(var j = i ;  j * i < max_size; j++){
    		criba[i * j] = false;
    	}
    }
    for(var i = 2; i <= x; ++i){
        if(criba[i] === true)
            primos.push(i);
    }

	document.getElementById("demo5").innerHTML = " hay " + primos.length + " numeros primos menores o iguales a " + x  ;
    	
	
}