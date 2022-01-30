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