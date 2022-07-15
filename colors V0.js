
 var num_of_rows = 14;        

 
function generate_table() {


 function componentToHex(c) 
 {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
 }
 
 // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
 
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < num_of_rows; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 8; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("   ");      	
      var cell_id_string = String(j + ',' + i);
    
      cell.id = cell_id_string;
      cell.appendChild(cellText);
      cell.setAttribute("class", "a");
      cell.setAttribute("onClick", "select(this)");
      
      var color = "#" +componentToHex(i*11) + componentToHex(j*13)+ componentToHex(i*j*3);

      cell.setAttribute("style", "background-color:"+ color + ";");
  
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "3");
  tbl.setAttribute("width", "50%");
  
}


 function select(blah)
{
  
  // Unselect function takes a html element and then sets it's class type to unselected
  function Unselect(element)
  {
      //console.log(element.id)
      document.getElementById(element.id).setAttribute("class", "normal-unselected");
  }

    
     //////////////////////////////////////////////////////////////////////////
     //Checks to see if any elements are already selected and unselects them
     //Before assigning the current element class to selected. 
    
      var selected_htmlCollection = document.getElementsByClassName("selected");
  
      //creates an array of objects from html collection 
      //needed because .forEach does not work with html collection
      var arr = Array.from(selected_htmlCollection);
      //runs the Unselect() function on each element in the array
      arr.forEach(Unselect)

    //Set the element that was clicked on to selected ...AFTER checking for any selected elements
    document.getElementById(blah.id).setAttribute("class", "selected");
    var selected_color = document.getElementById(blah.id).getAttribute("style", "background-color:");
    console.log(selected_color);
}


   
