let a = prompt("Enter a:");
let b = prompt("Enter b:");

if (b === 0) {
    alert("Division by zero is not allowed.");
} else if (a % b === 0) {
    alert(`${a} is a multiple of ${b}.`);
} else {
    alert(`${a} is not a multiple of ${b}.`);
}