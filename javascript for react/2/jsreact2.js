1;
let animal = {
  jumps: null,
};

let rabbit = {
  __proto__: animal,
  jumps: true,
};
alert(rabbit.jumps); // true
delete rabbit.jumps;
alert(rabbit.jumps); // null
delete animal.jumps;
alert(rabbit.jumps); // undefined

2;
let pockets = {
  money: 2000,
};

let bed = {
  __proto__: pockets,
  sheet: 1,
  pillow: 2,
};

let table = {
  __proto__: bed,
  pen: 3,
};

let head = {
  __proto__: table,
  glasses: 1,
};

3;
let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();
//rabbit

4;
let hamster = {
  eat(food) {
    if (!this.stomach) {
      this.stomach = [];
    }
    this.stomach.push(food);
  },
};
let speedy = {
  __proto__: hamster,
};
let lazy = {
  __proto__: hamster,
};
speedy.eat('apple');
alert(speedy.stomach);
alert(lazy.stomach);
