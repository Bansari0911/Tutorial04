(function () {
  var userName = prompt("Please enter your name");
  var units = prompt("Please enter the number units completed at college");
  var standing = "Freshman";

  while (isNaN(Number(units)) && units < 0) {
    alert("Please enter valid number");
    units = prompt("Please enter the number units completed at college");
  }

  if (units > 30 && units < 61) {
    standing = "Sophomore";
  } else if (units > 60 && units <= 90) {
    standing = "Junior";
  } else if (units > 90) {
    standing = "Senior";
  } else {
    standing = "Freshman";
  }
  console.log(`Hello ${userName}`);
  console.log(`Your grade standing is ${standing}`);
})();
