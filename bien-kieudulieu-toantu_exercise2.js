let input  = document.getElementById('variable');
let result = document.getElementById('result');

document.getElementById('btn').addEventListener('click', () => {
    let c = Number(input.value);
    let f = c * 9/5 + 32;
    result.innerHTML = 'Result: ' + f.toFixed(1);
});
