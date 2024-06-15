// length x width = meter squared
while (true) {
  let choice = prompt(
    "Please choose meters or feets? (m = meters, f = feet): ",
  ).toLowerCase();
  if (choice.length > 1) {
    alert("Please enter only one character");
  } else if (!isNaN(choice)) {
    alert("Please only enter numerice values");
  } else if (choice !== "m" || choice !== "f") {
    alert("Please m of f only!");
  } else {
    lengthOfRoom =
      choice === "f"
        ? prompt("What is the length of the room in feet? ")
        : prompt("What is the width of the room in meter? ");
    widthOfRoom =
      choice === "m"
        ? prompt("What is the width of the room in meter? ")
        : prompt("What is the width of the room in feet? ");
    const sqFt = lengthOfRoom * widthOfRoom;
    const sqM = choice == "f" ? sqFt * 0.09290304 : sqFt;
    if (isNaN(lengthOfRoom) || isNaN(widthOfRoom)) {
      alert("Please only enter numeric values!");
    } else {
      if (choice === "m") {
        alert(
          "You entered dimensions of " +
            lengthOfRoom +
            " meter by " +
            widthOfRoom +
            " meter.",
        );

        alert("The area is " + sqFt + " square meters.");

        break;
      } else {
        alert(
          "You entered dimensions of " +
            lengthOfRoom +
            " feet by " +
            widthOfRoom +
            " feet.",
        );

        alert(
          "The area is " +
            sqFt +
            " square feet or " +
            sqM.toFixed(3) +
            " square meters.",
        );
        break;
      }
    }
  }
}
