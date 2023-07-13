// Basic test
const sum = (num1, num2) => {
    return num1 + num2;
}

if(0) {
    console.log('this is truthy')
} else {
    console.log('this is falsy')
}


// This should be exported to run test
module.exports = sum;