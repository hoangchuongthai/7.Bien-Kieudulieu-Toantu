let physics  = parseInt(prompt("physics score:"));
let chemistry= parseInt(prompt("chemistry score:"));
let biology  = parseInt(prompt("biology score:"));

let total = physics + chemistry + biology;
let avg = total/3;
alert(`Tổng: ${total}\nTrung bình: ${avg.toFixed(2)}`);
