
function Input() {
    let Number1 = parseInt(prompt("Enter first number"));
    let Number2 = parseInt(prompt("Enter second number"));
    let Operation = prompt("Enter operation");

    return {
        Number1,
        Number2,
        Operation
    }
}

const add = (Number1, Number2) => {
    return Number1 + Number2
}

const subtract = (Number1, Number2) => {
    return Number1 - Number2
}

const multiply = (Number1, Number2) => {
    return Number1 * Number2
}
const divide = (Number1, Number2) => {
     return Number1 / Number2
 }


function main() {
    const {Number1, Number2, Operation} = Input();

    const result = Operation === "+" ? add(Number1, Number2) : 
    Operation === "-" ? subtract(Number1, Number2) : 
    Operation === "*" ? multiply(Number1, Number2) : 
    Operation === "/" ? divide(Number1, Number2) : "Invalid operation";

    console.log(result);

}

main()