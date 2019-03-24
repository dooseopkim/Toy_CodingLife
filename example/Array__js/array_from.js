// 1. String에서 배열 만들기
let arr = Array.from("korea");
console.log(arr); // [ 'k', 'o', 'r', 'e', 'a' ]

// 2. Set에서 배열 만들기
const s = new Set(["k", "k", "o", "r", "e", "a", "a", "a"]);
arr = Array.from(s);
console.log(arr); // [ 'k', 'o', 'r', 'e', 'a' ]

// 3. Map에서 배열 만들기
const m = new Map([["1", "k"], ["2", "o"], ["3", "r"], ["4", "e"], ["5", "a"]]);
arr = Array.from(m);
console.log(arr); // [ [ 1, 'k' ], [ 2, 'o' ], [ 3, 'r' ], [ 4, 'e' ], [ 5, 'a' ] ]
arr = Array.from(m.values());
console.log(arr); // [ 'k', 'o', 'r', 'e', 'a' ]
arr = Array.from(m.keys());
console.log(arr); // [ '1', '2', '3', '4', '5' ]

// 4. 배열 형태를 가진 객체(args)에서 배열 만들기
function f() {
  return Array.from(arguments);
}
console.log(f(1, 2, 3, 4, 5)); // [ 1, 2, 3, 4, 5 ]

// 5. Array.from에 mapFn적용
arr = [1, 2, 3, 4, 5];
const double = function(r) {
  return r * 2;
};
const doubleArr = Array.from(arr, double);
console.log(doubleArr); // [ 2, 4, 6, 8, 10 ]

// 수열 만들기
const seq = function(start, stop, step) {
  return Array.from({ length: (stop - start) / step }, function(_, i) {
    return start + i * step;
  });
};
const seqArr = seq(1, 11, 1);
console.log(seqArr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
