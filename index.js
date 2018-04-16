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



});






//"<a class='waves-effect waves-teal btn-flat' id="+10+">"+cell10.points"</a>"
//$("#categories").append("<a class='btn-flat' id="+10+">"+cell10.points+"</a>");
//$("#categories").append("<a class='btn-flat btn-large' id="+20+">"+cell10.points+"</a>");
