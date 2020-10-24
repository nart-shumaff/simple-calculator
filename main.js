//display the clickt num 
let Secnd = false
const inOperator = [];
const inFirstNum = [];
const inSecndNum = [];
inOperator[0] = '';
inFirstNum[0] = '';
inSecndNum[0] = '';
const Operator = document.querySelectorAll('.operator')
    //get nums from user 
const Nums = document.querySelectorAll('.num-bt')
const screen = document.querySelector('#screen-contnt')
    // after the user clicks an opresn then save the num to inFirstNum and the clickt Operator in inOperator

Nums.forEach(bt => bt.addEventListener('click', function() {

    if (Secnd === false) {
        document.querySelector('#screen-contnt').textContent += bt.textContent;
        inFirstNum[0] = document.querySelector('#screen-contnt').textContent;
    } else {
        document.querySelector('#screen-contnt').textContent += bt.textContent;
        inSecndNum[0] = document.querySelector('#screen-contnt').textContent;
    }
}))

Operator.forEach(op => op.addEventListener('click', function() {
        document.querySelector('#screen-contnt').textContent = '';
        console.log(op.textContent)
        inOperator[0] = op.textContent
        Secnd = true;

    }))
    // console.log(document.querySelector('#screen-contnt').textContent);

const submit = document.getElementById('anser');
submit.addEventListener('click', function() {
    //save screen content to inSecndNum
    operate(inOperator, inFirstNum, inSecndNum);

});

function operate(operator, numberFirst, numberSecnd) {

    if (operator[0] == '+') {
        // function (numberFirst, numberSecnd)
        console.log('clickt +')
        let result = parseFloat(numberFirst[0]) + parseFloat(numberSecnd[0]);
        document.querySelector('#screen-contnt').textContent = result;

    };
    if (operator[0] == '-') {
        // function (numberFirst, numberSecnd)
        let result = parseFloat(numberFirst[0]) - parseFloat(numberSecnd[0]);
        document.querySelector('#screen-contnt').textContent = result;
    };
    if (operator[0] == '*') {
        // function (numberFirst, numberSecnd)
        let result = parseFloat(numberFirst[0]) * parseFloat(numberSecnd[0]);
        document.querySelector('#screen-contnt').textContent = result;
    };
    if (operator[0] == '/') {
        // function (numberFirst, numberSecnd)
        let result = parseFloat(numberFirst[0]) / parseFloat(numberSecnd[0]);
        document.querySelector('#screen-contnt').textContent = result;
    };

    // return (numberFirst) (operator) (numberSecnd); 
}
//delet bt 
document.querySelector("#reset").addEventListener('click', delet);

function delet() {
    Secnd = false
    inOperator[0] = '';
    inFirstNum[0] = '';
    inSecndNum[0] = '';
    document.querySelector('#screen-contnt').textContent = '';
}