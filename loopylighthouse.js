function loopyLighthouse(range, multiples, words) {
  var start = range[0];
  var end = range[1];

  while (start <= end) {

    var toPrint = "";

    for (var i = 0; i < multiples.length; i++) {
      if (start % multiples[i] === 0) {
        toPrint += words[i];
      }
    }

    if (toPrint === "") {
      toPrint = start;
    }

    console.log(toPrint);
    start++;
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));