// var numbers = 52;
// numbers = 50;
// console.log(numbers)

// var numbers = [
//   154, 55, 64, 654, 565, 4, 6552, 4551, 84, 52, 47, 6, 15, 6, 14, 65, 54,
// ];

// var num = numbers[10];
// var number = numbers[3];

// numbers[2] = 500;
// var masud = numbers.indexOf(4551);
// console.log(masud);

// const getTkFromRaihan = "tk dimuna";
// if (getTkFromRaihan) {
//   console.log("Khana hobe");
// } else if (!getTkFromRaihan) {
//   console.log("khana hobe na");
// }

// var a = 1;
// while (a < 10) {
//   if (a % 2 == 0) {
//     console.log(a, "this is even");
//   }
//   else{
//     console.log(a,"this is odd")
//   }
//   a += 1;
// }

// for (i = 1; i < 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i, ": this is even loop");
//   } else {
//     console.log(i, ": this is odd loop");
//   }
// }

// for each

// const number = [45, 46, 64, 664, 688, 54];
// number.forEach(myFunction);
// function myFunction(value) {
//   if (value % 2 == 0) {
//     console.log(value, "is even number");
//   } else {
//     console.log(value, "is odd number");
//   }
// }

function findOddsum(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 !== 0) {
      console.log(i, number[i]);
      sum = sum + i;
    }
  }
  return sum;
}

const myNumber = [41, 7486, 7486, 3464, 87, 348, 1];
const result = findOddsum(myNumber);
