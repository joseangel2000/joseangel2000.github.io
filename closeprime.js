
function myFunction2() {
 	const max_size = 10000001

 	var x = document.getElementById("number2").value;

    var criba = [];
    for(var i = 0; i < max_size; ++i){
    	criba[i] = true;
    }
    criba[0] = false; 
    criba[1] = false;

    var sr = Math.sqrt(max_size);
    for(var i = 2; i <= sr; i++){
    	for(var j = i ;  j * i < max_size; j++){
    		criba[i * j] = false;
    	}
    }

    var p = x;
    while(criba[p] === false){
    	p++;
    }

	document.getElementById("demo2").innerHTML = " el primo mas cercano a " + x + " es " + p ;
    	
	
}




	
