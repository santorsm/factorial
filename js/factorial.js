
exports.factorial = function(num) {
  
  // // define output variable = 1
  // let output = 1
  // // if num <= 1, return output variable
  // if (num <= 1){
  //   return output
  // }
  // // else
  // // while num > 1
  // while (num > 1){
  //   output *= num
  //   num--;
  // }
  // // multiply output by num
  // // decrement num by 1
  // // return output variable
  // return output

if (num <= 1){
  return 1
}
return (num * exports.factorial(num-1))
 
};
