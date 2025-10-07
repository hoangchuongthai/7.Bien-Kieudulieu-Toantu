//tinh dien tich hinh tron
let input  = document.getElementById('variable');
let result = document.getElementById('result');

document.getElementById('btn').addEventListener('click', () => {
    let c = Number(input.value);
    let f = c * c * 3.14;
    result.innerHTML = 'Dien Tich: ' + f.toFixed(1);
});
