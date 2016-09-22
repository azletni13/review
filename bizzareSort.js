function bizzareSorrt(arr) {
  for (var i = 0; i < arr.length; i++){
    (function(instance) {
      setTimeout(function() {console.log(arr[instance])}, (1000 + arr[instance]));
    })(i);
  }
}

bizzareSorrt([5, 6, 3, 7, 1, 9, 3]);