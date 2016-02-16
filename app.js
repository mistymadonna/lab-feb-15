var pTagOne = document.getElementById('ans-one')

function sum(num1, num2) {

  var summation = num1 + num2;

  //  console.log('The answer is ' + summation + '.')
  //  console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + summation + '.')
  pTagOne.textContent = 'The sum of ' + num1 + ' and ' + num2 + ' is ' + summation + '.';
  return summation;
}

var pTagTwo = document.getElementById('ans-two')


function multiply(num1, num2) {

  var multiplies = num1 * num2;
  //console.log('The answer is ' + multiplies + '.')
  //console.log('The product of ' + num1 + ' and ' + num2 + ' is ' + multiplies + '.')

  pTagTwo.textContent = 'The product of ' + num1 + ' and ' + num2 + ' is ' + multiplies + '.';
  return multiplies;
}

var pTagThree = document.getElementById('ans-three')

function sumAndMultiply(num1, num2, num3) {
  var prob3sum = sum(num1, num2) + num3
  var prob3multiply = multiply(num1, num2) * num3
    //  console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + prob3sum + '.');
    //  console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + prob3multiply) + '.';

  pTagThree.textContent = num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + prob3sum + '. The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + prob3multiply + '.'
  return [prob3sum, prob3multiply];
}


var pTagFour = document.getElementById('ans-four')

function sumArray(array1) {
  var totalSum = 0;
  for (var i = 0; i < array1.length; i++) {
    totalSum += array1[i];
    //    console.table(array1);
    //console.log(array1 + ' was passed in as an array of numbers, and ' + totalSum + ' is their sum.';
    pTagFour.textContent = array1 + ' was passed in as an array of numbers, and ' + totalSum + ' is their sum.';
  }
  return totalSum;
};

var pTagFive = document.getElementById('ans-five')

function multiplyArray(array2) {
  var arrayProduct = 1;
  for (var i = 0; i < array2.length; i++) {
    arrayProduct *= array2[i];
    //console.table(array2);
    //console.log('The numbers ' + array2 + ' have a product of ' + arrayProduct + '.');
    pTagFive.textContent = 'The numbers ' + array2 + ' have a product of ' + arrayProduct + '.';
  }
  return arrayProduct;
};
