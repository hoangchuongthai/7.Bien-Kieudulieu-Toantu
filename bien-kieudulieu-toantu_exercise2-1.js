function btn() {
    let c = Number(document.getElementById('celsius').value);
    let rs = c * 9 / 5 + 32;                 // F = C * 9/5 + 32
    document.getElementById("result").innerHTML = "Result: " + rs;
}
btn();