const name = "Michał";
const age = 29;

alert(`Witaj odwiedzający, nazywam się ${name}, a to jest moja strona!`);

// function calculate(myNumber) {
//     console.log(`Dostałam ${myNumber}`);
//     return myNumber*7
// }

// calculate(age);

const greet = (age, name) => {
  console.log(`Witaj odwiedzający, nazywam się ${name} i mam ${age} lat`);
};

greet(age, name);

// function greet(age, name) {
//     console.log(`Witaj odwiedzający, nazywam się ${name} i mam ${age} lat`)
// }

// greet(age, name);

// const myResult = calculate(age);
// console.log(age);

// console.log(myResult);

// const greet = (age, firstName) => {
//     console.log(`Witaj odwiedzający, nazywam się ${firstName} i mam ${age} lat`)

// }

// // greet(29, `Michał`);

// const humanOne = {
//   name: "Maciek",
//   age: 32,
// };

// const humanTwo = {
//   name: "Stefan",
//   age: humanOne.age,
// };

// humanOne.age = 32;

// console.log(humanTwo);
// console.log(humanOne);

// if ("Java" != "Javascript") {
//   console.log("Java to nie Javascript");
// }

// if (humanOne.age < humanTwo.age) {
//   console.log("HumanOne jest młodszy!");
// } else if (humanOne.age === humanTwo.age) {
//   console.log("Są równolatkami!");
// } else {
//   console.log("HumanOne jest starszy!");
// }

// const myNubmer = 3;

// switch (myNubmer) {
//   case 7:
//     console.log("Jestem siódemką");
//     break;
//   case 9:
//     console.log("Jestem dziewiątką");
//     break;
//   default:
//     console.log("Jestem czymś innym!");
// }


const button = document.querySelector('.action--js');

button.addEventListener('click', () => {
  const heading = document.querySelector('.main__header--js');
  heading.innerHTML = 'Wypełniłem ten nagłówek za pomocą JS poprzez kliknięcie w przycisk';
});

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
const nav = document.querySelector('.navigation--js');
nav.classList.toggle('navigation--open');


})

