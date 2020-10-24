//get nums from user 
//display the clickt num 

// after the user clicks an opresn then save the num to inFirstNum and the clickt Operator in inOperator
//
const Operator = document.querySelectorAll('.operator')
const Nums = document.querySelectorAll('.num-bt')
let Secnd = false
Nums.forEach(bt => bt.addEventListener('click', function() {
    if (Secnd == false) {
        document.querySelector('#screen-contnt').textContent += bt.textContent;
        inFirstNum[0] = document.querySelector('#screen-contnt').textContent;
    } else {
        document.querySelector('#screen-contnt').textContent += bt.textContent;
        inSecndNum[0] = document.querySelector('#screen-contnt').textContent;
    }
}))

Operator.forEach(bt => bt.addEventListener('click', function() {
    document.querySelector('#screen-contnt').textContent = '';
    inOperator[0] = bt.textContent
    Secnd = true;

}))
console.log(document.querySelector('#screen-contnt').textContent);
const inOperator = [];
const inFirstNum = [];
const inSecndNum = [];
const submit = document.getElementById('anser');
submit.addEventListener('click', function() {
    //save screen content to inSecndNum
    console.log(operate(inOperator[0], inFirstNum[0], inSecndNum[0]));

});

function operate(operator, numberFirst, numberSecnd) {

    if (operator == '+') {
        // function (numberFirst, numberSecnd)
        return numberFirst + numberSecnd;
    };
    if (operator == '-') {
        // function (numberFirst, numberSecnd)
        return numberFirst - numberSecnd;
    };
    if (operator == '*') {
        // function (numberFirst, numberSecnd)
        return numberFirst * numberSecnd;
    };
    if (operator == '/') {
        // function (numberFirst, numberSecnd)
        return numberFirst / numberSecnd;
    };
    console.log('clickt ?')
        // return (numberFirst) (operator) (numberSecnd); 
}