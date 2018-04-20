var data1 = [];

function handleFile(files) {
  if (window.FileReader) {
    readToText(files[0]);
  } else {
    alert("This browser does not support FileReader");
  }
}

function readToText(file) {
  var reader = new FileReader();

  reader.readAsText(file);
  reader.onload = loadHandler;
  reader.onerror = errorHandler;
}

function loadHandler(event) {
  var csv = event.target.result;
  processData(csv);
}

function errorHandler(event) {
  if (evt.target.error.name == "NotReadableError") {
    alert("Can not read file!");
  }
}

function processData(csv) {
  var temp = csv.split(/\n/).map(function(row) {
    return row.split(",");
  });
  temp.forEach(function(row) {
    if (row.length === 1) {
      console.log("skipping empty line...");
    } else {
      data1.push(row);
    }
  });
}
