const bt9 = document.getElementsByClassName("num-bt").item(0)
addEventListener("click", function() {
    const bt = document.getElementsByClassName("num-bt").item(0)
    document.getElementById("screen-contnt").innerHTML = bt.getAttribute("data-num");
  });
//get nums from user 
//display the clickt num 
const inOperator = '+';
const inFirstNum = 4 ;
const inSecndNum = 5 ;
const submit = document.getElementById('anser');  
submit.addEventListener('click', operate());

// function (inOperator , inFirstNum ,inSecndNum)
// {
//   console.log(operate(inOperator , inFirstNum ,inSecndNum));
//   console.log("good")
// }

function operate (operator , numberFirst , numberSecnd){
  
    if(operator == '+') {
      // function (numberFirst, numberSecnd)
        return numberFirst + numberSecnd ; 
    };
    if(operator == '-') {
      // function (numberFirst, numberSecnd)
        return numberFirst - numberSecnd ;
    };
    if(operator == '*') {
      // function (numberFirst, numberSecnd)
        return numberFirst * numberSecnd ;
    };
    if(operator == '/') {
      // function (numberFirst, numberSecnd)
        return numberFirst / numberSecnd ;
    };
    console.log('gg')
    // return (numberFirst) (operator) (numberSecnd); 
}
//console.log(operate('-', 20 ,3))
