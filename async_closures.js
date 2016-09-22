for (var i = 0; i < 3; i++) {
  (function(instance) {
    setTimeout(function() { console.log(instance);}, (1000 + instance));
  })(i)
}

