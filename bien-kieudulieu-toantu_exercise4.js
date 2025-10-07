//tinh chu vi hinh tron
let input  = document.getElementById('variable');
let result = document.getElementById('result');

document.getElementById('btn').addEventListener('click', () => {
    let c = Number(input.value);
    let f = c * 2 * 3.14;
    result.innerHTML = 'Chu Vi: ' + f.toFixed(1);
});