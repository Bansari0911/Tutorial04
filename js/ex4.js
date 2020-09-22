(function () {
  var correctPass = "secret";
  var tries = 1;
  var password = prompt("Enter password");

  while (!password || password !== correctPass) {
    if (tries < 3) {
      password = prompt("Enter password");
      tries++;
    } else {
      alert(
        "Your account is locked! You have entered wrong password for 3 times."
      );
      break;
    }
  }

  if (password && password === correctPass) {
    alert(`You entered correct password after ${tries} tries!`);
  }
})();
