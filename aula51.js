const elementos_array = [1, 2, 3, 5, 8, 9, 10];

const it_el=elementos_array[Symbol.iterator]()

console.log(elementos_array);
console.log(it_el);
console.log(it_el.next());
console.log(it_el.next());
console.log(it_el.next());
console.log(it_el.next());
console.log(it_el.next());
console.log(it_el.next());
console.log(it_el.next());



