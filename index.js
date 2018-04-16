var $ = require('jquery');

var categories = ["Category-1", "Category-2", "Category-3", "Category-4"];
var cells = [];
var index = 0;
var csv = require("fast-csv");
var fs = require("fs");


function Question (p, q, a) {
  this.points = p;
  this.question = q;
  this.answer = a;
  this.opened = false;
  this.answered = false;
}

$(document).ready(function() {

  categories.forEach(function(cat){
    $("#categories-header").append("<div class='col s12 l3' id='category-header'><p>"+cat+"</p></div>");
  });

  csv
   .fromPath("data.csv", {trim: true})
   .on("data", function(row){
       //console.log(row);
       var temp = new Question(index, row[0], row[1], row[2]);
       cells[index] = temp;
       index++;
   })
   .on("end", function(){
       console.log("done");
       cells.forEach(function(p) {
         console.log(p);
       });
   });
/*
  $("#question-grid").append("<div class='col s12 l3' id="+'loc'+10+"> <a class='btn-flat btn-large' id="+10+">"+cell10.points+"</a> </div>");
  $("#question-grid").append("<div class='col s12 l3' id="+'loc'+20+"> <a class='btn-flat btn-large' id="+20+">"+cell20.points+"</a> </div>");

  $(".btn-flat").click(function(){
    var id = $(this).attr('id');
    var cell = eval("cell" + id);

    if (!cell.opened) {
      $(this).replaceWith("<a class='btn-flat btn-large' onclick='selected("+id+")' id="+id+">"+cell.question+"</a>");
      cell.opened = true;
    }
    console.log(cell);

  });
*/
});






//"<a class='waves-effect waves-teal btn-flat' id="+10+">"+cell10.points"</a>"
//$("#categories").append("<a class='btn-flat' id="+10+">"+cell10.points+"</a>");
//$("#categories").append("<a class='btn-flat btn-large' id="+20+">"+cell10.points+"</a>");
