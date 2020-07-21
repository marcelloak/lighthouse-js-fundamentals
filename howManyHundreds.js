const howManyHundreds = function (num) {
  let hundreds = num % 100;
  hundreds = num - hundreds;
  hundreds /= 100;
  return hundreds;
}