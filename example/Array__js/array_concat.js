// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = ["a", "b", "c", "d"];
// let arr3 = ["a", ["b", ["c", "d"]]];
// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr3));
// console.log(arr1);

// 1. 배열 두 개 이어붙이기
const alpha = ["a", "b", "c"];
const num = [1, 2, 3];
alpha.concat(num); // [ 'a', 'b', 'c', 1, 2, 3 ]

// 2. 배열 세 개 이어붙이기
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
num1.concat(num2).concat(num3);
num1.concat(num2, num3);
// 위 두 방법은 같다. [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// 3. 배열에 값 이어붙이기
const abc = ["a", "b", "c"];
abc.concat(1, 2, 3); // [ 'a', 'b', 'c', 1, 2, 3 ]

console.log(alpha.concat(num));
console.log(num1.concat(num2).concat(num3));
console.log(num1.concat(num2, num3));
console.log(abc.concat(1, 2, 3));
