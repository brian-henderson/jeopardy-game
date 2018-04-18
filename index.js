var teams = ["Team 1", "Team 2", "Team 3", "Team 4" ];

function Question (i, p, q, a) {
  this.id = i;
  this.points = p;
  this.question = q;
  this.answer = a;
}

$(document).ready(function() {

  $(".modal").modal();
  $("#modal-initial").modal("open");

  var cells = [];
  for (var i=0; i<data.length; i++) {
    if (i == 0) {
      for (var j=0; j<data[i].length;j++) {
        $("#categories-header").append("<div class='col s12 l3' id='category-header'><p>"+data[i][j]+"</p></div>");
      }
    }
    else {
      cells[i] = new Question (i, data[i][0], data[i][1], data[i][2]);
      $("#question-grid").append("<div class='col s12 l3' id="+'loc'+i+"> <a class='btn-flat btn-large cell' id="+i+">"+cells[i].points+"</a> </div>");
    }
  };

  $(".cell").click(function(){
    var id = $(this).attr('id');
    $('#modal-header').empty();
    $('#modal-body').empty();
    $('#modal-header').append("<h3>"+cells[id].points+"</h3>")
    $('#modal-body').append("<h4 id='q'>"+cells[id].question+"</h4>")
    $('#modal-body').append("<h4 id='a'>"+cells[id].answer+"</h4>")
    $('#a').hide();
    $('#modal-window').modal("open");
    $( "#"+id ).last().addClass( "disabled" );
    $( "#"+id ).empty();

  });

  $("#modal-body").click(function(){
    $('#q').toggle();
    $('#a').toggle();
  });

});
