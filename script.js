let celsius = Number(prompt("Ingresa la temperatura en grados Celsius:"));

while (isNaN(celsius)) {
  alert("Error: ingresa un valor numérico.");
  celsius = Number(prompt("Ingresa la temperatura en grados Celsius:"));
}

const kelvin = celsius + 273.15;
const fahrenheit = (celsius * 9) / 5 + 32;

document.getElementById("kelvin").textContent = `Grados Kelvin: ${kelvin}`;
document.getElementById("fahrenheit").textContent = `Grados Fahrenheit: ${fahrenheit}`;
