/*Simple Javascript code that displays welcome message*/

function welcome(firstName, lastName) {
  const fullName = firstName + " " + lastName;
  function displayFullName() {
    alert("Welcome " + fullName + "!")
  }
  displayFullName();
}
