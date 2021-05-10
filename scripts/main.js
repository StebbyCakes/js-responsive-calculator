const numBtn = document.querySelectorAll('.number'); // you cannot add an eventlistener to the entire list
const oprBtn = document.querySelectorAll('.operator');
const eql = document.querySelector('.equal-sign');
const clr = document.querySelector('.clear');
const plsMin = document.querySelector('.plus-minus');
const per = document.querySelector('.percent');
const deci = document.querySelector('.decimal');
var calculation = [];
var number = '';

function pushNumber(event) {
  alert(event.target.value); //this is the function eventListener is looking for in order to see what "value" got clicked
  number = number.concat(event.target.value);
  console.log(number);
}

function pushOperator(event) {
  alert(event.target.value);
  calculation.push(parseInt(number));
  calculation.push(event.target.value);
  number = '';

  console.log(calculation);
}

function calculate(event) {
  calculation.push(parseInt(number));
  calculation.push(event.target.value);
  var num1 = calculation[0];
  var num2 = calculation[2];
  console.log(calculation);
  for (let i = 0; i < calculation.length; i++)
     if (calculation[i] === '+') {
      res = num1 + ' + ' + num2 + ' = ' + (num1 + num2);
      console.log(res);
      alert(res);
      pushClear();
    } else if (calculation[i] === '-') {
      res = num1 + ' - ' + num2 + ' = ' + (num1 - num2);
      console.log(res);
      alert(res);
      pushClear();
    } else if (calculation[i] === '*') {
      res = num1 + ' * ' + num2 + ' = ' + (num1 * num2);
      console.log(res);
      alert(res);
      pushClear();
    } else if (calculation[i] === '/') {
      res = num1 + ' / ' + num2 + ' = ' + (num1 / num2);
      console.log(res);
      alert(res);
      pushClear();
    }
  }

function pushClear(event) {
  alert('The screen has been cleared');
  calculation = [];
  number = '';
}

function pushPlusMinus(event) {
  alert(event.target.value);
  calculation.push(event.target.value);
}

function pushPercent(event) {
  alert(event.target.value);
  calculation.push(event.target.value);
}

function pushDecimal(event) {
  alert(event.target.value);
  calculation.push(event.target.value);
  console.log(calculation)
}

numBtn.forEach(function(button) { // button is like num1 in greater than equal to which is called a "Parameter" which is a value that gets filled in
  button.addEventListener('click', pushNumber) // since button is all the values in that class, it gets thrown into a function to "look" for which one was clicked
});

oprBtn.forEach(function(operator) {
  operator.addEventListener('click', pushOperator);
})

eql.addEventListener('click', calculate);

clr.addEventListener('click', pushClear);

plsMin.addEventListener('click', pushPlusMinus);

per.addEventListener('click', pushPercent);

deci.addEventListener('click', pushDecimal);
