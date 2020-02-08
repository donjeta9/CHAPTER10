function start() 
{
	var a = [ 10, 1, 9 , 2, 8, 3, 7, 4, 6, 5 ];
	outputArray( "data items in original order: ", a,
		document.getElementById( "originalArray" ) );
	a.sort( compareIntegers );  // sort the array
	outputArray( "data items in ascending order: " , a,
		document.getElementById( "sortedArray" ) );
}    // end function start



  // output the heading followed by the contents of theArray

  function outputArray( heading, theArray, output )
  {
  	output.innerHTML = heading + theArray.join( " " );
  }    // end function outputArray


     // comparison function for the use with sort

     function compareIntegers( value1, value2 )
     {
     	return parseInt( value1 )  -  parseInt( value2 );
     }   // end function compareintegers

     window.addEventListener( "load", start, false );
