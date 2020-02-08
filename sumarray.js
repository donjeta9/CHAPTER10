function start()
{
	var thearray = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ];
	var total1 = 0, total2 = 0;

	// interates through the elements of the array in order and adds
	// each element's value to total1

	var length  = thearray.length; // get array's length once before loop

	for ( var i = 0; i < length; ++i )
	{
		total1 += thearray[ i ];
	} //end for

	var results = "<p>total using indices: " + total1  + "</p>";


	// iterates through the element pf the array using a for ... in
   // statement to add each element's value to total2
   for ( var element in array )
   {
   	total2 += thearray[ element ];
   } // end for

   results += "<p>total using for... in: " total2 + "</p>";
   document.getElementById( "output" ).innerHTML = results;
}   // end function start

window.addEventListener( "load" , start, false );
