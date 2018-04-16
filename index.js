
function Question (p, q, a) {
  this.points = p;
  this.question = q;
  this.answer = a;
  this.opened = false;
  this.answered = false;
}

$(document).ready(function() {
  var cells = [];

  for (var i=0; i<data.length; i++) {
    if (i == 0) {
      for (var j=0; j<data[i].length;j++) {
        $("#categories-header").append("<div class='col s12 l3' id='category-header'><p>"+data[i][j]+"</p></div>");
      }
    }
    else {
      cells[i] = new Question (data[i][0], data[i][1], data[i][2]);
      $("#question-grid").append("<div class='col s12 l3' id="+'loc'+i+"> <a class='btn-flat btn-large' id="+i+">"+cells[i].points+"</a> </div>");
    }
  };


});
