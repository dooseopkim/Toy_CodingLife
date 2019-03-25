// 1. target이 음수일 때
// start의 기본값은 0, end의 기본값은 arr.length 임을 기억하자.
[1, 2, 3, 4, 5].copyWithin(-2); // 는
[1, 2, 3, 4, 5].copyWithin(-2, 0, this.length); // 와 같다.
[1, 2, 3, 4, 5].copyWithin(2);
// [ 1, 2, 3, 1, 2 ]
// 2. start값을 부여할 때
[1, 2, 3, 4, 5].copyWithin(0, 3);
[1, 2, 3, 4, 5].copyWithin(2);
console.log([1, 2, 3, 4, 5].copyWithin(-2));
console.log([1, 2, 3, 4, 5].copyWithin(-2, 0, this.length));
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
console.log([1, 2, 3, 4, 5].copyWithin(2));
console.log([1, 2, 3, 4, 5].copyWithin(2));
// console.log(arr4);
// console.log(arr.copyWithin(-2));
// console.log(arr.copyWithin(-2, 0, arr.length));
// console.log(arr.copyWithin(0, 3));
// console.log(arr);
