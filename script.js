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