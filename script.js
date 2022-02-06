let lightMode = {
    backgroundColor: 'rgba(173, 235, 229, 0.692)',
    calculatorColor: 'white',
    fontColor: 'black'
}

let darkMode = {
    backgroundColor: 'rgb(16, 17, 17)',
    calculatorColor: 'rgb(73, 73, 73)',
    fontColor: 'white'
}

let bill = document.getElementById('bill-number');
let tip5 = document.getElementById('tip5');
let tip10 = document.getElementById('tip10');
let tip15 = document.getElementById('tip15');
let tip25 = document.getElementById('tip25');
let tip50 = document.getElementById('tip50');
let customTip = document.getElementById('custom-tip');
let customTipInput = document.getElementById('custom-tip-input');
let people = document.getElementById('people');
let tipPerPerson = document.getElementById('tip-per-person');
let totalPerPerson = document.getElementById('total-per-person');
let reset = document.getElementById('reset');
let switchContainer = document.getElementById('switch-container');
let modeSwitch = document.getElementById('mode-switch');
let sun = document.getElementById('sun');
let moon = document.getElementById('moon');
let body = document.querySelector('body');
let calculator = document.getElementById('calculator');
let switchOn = false;

let splitter = (amount, percent, quantity) => {
    let tipTotal = amount * percent;
    let personTotal = amount / quantity;
    let tipTotalPerPerson = tipTotal / quantity;
    let total = personTotal + tipTotalPerPerson;

    tipPerPerson.innerHTML = `$${tipTotalPerPerson.toFixed(2)}`
    totalPerPerson.innerHTML = `$${total.toFixed(2)}`;
    // console.log(`$${total.toFixed(2)}`);
};

tip5.addEventListener('click', (e) => {
    // e.preventDefault();
    splitter(bill.value, e.target.value, people.value);
})

tip10.addEventListener('click', (e) => {
    // e.preventDefault();
    splitter(bill.value, e.target.value, people.value);
})

tip15.addEventListener('click', (e) => {
    // e.preventDefault();
    splitter(bill.value, e.target.value, people.value);
})

tip25.addEventListener('click', (e) => {
    // e.preventDefault();
    splitter(bill.value, e.target.value, people.value);
})

tip50.addEventListener('click', (e) => {
    // e.preventDefault();
    splitter(bill.value, e.target.value, people.value);
})

customTip.addEventListener('click', (e) => {
    e.preventDefault();
    customTip.hidden = true;
    customTipInput.hidden = false;
})

customTipInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        splitter(bill.value, `.${e.target.value}`, people.value);
    }
})

reset.addEventListener('click', (e) => {
    e.preventDefault();
    bill.value = '';
    people.value = '';
    tipPerPerson.innerHTML = '$0.00';
    totalPerPerson.innerHTML = '$0.00';
    customTip.hidden = false;
    customTipInput.hidden = true;
    customTipInput.value = '';
})



modeSwitch.addEventListener('click', () => {
    if (switchOn === false) {
        modeSwitch.innerHTML = 'Dark';
        modeSwitch.style.backgroundColor = 'black'
        modeSwitch.style.color = 'white';
        switchContainer.style.border = 'rgb(7, 92, 73) solid 3px'
        sun.hidden = false
        moon.hidden = true
        body.style.backgroundColor = darkMode.backgroundColor;
        calculator.style.backgroundColor = darkMode.calculatorColor;
        calculator.style.color = darkMode.fontColor;
        switchOn = true
    } else {
        modeSwitch.innerHTML = 'Light';
        modeSwitch.style.backgroundColor = 'white'
        modeSwitch.style.color = 'black';
        switchContainer.style.border = 'black solid 3px'
        sun.hidden = true
        moon.hidden = false
        body.style.backgroundColor = lightMode.backgroundColor;
        calculator.style.backgroundColor = lightMode.calculatorColor;
        calculator.style.color = lightMode.fontColor;
        switchOn = false
    }
})