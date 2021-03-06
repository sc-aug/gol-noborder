
var view = {
  
  live: function(location, size) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", ("world" + size + "live"));
  },

  die: function(location, size) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", ("world" + size + "die"));
  },

  removeTable: function(id) {
    var tbl = document.getElementById("world");
    if(tbl) tbl.parentNode.removeChild(tbl);
  },

  generateTable: function(size) {
    // get the reference for the body
    var block = document.getElementById("field");

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    tbl.setAttribute("id", "world");
    //var tblBody = document.createElement("tbody");
    var row = document.createElement("tr");
    // creating all cells
    for (var i = 0; i < size; i++) {
      // creates a table row
      row = document.createElement("tr");
 
      for (var j = 0; j < size; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        cell.setAttribute("id", ("id_"+i+"_"+j));
        row.appendChild(cell);
      }
 
      // add the row to the end of the table body
      tbl.appendChild(row);
    }
 
    // // put the <tbody> in the <table>
    // tbl.appendChild(tblBody);
    // appends <table> into <body>
    block.appendChild(tbl);
    // sets the border attribute of tbl to 2;
  }

};
