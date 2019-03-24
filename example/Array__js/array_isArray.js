// true
Array.isArray([]);
Array.isArray([1]);
Array.isArray([1, 2, 3]);
Array.isArray(new Array());
Array.isArray(Array.from("kim"));

// false
Array.isArray();
Array.isArray(1);
Array.isArray("kim");
Array.isArray({ id: 1, name: "kim" });
Array.isArray(true);
Array.isArray(undefined);

console.log(Array.isArray([]));
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({ id: 1, name: "kim" }));
console.log(Array.isArray(true));
console.log(Array.isArray(undefined));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(Array.from("korea")));
console.log(Array.isArray(Array.from("kim")));
console.log(Array.isArray());
