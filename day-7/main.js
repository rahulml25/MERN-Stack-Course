// var x = 5;
// console.log(x);
// var x = 7;
// console.log(x);

// let x = 5;
// console.log(x);
// let x = 7;
// console.log(x);

// const x = 5;
// console.log(x);
// const x = 7;
// console.log(x);

// const x = 5;
// console.log(x);
// x = 7;
// console.log(x);

// let x = 5;
// console.log(x);
// x = 7;
// console.log(x);

// const x;
// x = 7;
// console.log(x);

// const x;
// x = 7;
// console.log(x);

// const x = 7;
// console.log(x);

// const x = 7;
// console.log(x);

// const val = 12;
// console.log(val == "12");
// console.log(val === "12");

// const val = 12;
//
// if (val == "12") {
//   console.log("They are same.");
// } else {
//   console.log("They are not same.");
// }

// const val = 12;
//
// if (val === "12") {
//   console.log("They are same.");
// } else {
//   console.log("They are not same.");
// }

// const bool = true;
// console.log(bool ? "true" : "false");

// console.log(parseInt("1x4"));

// // Implicit
// let val = 5 + "1";
// console.log(val);
// console.log("5" - 2);
// // Explicit
// val = `${52}`;
// console.log(val);
// // Manual
// val = Number("53");
// console.log(val);

// const bool = true;
// console.log(bool ? "true" : "false");

// let user1 = {
//   name: "Rahul Mondal",
//   roll: 120,
// };
// let user2 = {
//   name: "None Mondal",
//   roll: 121,
// };
// console.log(user1);
// console.log(user2);
// console.log(user1.name);
// console.log(user2.name);

// let array = [1, 34.5, "Me", -30];
// console.log(array);
// console.log(array[1]);

// let array1 = [0, 34.5, "Me", -30];
// let array2 = [7, "You", -55];
// console.log(array1.concat(array2));
// // console.log([...array1, ...array2]);

// let user1 = {
//   name: "Someone",
//   age: 20,
//   state: "UP",
// };
// const { name, ...rest } = user1;
// console.log(name, rest);

let user1 = {
  name: "Bikash",
  rest: {
    age: 20,
    state: "UP",
  },
};

console.log(user1.name, user1.rest);
const { name, ...rest } = user1;
console.log(name, rest);
