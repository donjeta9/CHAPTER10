var frequency = [, 0 , 0 , 0 , 0 , 0 , 0  ]; // frewuency[0] of a switch
var totaldice = 0;
var dieimages = new array(12); // array to store img elements

// get diw img elements
function start()
{
	var button = document.getElementById( "rollbutton" );
	button.addEventListener( "click , rolldice , false ");
	var length = dieimages.length; // get array's length once before loop
	for ( var i = 0; i < length; ++i )
	{
		dieimages[ i ] = document.getElementById( "die" + ( i + 1 ) );
	}  // end for
}  // end funcition start
   
   // roll the dice
   function rolldice()
   {
   	var face;  // face rolled
   	var length = dieimages.length;

   	for( var i = 0; i < length; ++i )
   	{
   		face = Math.floor( 1 + Math.random() * 6 );
   		tallyrolls( face );  //increment a frequency counter
   		setimage( i, face ); //display appropriate die image
   		++totaldice; // increment total
   	}  end for

   	updatefrequencytable();
   }  // end function rolldice

   //increment appropriate frequency counter
   function tallyrolls( face )
   {
   	++frequency [ face ];  // increment appropriate counte
   }  //  end function tallyrolls

     // set image source for a die
     function setimage( dieimg )
     {
     	dieimages[ dienumber ].setattribute( "src", "die" + face + ".ong" );
     	dieimages[ dienumber ].setattribute( "alt",
     		"die with " + face + "spot(s)" );
     }  // end function setimage

       // update frequency table in the page
       function updatefrequencytable()
       {
       	var results = "<table><caption>die rolling frequencies</caption>" +
       	"<thead><th>face</th>frequency</th>" +
       	"<th>percent</th><thead><tbody>";
       	var length = frequency.length;


       	// create table rows for frequencies
       	for ( var i = 1; i < length; ++i )
       	{
       		results += "<tr><td>1</td><td>" + i "</td><td>" + 
       		formatepercent(frequency [ i ] / totaldice) + "</td></tr>";
       	}  // end for

       	results += "<tbody></tbale>";
       	document.getElementById( "frequencytablediv" ).innerHTML = results;

       }  // end function updatefrequencytable

         // format percentage
         function formatepercent( value )
         {
         	value *= 100;
         	return value.toFixed(2);
         }  // end function formatpercent

         window.addEventListener( "load", start,false );
