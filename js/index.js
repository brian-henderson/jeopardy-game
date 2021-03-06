//var elem = document.querySelector('.chips');
//var instance = M.Chips.init(elem);
//var instance = M.Chips.getInstance(elem);
//var instance = M.Carousel.getInstance(elem);


function Question(i, p, q, a) {
  this.id = i;
  this.points = p;
  this.question = q;
  this.answer = a;
}
var cells = [];

$(document).ready(function() {

  $(".modal").modal();
  $("#modal-initial").modal("open");
  $('.chips').chips();

  $("#populate").click(function() {
    console.log("pop")
    var csvFile = $("#csv-input").prop("files");
    handleFile(csvFile);
    console.log(data);
    $('.modal').modal("close");
    //console.log(instance.chipsData);
  });

  $("#modal-body").click(function() {
    $('#q').toggle();
    $('#a').toggle();
  });

  $('.chips-placeholder').chips({
    placeholder: 'Add Teams',
    secondaryPlaceholder: '+Team',
    limit: 6,
    minLength: 1
  });

});

function createTable() {
  for (var i = 0; i < data.length; i++) {
    if (i == 0) {
      for (var j = 0; j < data[i].length; j++) {
        $("#categories-header").append("<div class='col s12 l3' id='category-header'><p>" + data[i][j].toUpperCase() + "</p></div>");
      }
    } else {
      cells[i] = new Question(i, data[i][0], data[i][1], data[i][2]);
      $("#question-grid").append("<div class='col s12 l3 cell-div' id=" + i + " onclick='openQuestion(" + i + ")'>$" + cells[i].points + "</div>");
    }
  };
}

function openQuestion(id) {
  $('#modal-header').empty();
  $('#modal-body').empty();
  $('#modal-header').append("<h3>$" + cells[id].points + "</h3>")
  $('#modal-body').append("<h4 id='q'>" + cells[id].question + "</h4>")
  $('#modal-body').append("<h4 id='a'>" + cells[id].answer + "</h4>")
  $('#a').hide();
  $('#modal-window').modal("open");
  $("#" + id).empty();
}
