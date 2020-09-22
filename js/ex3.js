(function () {
  var num1 = prompt("Enter an integer number 1");
  var num2 = prompt("Enter an integer number 2");

  if (!num1 || !num2 || isNaN(Number(num1)) || isNaN(Number(num2))) {
    alert("Invalid number!");
  }

  num1 = Number(num1);
  num2 = Number(num2);

  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
  console.log(`${num1} % ${num2} = ${num1 % num2}`);
})();
