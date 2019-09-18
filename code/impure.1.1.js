function getRandomNumberBetween(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomNumberBetween(1, 10) --> 7
