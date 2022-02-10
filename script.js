let display = document.querySelector("#screen");
const allBtn = document.querySelectorAll("button");
if (display.value === "") {
  document.getElementById("answer").disabled = true;
}
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    let btnText = e.target.innerText;
    if (btnText === "AC") {
      display.value = "";
    } else if (btnText === "÷") {
      display.value = "/";
    } else if (btnText === "×") {
      display.value = "*";
    } else if (btnText === "=") {
      display.value = eval(display.value);
    } else if (btnText === "√") {
      display.value = Math.sqrt(display.value);
    } else if (btnText === "n²") {
      display.value = Math.pow(display.value, 2);
    } else {
      display.value += btnText;
    }
  });
}
