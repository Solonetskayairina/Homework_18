// console.log({}.prototype === {}.prototype);  true
// тому що ці об'єкти пусті,однаковий тип і мають доступ до одного prototype
//
// function sayHello() {};
// console.log(sayHello.prototype === sayHello.__proto__); false
// sayHello це функція конструктор, у якої є прототип, який вказує на Function.prototype.

// function sayHello() {};
// function sayGoodBye() {};
// console.log(sayHello.__proto__ === sayGoodBye.__proto__); true
// тому що вони створили нові об'єкти та об'єкти __proto__ надають доступ на один prototype
// console.log(sayHello.prototype === sayGoodBye.prototype); false
// об'єкти prototype різні
//
// let arrowFunc = () => {};
// console.log(arrowFunc.prototype === Object.prototype); false
// стрілочна функція не має prototype
//
// let age = 22;
// console.log(age.prototype === Number.prototype); false
// age це змінна, а не числовий об'єкт, тому не має зв'язку з prototype.
// console.log(age.__proto__ === Number.prototype); true
// створенюєтьмя за допомогою конструктора new Number. Коли створюється новий об'єкт, то об'єкту __proto__ надається доступ до prototype
//
// function Test() {}
// console.log(Test.__proto__ === Function.prototype); true
// Test це функція конструктор, у якої є прототип, який вказує на Function.prototype.
//
// let num = 77;
// console.log(num.__proto__ === Number.prototype) true
// створенюєтьмя за допомогою конструктора new Number. Коли створюється новий об'єкт, то об'єкту __proto__ надається доступ до prototype