function add(num1, num2){
    return num1+num2;
}
function subtract(num1, num2){
    return num1-num2;
}
function multiply(num1, num2){
    return num1*num2;
}
function divide(num1, num2){
    return num1/num2;
}

function operate(num1, operator,num2){
    if(operator == "+"){
        return add();
    }
    else if(operator == "-"){
        return subtract();
    }
    else if(operator == "*"){
        return multiply();
    }
    else if(operator == "/"){
        return divide();
    }
    else{
        return operate;
    }
}

function buttonPressed(){
    const digitbtns = document.querySelectorAll(".digit");

    const displayOutput = document.querySelector(".Output");

    const zerobtn = document.querySelector(".zerodigit");

    const arithmeticOP = document.querySelectorAll(".childDivofOperator");

    let operatorEntered = false;

    zerobtn.addEventListener("click", () => {
        displayOutput.innerText += zerobtn.innerText;
    })

    digitbtns.forEach( (digit)=> {
        digit.addEventListener("click", () =>{
            displayOutput.innerText += digit.innerText;
        })
    } )

    arithmeticOP.forEach((childDivofOperator)=> {
             childDivofOperator.addEventListener("click", () =>{
                if(displayOutput.innerText === ""){
                    alert("enter a number first");
                }
                else if(!operatorEntered) {
                    displayOutput.innerText += childDivofOperator.innerText;
                    operatorEntered = true;

                }
            });
    });

}
document.addEventListener("DOMContentLoaded", buttonPressed);
