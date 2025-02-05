let tempInput = document.getElementById("tempInput");
let ctof = document.getElementById("ctof");
let ftoc = document.getElementById("ftoc");
let result = document.getElementById("result");

function convert() {
  if (ctof.checked) {
    let temp = Number(tempInput.value);
    temp = temp * (9 / 5) + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (ftoc.checked) {
    let temp = Number(tempInput.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = "Select A Unit";
  }
}
