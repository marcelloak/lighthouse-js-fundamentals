const ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  let output = name + " is " + age + " years old.";
  return output;
}