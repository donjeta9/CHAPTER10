function start()
{
	var n1 = new array( 5 );  // allocate five-element array
    var n2 new array ();  // allocate empty array

    // assign values to each element of array n1
    var length = n1.length; //get array's length once before the loop

    for ( var = 0; i < length; ++i )
    {
    	n1 [ i ] = i;
    } //end for
     

     // create and intialize five elements in ARRAY N2
     for ( i = 0; i < 5; ++i )
     {
     	n2 [ i ] = i;
     }  // end for
     outputarray("arrayn1:" , n1,document.getElementById( "output1" ) );
     outputarray("arrayn2:" , n2,document.getElementById( "output2" ) );
 }    // end function start

     //output the heading followed by a two-column table
    //containing indices and elements of "thearray"

     function output = "<h2>" + heading + "</h2><table>" +
     "<thead><th>index</th><th>value</th></thead><tbody>";

     // output the index and value of each array element
     var length = thearray.length; // get array's length once before loop

    for ( var i = 0; i < length; ++i )
    {
    	content += "<tr><td>" + i + "</td><td>" + thearray[ i ] + 
    	"</td></tr>";    
 }  // end for

        content +== "<tbody></table>";
        output.innerHTML = content; //place the table in the output element
    //  end function outputarray

    window.addeventlistener ( "load", start,false );

