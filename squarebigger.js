function myFunction6() {
 	

 	var x = document.getElementById("number6").value;

    var idx = 1, square = 1;

    while(square < x){
        idx++;
        square = idx * idx;
    }
    
     //document.getElementById("demo6").innerHTML = "esta huevada no funciona";
    

	document.getElementById("demo6").innerHTML = x + " <= " + square /*" = " + idx " x " + idx*/   ;
    	
	
}