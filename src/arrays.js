window.arrays = (function () {

  function o(){
    this.random = random;
    this.shuffle = shuffle;
    this.sortNumbers = sortNumbers;
  }

  // Returns an item at random from an array
  function random(arr){
    return arr[utils.randBetween(0, arr.length - 1)]
  }

  // Shuffles an array
  function shuffle(arr){
    var m = arr.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }
    return arr;
  }

  // Sorts an array of numbers
  function sortNumbers(arr){
    return arr.sort(function(a, b){ return a - b; });
  }

  // utility functions
  var utils = {};

  utils.randBetween = function(start, end){
    return Math.floor(Math.random() * (end + 1)) + start;
  }

  return new o();

}());
