let num: number = 5;
console.log(num);

//Arrays
let integersArray: number[] = [1, 2, 3, 4, 5];
console.log(integersArray);
let x: number | string = 4;
console.log(x);
x = "yaseen";
console.log(x);
// x=true; Error

//Error only 1 type can by applied
// const arr: number[] | string[] = ['asasa'121];

//ENUMS
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
// enum Direction {
//   Up = "Up",
//   Down = "left",
//   Left = "left",
//   Right = "right",
// }

console.log(Direction.Right);

//Objects
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "yaseen",
  age: 14,
};
console.log(user);

//Type Assertion
let id: any = 1;

const Id = <number>id;
const userId = id as number;

//Function
function addNum(a: number, b: number): number {
  return a + b;
}
console.log(addNum(3, 4));

// Interface
// (Optional)
interface UserId {
  readonly id: number;
  name: string;
  age?: number;
  currentAge?: () => number;
}

const user1: UserId = {
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
