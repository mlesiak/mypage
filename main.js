const name = 'Michał';
const age = 29;



alert('Siema Wszystkim!');

console.log(`Cześć, nazywam się ${name} i mam ${age} lat. Witam na mojej stronie`)


function calculate(myNumber) {
    console.log(`Dostałam ${myNumber}`);
    return myNumber*7
}

const myResult = calculate(age);
console.log(age);


console.log(myResult);

function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);

    element.innerHTML = content;
}

createContent('.main__header--js', 'Siema');


const greet = (age, firstName) => {
    console.log(`Witaj odwiedzający, nazywam się ${firstName} i mam ${age} lat`)

}

greet(29, `Michał`);
