let billAmount = document.querySelector(".bill-input");
let numOfPeople = document.querySelector(".numPeople-input");
let tipPercent = document.querySelectorAll(".tip-percentage-box");
let customInput = document.querySelector(".custom-input");
let btn = document.querySelector(".reset-btn");
let tipAP = document.querySelector(".tipAP");
let totalAP = document.querySelector(".totalAP");
let text = document.querySelectorAll(".text p");

let res;
let totalRes;

btn.addEventListener("click", () => {
  if (billAmount.value === "" || numOfPeople.value === "") {
    text.forEach((tx) => {
      tx.style.display = "flex";
    });
    billAmount.style.border = "1px solid #cf6840";
    numOfPeople.style.border = "1px solid #cf6840";
  } else if (btn.textContent === "RESET") {
    billAmount.value = numOfPeople.value = customInput.value = "";
    tipAP.textContent = "0.00";
    totalAP.textContent = "0.00";
    btn.textContent = "CALCULATE";
  } else {
    res = calculateTip();
    tipAP.textContent = res.toFixed(2);
    totalRes = calculateTotal();
    totalAP.textContent = totalRes.toFixed(2);
    btn.textContent = "RESET";
  }
});

let tip = 0;

function selectTip() {
  tipPercent.forEach((tp) => {
    tp.addEventListener("click", () => {
      if (tp.textContent === "5%") tip = 5;
      if (tp.textContent === "10%") tip = 10;
      if (tp.textContent === "15%") tip = 15;
      if (tp.textContent === "25%") tip = 25;
      if (tp.textContent === "50%") tip = 50;
    });
  });

  customInput.addEventListener("input", () => {
    tip = customInput.value;
  });
}
selectTip();

function calculateTip() {
  return (billAmount.value * tip) / (numOfPeople.value * 100);
}

function calculateTotal() {
  return billAmount.value / numOfPeople.value + res;
}
