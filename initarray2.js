function start()
{
	//initializing list specifies the number of elements and
	// a value fir each element.
	var  colors = new array( "cyan", "magenta", "yellow", "black", );
	var integer1 = [ 2, 4 , 6 , 8 ];
	var integer2 = [ 2, , , 8 ];

	outputarray( "array colors contains",colors,
		document.getElementById("output1" ) );
	outputarray( "array integer1 contains", integers1,
		document.getElementById( "output2" ) );
	outputarray( "array integers2 contains", integers2,
		document.getElementById( "output3" ) );
}   // end function start
   // output the heading followed by a two-column table
   // containing indices and elements of "thearray"

   function outputarray( heading , thearray output )
   {
   	var content = "<h2>" + heading + "</h2><table>" + 
   	"<thead><th>index</th><th>value</th></thead><tbody>";

   	//output the index and value of each array element
   	var length = thearray.length; // get array's length once before loop

   	for ( var i = 0; i < length; ++i )
   	{
   		content += "<tr><td>" + i + "</td><td>" + thearray [ i ] +
   		"</td></tr>;"
   	}  // end for

   	content += "</tbody></table>";
   	output.innerHTML = content;  // place the table in the output element
   }  // end function outputarrray

   window.addEventListener( "load" , start , false );
