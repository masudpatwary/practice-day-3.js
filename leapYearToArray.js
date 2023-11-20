function findLeapYear(years) {
  for (let i = 0; i < years.length; i++) {
    if (years[i] % 4 == 0) {
      console.log(years[i], "is leap year");
    } else {
      console.log(years[i], "is not leap year");
    }
  }
  return years;
}
const myYear = [2023, 2024, 2025, 2028, 2030];
const result = findLeapYear(myYear);

function sum(a, b) {
  return a + b;
}

const sum = (a, b) => {
  return a + b;
};
console.log(sum(5, 6));
