// console.log("hello world");

const fruit = ["apple", "orange", "banana"];

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

for (const item of fruit) {
  console.log(item);
}

const inventory = {
  apple: 2,
  banana: 3,
};

for (const fruit in inventory) {
  console.log(inventory[fruit]);
}

const filteredFruit = fruit.filter((item) => item.startsWith("a"));
console.log(filteredFruit);
