function multiply(num1){
  return function(num2){
    return num1 * num2;
  };
}

console.log((multiply(4))(6));

// var mul4 = multiply(4);
// var res = mul4(6);
// console.log(res);
// console.log(mul4(5));
// console.log(mul4(10));
// console.log(mul4(20));

// const mul = n1 => n2 => n1 * n2;

// console.log(mul(4)(6));