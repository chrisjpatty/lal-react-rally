function getRandomNumberBetween(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomNumberBetween(1, 10) --> 7
getRandomNumberBetween(1, 10) --> 5
getRandomNumberBetween(1, 10) --> 5
getRandomNumberBetween(1, 10) --> 2
getRandomNumberBetween(1, 10) --> 10
getRandomNumberBetween(1, 10) --> 2
getRandomNumberBetween(1, 10) --> 3
getRandomNumberBetween(1, 10) --> 1
getRandomNumberBetween(1, 10) --> 9
