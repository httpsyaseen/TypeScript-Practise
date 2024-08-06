"use strict";
let num = 5;
console.log(num);
//Arrays
let integersArray = [1, 2, 3, 4, 5];
console.log(integersArray);
let x = 4;
console.log(x);
x = "yaseen";
console.log(x);
// x=true; Error
//Error only 1 type can by applied
// const arr: number[] | string[] = ['asasa'121];
//ENUMS
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// enum Direction {
//   Up = "Up",
//   Down = "left",
//   Left = "left",
//   Right = "right",
// }
console.log(Direction.Right);
const user = {
    name: "yaseen",
    age: 14,
};
console.log(user);
//Type Assertion
let id = 1;
const Id = id;
const userId = id;
//Function
function addNum(a, b) {
    return a + b;
}
console.log(addNum(3, 4));
const user1 = {
    id: 1,
    name: "yaseen",
    age: 21,
    currentAge() {
        // return 2024 - this.age;
        return this.age ? 2024 - this.age : 2024;
    },
};
console.log(user1.currentAge && user1.currentAge()); // Output: 2003
//Not Optional
// interface UserId {
//   readonly id: number;
//   name: string;
//   age?: number;
//   currentAge: () => number; // Method is not optional
// }
// const user1: UserId = {
//   id: 1,
//   name: "yaseen",
//   age: 21,
//   currentAge() {
//     return this.age ? 2024 - this.age : 2024;
//   },
// };
// // Call the method
// console.log(user1.currentAge()); // Should work
