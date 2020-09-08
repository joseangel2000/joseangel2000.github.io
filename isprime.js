
function myFunction1() {
    var x = document.getElementById("number1").value;
	var p;
	var flag = true;
	var l = Math.sqrt(x);
	for(var i = 2; i <= l; i++){
		if(x % i == 0){
			p = i;
			flag = false;
			break;
		}
	}
	if(flag === true){
    	document.getElementById("demo1").innerHTML = x + " es primo";
	}
	else if(flag === false){
		document.getElementById("demo1").innerHTML = x + " no es primo, es divisible por " + p;
	}
		 
	
}



	
