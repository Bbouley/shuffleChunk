array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

studentArray = ["Alex", "Amber", "Ashley", "Ben", "Bradley", "Brandon", "Charles", "Chip", "Crystal", "Dominic", "Erik", "Ethan", "Jeff", "Johnny", "Keith", "Kierston", "Kyle", "Lance", "Lucy", "Luis", "Patrick", "Pete", "Robert", "Ryan", "Sarah", "Suhayl", "Yusef", "Zoe"];

function shuffle(array){
      var length = array.length;
      var shuffledArray = [];
    for (var i = 0; i < length; i++) {
      var index = Math.floor(Math.random()*array.length);
      shuffledArray.push(array.splice(index,1)[0]);
    } return shuffledArray;
}



function getChunks (array, numOfGroups){

  var numOfLetters = Math.ceil(array.length/numOfGroups);

  var splitChunks = (shuffle(array)).slice(0);

  var chunk = [];

  var chunkArrayTotal = [];

    while (splitChunks.length>0){

      chunk = splitChunks.splice(0, numOfLetters);
      chunkArrayTotal.push(chunk);

    } return chunkArrayTotal;
}

console.log(getChunks(studentArray, 4));


