function gcd(a,b){
    if(b === 0)
        return a;
    return gcd(b, a % b);
}
function myFunction4() {
 	

 	var x = document.getElementById("number41").value;
    var y = document.getElementById("number42").value;
    
   var z = gcd(x,y);
    

   if(z === 1){
        document.getElementById("demo4").innerHTML = x  + " y " + y + " son primos relativos";
   }
   else{
	   document.getElementById("demo4").innerHTML = "su maximo comun divisor es " + z ;
    }	
	
}