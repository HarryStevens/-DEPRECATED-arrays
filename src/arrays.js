window.arrays = (function () {

  function o(){
    this.average = average;
    this.extent = extent;
    this.is = is;
    this.max = max;
    this.min = min;
    this.random = random;
    this.shuffle = shuffle;
    this.sortNumbers = sortNumbers;
    this.sum = sum;
  }

  // Returns the average value of an array of numbers.
  function average(arr){
    return sum(arr) / arr.length;
  }

  // Returns ths minimum and maximum values of an array as the array [min, max].
  function extent(arr){
    return [min(arr), max(arr)];
  }

  // Test whether an element is an array
  function is(arr){
    return typeof(arr) == "object" && arr.length >= 0;
  }

  // Returns the maximum value of an array.
  function max(arr){
    return sortNumbers(arr)[arr.length - 1];
  }

  // Returns the minimum value of an array.
  function min(arr){
    return sortNumbers(arr)[0];
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

  // Returns the sum of an array of numbers.
  function sum(arr){
    return arr.reduce(function(d, i){ return i + d; });
  }

  // utility functions
  var utils = {};

  utils.randBetween = function(start, end){
    return Math.floor(Math.random() * (end + 1)) + start;
  }

  return new o();

}());
