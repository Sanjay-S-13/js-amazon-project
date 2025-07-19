import { formatCurrency } from "../scripts/utils/money.js";

//AUTOMATED TESTING

console.log('Test Suite : FormatCurrency')

//BASIC TEST CASES

console.log('converts cents into dollars');
//testcase1
if(formatCurrency(1094) === '10.94'){
    console.log('1.passed');
}
else{
    console.log('1.failed');
}


//EDGE TEST CASES

console.log('works with zero');
//testcase2
if(formatCurrency(0) === '0.00'){
    console.log('2.passed');
}
else{
    console.log('2.failed');
}

//testcase3
console.log('rounds Up');
if(formatCurrency(2000.5) === '20.01'){
    console.log('3.passed');
}
else{
    console.log('3.failed');
}


//testcase4
console.log('Five Digit number');
if(formatCurrency(100203) === '1002.03'){
    console.log('4.passed');
}
else{
    console.log('4.failed');
}


//testcase5
console.log('rounds Up');
if(formatCurrency(2000.4) === '20.00'){
    console.log('5.passed');
}
else{
    console.log('5.failed');
}

