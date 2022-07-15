


 var num_of_rows = 14;        
 var class_index = 0;
 var table_task = ["b", "c", "d"];


 
function generate_table() {


 function componentToHex(c) 
 {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
 }
 



 //var current_hour = 0;

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


// function merge_cells()
// {
// var namestring = "";
// var ingroup = false;
// var group_num = 1;
// task_title = document.getElementById("task").value

// for(var j = 0; j < 8; j++)
// {
//   for (var i = 0; i < num_of_rows; i++)
//   {
//     namestring = String(j + ',' + i);
    
//     if(document.getElementById(namestring).className !== "selected" && ingroup == true)
//     {
//       ingroup = false;
//       console.log("group end");
//     }
//     else if(document.getElementById(namestring).className == "selected" && ingroup == true)
//     {
//       console.log(namestring +" is in group " + group_num);
      
//       //Add element to group list
//       groups[group_num].push(namestring);
//     }
//     else if(document.getElementById(namestring).className == "selected" && ingroup == false)
//     {
//       console.log(namestring + " START OF A NEW GROUP");

//       //Add the task title to start of time block:
//       document.getElementById(namestring).innerText = task_title;
      
//       // Create new group for elements to go into
//       group_num++;
//       groups[group_num] =[];
//       //add current element id to new group
//       groups[group_num].push(namestring);

//       ingroup = true;

//     }
    
//     if(document.getElementById(namestring).className == "selected")
//     {
//             document.getElementById(namestring).setAttribute("class", table_task[class_index]);
//     }
    

//   }
  
// }
// if(class_index < 2){
//   class_index++;
// }
// else{
//   class_index = 0;
// }
// console.log(groups); 
// }

 function select(blah)
{
    var namestring = "";
 

 
    for(var j = 0; j < 8; j++){
      for (var i = 0; i < num_of_rows; i++) {
        namestring = String(j + ',' + i);
        if(document.getElementById(namestring).className == "selected" )
          {
            document.getElementById(blah.id).setAttribute("class", "a");
            document.getElementById(blah.id).setAttribute("border:  1px solid black;");
          }
      }
    }
    document.getElementById(blah.id).setAttribute("class", "selected");
}


   
