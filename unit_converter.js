const convertBtn = document.getElementById("convert-btn");
const inputValue = document.getElementById("input-value");

let inputFromLocalStorage = JSON.parse(localStorage.getItem("inputValue"));

if (inputFromLocalStorage) {
  inputValue.value = inputFromLocalStorage;
  convertValue();
}

convertBtn.addEventListener("click", convertValue);

function convertValue() {
  let feet = inputValue.value * 3.281;
  let meters = inputValue.value / 3.281;
  let gallons = inputValue.value * 0.264;
  let liters = inputValue.value / 0.264;
  let pound = inputValue.value * 2.204;
  let kilos = inputValue.value / 2.204;

  const lengthField = document.getElementById("length-field");
  const volumeField = document.getElementById("volume-field");
  const massField = document.getElementById("mass-field");

  lengthField.textContent = `${inputValue.value} meters = ${feet.toFixed(3)} feet | ${inputValue.value} feet = ${meters.toFixed(3)} meters`;

  volumeField.textContent = `${inputValue.value} liters = ${gallons.toFixed(3)} gallons | ${inputValue.value} gallons = ${liters.toFixed(3)} liters`;

  massField.textContent = `${inputValue.value} kilos = ${pound.toFixed(3)} pounds | ${inputValue.value} pounds = ${kilos.toFixed(3)} kilos`;

  localStorage.setItem("inputValue", JSON.stringify(inputValue.value));
}
