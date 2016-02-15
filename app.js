function sum(num1, num2) {

  var summation = num1 + num2;




  //var summation = sum(4,7)


 console.log('the answer is ' + summation)
 console.log('the sum of ' + num1 + ' and ' + num2 + ' is ' + summation)
 return summation;
}




function multiply(num1, num2) {

  var multiplies = num1 * num2;




 console.log('the answer is ' + multiplies)
 console.log('the product of ' + num1 + ' and ' + num2 + ' is ' + multiplies)
 return multiplies;
}


function sumAndMultiply(num1, num2, num3) {
  var prob3sum = sum(num1, num2)+ num3
  var prob3multiply = (multiply(num1, num2) * num3)
  console.log('The sum of ' + num1 + ' and ' + num2 + ' and '+ num3+ ' equals '+ prob3sum);
  console.log('The product of ' + num1 + ' and ' + num2 + ' and ' + num3 + ' equals ' + prob3multiply);
  return [prob3sum, prob3multiply];
}
