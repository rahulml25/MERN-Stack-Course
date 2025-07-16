// const student = new Object();
// console.log(student);

// const student = {};
// console.log(student);

// const student = new Object();
// student.name = "Rahul Mondal";
// student.age = 27;
// console.log(student);

// const student = {
//   name: "Rahul Mondal",
//   email: "rahul@example.com",
//   phone: "+1 9999988888",
//   name: {
//     firstname: "Rahul",
//     lastname: "Mondal",
//   },
// };
// console.log(student);
//
// const { name, phone } = student;
// console.log(name, phone);
//
// const { firstname, lastname } = student.name;
// console.log(firstname, lastname);

// const order = {
//   id: "ORD123",
//   consumer: {
//     name: "Rahul",
//     address: {
//       city: "Kolkata",
//       pin: "700001",
//     },
//   },
// };
// console.log(order);

// const {
//   consumer,
//   consumer: { address },
// } = order;
// console.log(consumer, address);

// const student = {
//   name: "Rahul Mondal",
//   age: 27,
//   read() {
//     return "Reading books";
//   },
// };
// console.log(student.name);
// console.log(student.read());

// function showDetails() {
//   return `${this.title} by ${this.author}`;
// }
//
// const book1 = {
//   title: "Alphabets",
//   category: "Kids",
//   author: "Rahul",
//   details: showDetails,
// };
// const book2 = {
//   title: "Superman Comic",
//   category: "Teens",
//   author: "Rahul",
//   details: showDetails,
// };
//
// console.log(book1, book2);
// console.log(book1.details());
// console.log(book2.details());

// function showDetails() {
//   return `${this.title} by ${this.author}.`;
// }
//
// const book1 = {
//   title: "Alphabets",
//   category: "Kids",
//   author: "Rahul",
// };
// const book2 = {
//   title: "Superman Comic",
//   category: "Teens",
//   author: "Rahul",
// };
// book1.details = showDetails;
// book2.details = showDetails;
//
// console.log(book1, book2);
// console.log(book1.details());
// console.log(book2.details());

// const car1 = {
//   brand: "Suzuki",
//   start: startEngine,
// };
// function startEngine() {
//   return `${this.brand} car started.`;
// }
// console.log(car1.start());

// const sym1 = Symbol("id1");
// const sym2 = Symbol("id2");

// console.log(typeof sym1);
// console.log(typeof sym2);
// console.log(typeof sym1 == typeof sym2);
// console.log(typeof sym1 === typeof sym2);
// console.log(sym1 == sym2);
// console.log(sym1 === sym2);

// const id1 = Symbol("id1");
// const id2 = Symbol("id1");
// const user = {
//   [id1]: 101,
//   name: "Jhon",
// };
// console.log(id1 === id2);
// console.log(user);
// console.log(user[id1]);

// const obj1 = { a: 1 };
// const obj2 = { b: 2 };
// const obj3 = { c: 3 };
// const objAll = Object.assign(obj1, obj2, obj3);

// console.log({ ...obj1, ...obj2, ...obj3 });
// console.log({ a: obj1.a, b: obj2.b, c: obj3.c });
// console.log(objAll);

const obj1 = { a: 1, b: 2, c: 3 };
console.log(Object.hasOwn(obj1, "a"));
