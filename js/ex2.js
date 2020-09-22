(function () {
  var validInputs = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  var userInput = prompt("Please enter a day of week");

  while (!userInput || validInputs.indexOf(userInput) < 0) {
    alert("Invalid input!");
    userInput = prompt("Please enter a day of week");
  }

  var dayIndex = validInputs.indexOf(userInput);

  function print(today, next) {
    console.log(`You entered: ${today}`);
    console.log(`The following day is: ${next}`);
  }

  switch (userInput) {
    case "sun":
      print("sun", "mon");
      break;
    case "mon":
      print("mon", "tue");
      break;
    case "tue":
      print("tue", "wed");
      break;
    case "wed":
      print("wed", "thu");
      break;
    case "thu":
      print("thu", "fri");
      break;
    case "fri":
      print("fri", "sat");
      break;
    case "sat":
      print("sat", "sun");
      break;
  }
})();
