var obj1 = { x: 10 };

var obj2 = Object.create(obj1);

var obj3 = Object.create(obj2);

obj2.x = 20;

var result = obj3.x + 10;
console.log(result, "here");
console.log(obj1, obj2, obj3, "there");
