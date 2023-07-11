function createTable(data, rows, cols) {
  var table = document.getElementById("table");
  var index = 0;

  for (var i = 0; i < rows; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < cols; j++) {
      var cell = document.createElement("td");
      var a = document.createElement("a");
      a.textContent = data[index];
      a.href = "https://prodomain.info/whois/" + data[index];
      cell.appendChild(a);
      row.appendChild(cell);
      index++;
    }

    table.append(row);
  }
}

function getRandomIndexes(length, count) {
  var indexes = [];
  while (indexes.length < count) {
    var randomIndex = Math.floor(Math.random() * length);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var emailList = xhr.responseText.split("\n");
    var randomIndexes = getRandomIndexes(emailList.length, 40);
    var randomEmails = randomIndexes.map((index) => emailList[index]);

    createTable(randomEmails, 10, 4);
  }
};
xhr.open("GET", "quarterlyremove.txt", true);
xhr.send();
